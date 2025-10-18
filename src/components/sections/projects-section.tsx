
"use client";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";

const projects = [
  {
    id: "proj1",
    title: "Project Alpha",
    description: "A futuristic data visualization platform for enterprise clients, providing real-time analytics and insights.",
    imageId: "project-1",
    tags: ["React", "Next.js", "AI", "Big Data"],
  },
  {
    id: "proj2",
    title: "Project Beta",
    description: "An AI-powered mobile application designed to streamline creative workflows for design teams.",
    imageId: "project-2",
    tags: ["Mobile", "AI", "UX/UI"],
  },
  {
    id: "proj3",
    title: "Project Gamma",
    description: "A scalable e-commerce solution with a modern design, focusing on user experience and conversion.",
    imageId: "project-3",
    tags: ["E-commerce", "Web", "Cloud"],
  },
  {
    id: "proj4",
    title: "Project Delta",
    description: "A robust cybersecurity analysis tool that helps businesses identify and mitigate threats proactively.",
    imageId: "project-4",
    tags: ["Security", "SaaS", "Analytics"],
  },
];

export function ProjectsSection() {
  const { ref, isInView } = useInView();
  
  const projectImages = PlaceHolderImages.filter(img => img.id.startsWith('project-'));

  return (
    <section id="projects" ref={ref} className={cn("py-20 md:py-32 bg-background section-reveal", { 'is-visible': isInView })}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Our Creations</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            A glimpse into the innovative solutions we've engineered.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => {
            const image = projectImages.find(img => img.id === project.imageId);
            return (
              <Card key={project.id} className="group overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 transform hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="relative h-64 w-full">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </CardContent>
                <div className="p-6">
                    <CardTitle className="font-headline text-2xl mb-2 group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                    </div>
                     <Link href="/#contact">
                        <Button variant="link" className="p-0 h-auto text-primary group-hover:underline">
                        Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
