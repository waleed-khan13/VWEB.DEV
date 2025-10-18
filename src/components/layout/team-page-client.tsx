
"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users, Mouse } from "lucide-react";
import { FullTeamView } from "./full-team-view";

function TeamHero({ realm }: { realm: { title: string, subheading: string } }) {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center bg-gray-900/50 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <Users className="absolute -left-16 top-1/4 w-64 h-64 text-primary/10 animate-float" />
            <Users className="absolute -right-20 bottom-1/4 w-72 h-72 text-accent/10 animate-pulse-glow" />
        </div>
      <div className="relative z-10 text-center p-4 max-w-4xl mx-auto w-full">
        <div className="bg-black/50 rounded-lg p-8 border border-primary/20 shadow-lg backdrop-blur-sm">
            <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {realm.title}
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
                {realm.subheading}
            </p>
            <div className="flex justify-center gap-4">
            <Link href="/contact">
                <Button size="lg" className="font-bold">
                    Work With Us
                </Button>
            </Link>
            </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <Mouse className="w-8 h-8 text-primary animate-bounce" />
      </div>
    </section>
  );
}

function TeamContent() {
    return (
        <div className="py-20 md:py-24 bg-transparent">
             <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-7xl mx-auto">
                    <FullTeamView />
                </div>
            </div>
        </div>
    )
}

export function TeamPageClient({ realm }: { realm: { title: string, subheading: string } }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* The Header is omitted here when used in a dialog */}
      <main className="flex-grow">
        <TeamHero realm={realm} />
        <TeamContent />
      </main>
      {/* The Footer is omitted here when used in a dialog */}
    </div>
  );
}
