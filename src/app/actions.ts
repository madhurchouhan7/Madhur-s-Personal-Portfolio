"use server";

import * as z from "zod";

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});

export async function handleContactForm(values: z.infer<typeof contactFormSchema>) {
  const parsed = contactFormSchema.safeParse(values);
  
  if (!parsed.success) {
    throw new Error("Invalid form data.");
  }

  // In a real application, you would integrate with a service like Firebase
  // to send an email via a Cloud Function or store data in Firestore.
  // For this example, we'll just log it to the console.
  console.log("New contact form submission:");
  console.log(parsed.data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return { success: true, message: "Form submitted successfully" };
}
