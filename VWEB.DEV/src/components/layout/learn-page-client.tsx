
"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Realm } from "@/lib/realms";
import { BookOpen, GraduationCap, Mouse } from "lucide-react";
import { LearnContent } from "./learn-content";


function LearnHero({ realm }: { realm: Realm }) {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <BookOpen className="absolute -left-24 top-1/4 w-72 h-72 text-indigo-500/10 animate-float" />
            <GraduationCap className="absolute -right-24 bottom-1/4 w-72 h-72 text-amber-500/10 animate-pulse-glow" />
        </div>
      <div className="relative z-10 text-center p-4 max-w-4xl mx-auto w-full">
        <div className="bg-white/80 dark:bg-black/50 rounded-lg p-8 border border-gray-200 dark:border-indigo-500/20 shadow-lg backdrop-blur-sm">
            <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-amber-500">
                {realm.title}
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
                {realm.subheading}
            </p>
            <div className="flex justify-center gap-4">
            <Link href="/contact">
                <Button size="lg" className="font-bold bg-indigo-600 hover:bg-indigo-500 text-white">
                    Start Learning
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

export function LearnPageClient({ realm }: { realm: Realm }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <Header />
      <main className="flex-grow">
        <LearnHero realm={realm} />
        <LearnContent realm={realm} />
      </main>
      <Footer />
    </div>
  );
}
