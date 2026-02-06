"use client"

import type React from "react"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { trpc } from "@/lib/trpc/react"
import { useToast } from "@/hooks/use-toast"

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  phone: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters",
  }),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export function Contact() {
  const { toast } = useToast()
  const submitContactMutation = trpc.submitContact.useMutation()

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  const handleSubmit = async (data: ContactFormValues) => {
    try {
      const response = await submitContactMutation.mutateAsync({
        ...data,
        phone: data.phone || "",
      })

      if (response.success) {
        toast({
          title: "Success",
          description: "Your message has been sent successfully. We'll get back to you soon!",
        })
        form.reset()
      } else {
        toast({
          title: "Error",
          description: response.error || "Failed to send message. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      })
    }
  }

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-3 sm:mb-4">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Ready to discuss your legal needs? Reach out to us today and let our experienced team provide you with the
            expert guidance you deserve.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          <div className="order-2 lg:order-1">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="font-serif text-lg sm:text-xl lg:text-2xl text-gray-900">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Karachi Office</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      Office no 201, 2nd floor, 11-C,
                      <br />
                      Al-Murtaza Commercial Lane No 1,
                      <br />
                      Phase-VIII, DHA, Karachi
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Malir Office</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      Office No. A-28 First Floor
                      <br />
                      Rafi Mall near District & Session
                      <br />
                      Court Malir
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Hyderabad Office</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      Suite No 10, Ground Floor,
                      <br />
                      The Smart Tower, Korean Housing
                      <br />
                      Scheme II, Hyderabad
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Phone Numbers</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Karachi: 021-33487560, +923322573335
                      <br />
                      Hyderabad: 022-6972208
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Email</h3>
                    <p className="text-gray-600 text-sm sm:text-base">enquiries@sudlegalservices.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Office Hours</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="order-1 lg:order-2">
            <Card>
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="font-serif text-lg sm:text-xl lg:text-2xl text-gray-900">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Full Name *
                            </label>
                            <FormControl>
                              <Input
                                type="text"
                                placeholder="John Doe"
                                className="w-full h-10 sm:h-11"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Phone Number
                            </label>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="+92 300 1234567"
                                className="w-full h-10 sm:h-11"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john@example.com"
                              className="w-full h-10 sm:h-11"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Message *
                          </label>
                          <FormControl>
                            <Textarea
                              rows={4}
                              className="w-full resize-none"
                              placeholder="Please describe your legal matter or inquiry..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white py-3 h-12"
                      disabled={submitContactMutation.isPending}
                    >
                      {submitContactMutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
