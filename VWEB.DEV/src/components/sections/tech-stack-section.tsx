
"use client";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";
import { 
    AppWindow, Bot, Cloud, Database, Figma, GitMerge, Github, Code, Network, 
    Palette, PenTool, Scaling, Server, ShoppingCart, Smartphone, Type, User, Users, Wind 
} from "lucide-react";


const technologies = [
  { name: "React", icon: Code },
  { name: "Next.js", icon: AppWindow },
  { name: "Node.js", icon: Server },
  { name: "TypeScript", icon: Type },
  { name: "Firebase", icon: Database },
  { name: "Google Cloud", icon: Cloud },
  { name: "Genkit", icon: Bot },
  { name: "Vercel", icon: Scaling },
  { name: "Wix Studio", icon: Palette },
  { name: "Make.com", icon: GitMerge },
  { name: "Kommo", icon: Users },
  { name: "Shopify", icon: ShoppingCart },
  { name: "Figma", icon: PenTool },
  { name: "Docker", icon: Wind },
  { name: "PostgreSQL", icon: Database },
];

export function TechStackSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="tech-stack" ref={ref} className={cn("py-20 md:py-32 bg-secondary/50 section-reveal scroll-snap-section", { 'is-visible': isInView })}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Our Arsenal</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            We use a modern, robust, and scalable tech stack to build high-performance applications.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-16 gap-y-10 items-center">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className={cn("flex flex-col items-center justify-center gap-2 text-center text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-110 section-reveal", {'is-visible': isInView})}
                 style={{ transitionDelay: `${index * 100}ms` }}
              >
                <tech.icon className="h-10 w-10" />
                <span className="font-medium text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
