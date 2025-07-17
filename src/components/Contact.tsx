"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Clock, CheckCircle, Rocket, Github, Linkedin, Instagram } from "lucide-react";
import { handleContactForm } from "@/app/actions";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(500),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
        await handleContactForm(values);
        toast({
            title: "Message Sent!",
            description: "Thanks for reaching out. I'll get back to you soon.",
        });
        form.reset();
    } catch (error) {
        toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request. Please try again.",
            variant: "destructive",
        });
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold md:text-4xl">Contact Me</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Let’s work together. Have a project in mind or just want to say hi? Fill out the form below.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="space-y-8">
            <div className="space-y-2">
                <p className="text-lg font-semibold">I'm always open to discussing product design work or partnership opportunities.</p>
            </div>
            <div className="flex items-center gap-6">
                <Link href="https://github.com/madhurchouhan7" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="h-7 w-7" />
                </Link>
                <Link href="https://www.linkedin.com/in/madhur-chouhan07/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-7 w-7" />
                </Link>
                <Link href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Instagram className="h-7 w-7" />
                </Link>
            </div>
             <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                <div className="bg-primary/10 text-primary p-3 rounded-full flex-shrink-0">
                    <Clock className="h-6 w-6"/>
                </div>
                <div>
                    <h3 className="font-semibold">24h response time</h3>
                    <p className="text-sm text-muted-foreground">I'll get back to you as soon as possible.</p>
                </div>
            </div>
            <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0" /> Fast, reliable communication</li>
                <li className="flex items-center gap-3"><Rocket className="h-5 w-5 text-primary flex-shrink-0" /> Clean modern solutions</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0" /> On-time delivery</li>
            </ul>
        </div>
        <div className="p-8 rounded-lg bg-card/50">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Project Idea" {...field} />
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
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell me about your project..." {...field} rows={5} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
