"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

const names = ["Madhur Chouhan", "मधुर चौहान"];
const typingSpeed = 150;
const deletingSpeed = 100;
const delayAfterTyping = 2000;

export default function Hero() {
  const [nameIndex, setNameIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentName = names[nameIndex];
      const updatedText = isDeleting
        ? currentName.substring(0, text.length - 1)
        : currentName.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentName) {
        // Pause at end of typing before starting to delete
        setTimeout(() => setIsDeleting(true), delayAfterTyping);
      } else if (isDeleting && updatedText === "") {
        // Finished deleting, move to next name
        setIsDeleting(false);
        setNameIndex((prevIndex) => (prevIndex + 1) % names.length);
      }
    };

    const typingTimeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, nameIndex]);

  return (
    <section id="home" className="py-20 md:py-32">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="space-y-6 text-center lg:text-left">
          <p className="text-lg text-muted-foreground">Hey! I'm</p>
          <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl min-h-20 lg:min-h-24 flex items-center justify-center lg:justify-start">
            <span>{text}</span>
            <span className="text-accent animate-pulse">|</span>
          </h1>
          <h2 className="font-code text-2xl md:text-3xl">
            <span className="text-accent">&lt;</span>
            Full-Stack Mobile App Developer
            <span className="text-accent"> /&gt;</span>
          </h2>
          <p className="max-w-xl mx-auto lg:mx-0 text-muted-foreground">
            I'm a passionate full-stack developer from India who loves building fast, responsive, and scalable mobile applications. With a strong foundation in modern tech stacks, I'm always eager to learn, innovate, and turn ideas into impactful digital solutions.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center lg:justify-start">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
            <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-primary rounded-full blur-3xl opacity-20"></div>
            <div className="relative bg-card/50 p-6 rounded-lg shadow-lg w-full max-w-md font-code text-sm z-10 border border-border/50">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-3 w-3 rounded-full bg-red-500"></span>
                <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                <span className="h-3 w-3 rounded-full bg-green-500"></span>
              </div>
              <pre className="text-left overflow-x-auto">
                <code className="text-muted-foreground">
                  <span className="text-pink-400">const</span> <span className="text-sky-300">me</span> = {'{'}<br />
                  {'  '}name: <span className="text-amber-300">'Madhur Chouhan'</span>,<br />
                  {'  '}title: <span className="text-amber-300">'Full-Stack Mobile App Developer'</span>,<br />
                  {'  '}skills: [<span className="text-amber-300">'Flutter'</span>, <span className="text-amber-300">'Dart'</span>, <span className="text-amber-300">'Google Cloud'</span>],<br />
                  {'  '}availableForWork: <span className="text-blue-400">true</span>,<br />
                  {'  '}contact: <span className="text-amber-300">'#contact'</span>,<br />
                  {'}'};
                </code>
              </pre>
            </div>
        </div>
      </div>
    </section>
  );
}
