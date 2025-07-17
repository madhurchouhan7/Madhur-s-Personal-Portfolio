import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  Cloud,
  Container,
  Github,
  Package,
  Coffee,
  Layers,
  Palette,
  GitBranch,
  Flame,
  Sparkles,
  Smartphone,
} from "lucide-react";
import type { LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

const TailwindCssIcon = (props: LucideProps) => (
  <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 23.39c-128.52 0-232.61 104.09-232.61 232.61s104.09 232.61 232.61 232.61 232.61-104.09 232.61-232.61S384.52 23.39 256 23.39zM256 363.8c-60 0-108.8-48.8-108.8-108.8s48.8-108.8 108.8-108.8 108.8 48.8 108.8 108.8-48.8 108.8-108.8 108.8z" fill="currentColor"/><path d="M256 255.03c-30 0-54.4-24.4-54.4-54.4s24.4-54.4 54.4-54.4 54.4 24.4 54.4 54.4-24.4 54.4-54.4 54.4z" fill="currentColor"/></svg>
);

const tech = {
  languagesAndFrameworks: [
    { name: "Python", icon: Code, color: "text-blue-400" },
    { name: "Dart", icon: Code, color: "text-sky-400" },
    { name: "Java", icon: Coffee, color: "text-amber-500" },
    { name: "JavaScript", icon: Code, color: "text-yellow-400" },
    { name: "Flutter", icon: Layers, color: "text-sky-500" },
    { name: "HTML", icon: Code, color: "text-orange-500" },
    { name: "CSS", icon: Code, color: "text-blue-500" },
    { name: "Tailwind CSS", icon: TailwindCssIcon, color: "text-teal-400" },
  ],
  toolsAndPlatforms: [
    { name: "Figma", icon: Palette, color: "text-pink-500" },
    { name: "Google Cloud", icon: Cloud, color: "text-blue-400" },
    { name: "Git", icon: GitBranch, color: "text-orange-600" },
    { name: "GitHub", icon: Github, color: "text-white" },
    { name: "Firebase", icon: Flame, color: "text-amber-500" },
    { name: "Docker", icon: Container, color: "text-blue-500" },
    { name: "Gemini", icon: Sparkles, color: "text-purple-400" },
    { name: "Postman", icon: Package, color: "text-orange-500" },
    { name: "Android Studio", icon: Smartphone, color: "text-green-400" },
  ],
};

const TechItem = ({ name, icon: Icon, color }: { name: string, icon: React.ElementType, color?: string }) => (
  <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg transition-colors hover:bg-muted/50">
    <Icon className={cn("h-10 w-10", color)} />
    <span className="text-sm font-medium">{name}</span>
  </div>
);

const TechCategory = ({ title, items }: { title: string, items: { name: string, icon: React.ElementType, color?: string }[] }) => (
  <Card className="bg-card/50">
    <CardHeader>
      <CardTitle className="text-xl text-accent">{title}</CardTitle>
    </CardHeader>
    <CardContent className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {items.map((item) => (
        <TechItem key={item.name} {...item} />
      ))}
    </CardContent>
  </Card>
);

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 md:py-28">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold md:text-4xl">My Tech Stack</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A collection of technologies I use to build modern and efficient web applications.
        </p>
      </div>
      <div className="space-y-8">
        <TechCategory title="Languages & Frameworks" items={tech.languagesAndFrameworks} />
        <TechCategory title="Tools & Platforms" items={tech.toolsAndPlatforms} />
      </div>
    </section>
  );
}
