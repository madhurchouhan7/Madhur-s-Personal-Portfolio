import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Synovia AI Telehealth App",
    description: "Synovia is an AI-powered mobile health assistant that enables users to check their symptoms, get personalized health insights, and receive smart medical guidance in real-time. By integrating Google's Gemini API and Vertex AI, the app can intelligently analyze user-entered symptoms, predict possible health conditions, and offer next-step suggestions.",
    image: "src\app\synovia.png",
    tags: ["Flutter", "Firebase", "Google Cloud", "Gemini AI"],
    link: "#",
    codeLink: "#"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold md:text-4xl">Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Here are some of the projects I've worked on.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col overflow-hidden bg-card/50 hover:border-primary/50 transition-colors">
            <CardHeader className="p-0">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </CardHeader>
            <CardContent className="p-6 flex-1">
              <CardTitle className="mb-2 text-xl">{project.title}</CardTitle>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex items-center gap-4">
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link href={project.link} target="_blank" rel="noopener noreferrer">View Project</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    <Github />
                    View Code
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
