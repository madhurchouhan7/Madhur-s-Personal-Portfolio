'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send, Github, Linkedin, Mail, FileDown, ArrowUpRight } from 'lucide-react';
import { handleContactForm } from '@/app/actions';
import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { motion } from 'framer-motion';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  subject: z.string().min(5, 'Subject must be at least 5 characters.'),
  message: z.string().min(10, 'Message must be at least 10 characters.').max(500),
});

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'madhurchouhan7@gmail.com',
    href: 'mailto:madhurchouhan7@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/madhur-chouhan07',
    href: 'https://www.linkedin.com/in/madhur-chouhan07/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/madhurchouhan7',
    href: 'https://github.com/madhurchouhan7',
  },
  {
    icon: FileDown,
    label: 'Resume',
    value: 'Download PDF',
    href: '#',
  },
];

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', subject: '', message: '' },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await handleContactForm(values);
      toast({
        title: 'Message sent.',
        description: "Thanks for reaching out. I'll get back to you within 24 hours.",
      });
      form.reset();
    } catch {
      toast({
        title: 'Something went wrong.',
        description: 'Please try again or email me directly.',
        variant: 'destructive',
      });
    }
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 50% 100%, rgba(96,165,250,0.05) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative">
        {/* Header */}
        <AnimatedSection variant="fadeUp" className="mb-16 max-w-3xl">
          <p className="text-xs font-mono text-[#6B7280] uppercase tracking-widest mb-4">
            — Get In Touch
          </p>
          <h2 className="font-satoshi text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Let's Build Something{' '}
            <span className="text-[#A3A3A3]">Intelligent</span>
            <br />
            Together.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* LEFT — Contact info */}
          <AnimatedSection variant="fadeUp" delay={0.1}>
            <div className="space-y-8">
              <p className="text-[#A3A3A3] text-base leading-relaxed max-w-md">
                I'm open to research collaborations, AI project discussions, internships, and
                full-time opportunities. Reach out — I respond within 24 hours.
              </p>

              {/* Contact links */}
              <div className="space-y-3">
                {contactLinks.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center justify-between p-4 rounded-xl border border-[#242424] bg-[#141414] hover:border-[#3F3F46] hover:bg-[#1a1a1a] transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-lg bg-[#111111] border border-[#242424] flex items-center justify-center">
                        <Icon className="h-4 w-4 text-[#6B7280] group-hover:text-white transition-colors" />
                      </div>
                    <div>
                        <p className="text-[10px] text-[#6B7280] font-mono uppercase tracking-wider mb-0.5">
                          {label}
                        </p>
                        <p className="text-sm text-white font-medium truncate max-w-[180px] sm:max-w-none">{value}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-[#6B7280] group-hover:text-white transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>

              {/* Response time */}
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <p className="text-xs text-[#6B7280]">
                  Average response time:{' '}
                  <span className="text-[#A3A3A3]">within 24 hours</span>
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* RIGHT — Form */}
          <AnimatedSection variant="fadeUp" delay={0.2}>
            <div className="rounded-2xl border border-[#242424] bg-[#141414] p-5 sm:p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[11px] font-mono text-[#6B7280] uppercase tracking-wider">
                            Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              className="bg-[#111111] border-[#242424] text-white placeholder:text-[#6B7280] focus:border-[#3F3F46] focus:ring-0 rounded-lg h-11 transition-colors"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[11px] font-mono text-[#6B7280] uppercase tracking-wider">
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your@email.com"
                              className="bg-[#111111] border-[#242424] text-white placeholder:text-[#6B7280] focus:border-[#3F3F46] focus:ring-0 rounded-lg h-11 transition-colors"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[11px] font-mono text-[#6B7280] uppercase tracking-wider">
                          Subject
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Research collaboration / Job opportunity / Project..."
                            className="bg-[#111111] border-[#242424] text-white placeholder:text-[#6B7280] focus:border-[#3F3F46] focus:ring-0 rounded-lg h-11 transition-colors"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[11px] font-mono text-[#6B7280] uppercase tracking-wider">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project, research idea, or opportunity..."
                            className="bg-[#111111] border-[#242424] text-white placeholder:text-[#6B7280] focus:border-[#3F3F46] focus:ring-0 rounded-lg resize-none transition-colors"
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <motion.button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white text-[#090909] font-semibold text-sm hover:bg-white/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {form.formState.isSubmitting ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-[#090909]/30 border-t-[#090909] animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-3.5 w-3.5" />
                      </>
                    )}
                  </motion.button>
                </form>
              </Form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
