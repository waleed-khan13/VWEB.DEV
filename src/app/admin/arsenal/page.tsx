
"use client";

import { Cpu } from "lucide-react";

const techStack = [
    { name: "Next.js", category: "Frontend Framework" },
    { name: "React", category: "UI Library" },
    { name: "Tailwind CSS", category: "CSS Framework" },
    { name: "ShadCN UI", category: "Component Library" },
    { name: "Firebase", category: "Backend & Database" },
    { name: "Genkit", category: "AI Toolkit" },
    { name: "TypeScript", category: "Language" },
    { name: "Vercel", category: "Hosting" },
];

export default function AdminArsenalPage() {
  return (
    <div>
        <div className="flex items-center justify-between mb-8">
            <div>
                <h1 className="font-headline text-3xl font-bold">Arsenal</h1>
                <p className="text-muted-foreground mt-2">
                    An overview of the technology stack and tools powering this application.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map(tech => (
                <div key={tech.name} className="p-6 rounded-lg border bg-card text-card-foreground flex items-center gap-4">
                    <Cpu className="w-8 h-8 text-primary" />
                    <div>
                        <p className="font-semibold text-lg">{tech.name}</p>
                        <p className="text-sm text-muted-foreground">{tech.category}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}
