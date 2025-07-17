"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Code } from 'lucide-react';

const navLinks = [
  { href: '#tech-stack', label: 'Tech Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Code className="h-6 w-6 text-accent" />
          <span className="font-bold text-lg">MadhurChouhan<span className="text-accent">.dev</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </nav>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-6 pt-12">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium">
                    {link.label}
                  </Link>
                ))}
                <Button asChild onClick={() => setIsOpen(false)}>
                  <Link href="#contact">Contact Me</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
