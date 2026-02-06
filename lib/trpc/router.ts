import { z } from "zod";
import { router, publicProcedure } from "./init";
import { sendEmail, appendToSheet } from "../email-service";

const contactRequestSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const contactResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  error: z.string(),
});

export const appRouter = router({
  submitContact: publicProcedure
    .input(contactRequestSchema)
    .output(contactResponseSchema)
    .mutation(async ({ input }) => {
      const { name, email, phone, message } = input;

      try {
        await Promise.all([
          sendEmail({ name, email, phone: phone || "", message }),
          appendToSheet({ name, email, phone: phone || "", message }),
        ]);

        return {
          success: true,
          message: "Contact form submitted successfully",
          error: "",
        };
      } catch (error) {
        console.error("Error processing contact form:", error);
        return {
          success: false,
          message: "",
          error: error instanceof Error ? error.message : "Internal server error",
        };
      }
    }),
});

export type AppRouter = typeof appRouter;
