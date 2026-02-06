import nodemailer from "nodemailer";
import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

function getGoogleAuth() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: SCOPES,
  });
  return auth;
}

export async function appendToSheet(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  if (!process.env.GOOGLE_SHEET_ID || !process.env.GOOGLE_CLIENT_EMAIL) {
    console.warn("Google Sheets not configured, skipping sheet append");
    return;
  }

  const auth = getGoogleAuth();
  const sheets = google.sheets({ version: "v4", auth });

  const timestamp = new Date().toISOString();
  const values = [
    [
      timestamp,
      data.name,
      data.email,
      data.phone,
      data.message,
    ],
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Sheet1!A:E",
    valueInputOption: "RAW",
    requestBody: {
      values,
    },
  });
}

export async function sendEmail(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    throw new Error("Gmail credentials not configured");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const emailContent = `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}

Message:
${data.message}
  `.trim();

  const recipients = process.env.GMAIL_RECIPIENTS || process.env.GMAIL_USER;

  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: recipients,
    subject: `New Contact Form Submission from ${data.name}`,
    text: emailContent,
  });
}
