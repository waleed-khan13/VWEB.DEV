
"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Realm } from "@/lib/realms";
import { Palette, Mouse } from "lucide-react";
import { DesignContent } from "./design-content";

function DesignHero({ realm }: { realm: Realm }) {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="absolute -left-24 -top-24 w-72 h-72 rounded-full bg-accent/10 blur-2xl animate-pulse-glow" />
            <div className="absolute -right-24 -bottom-24 w-72 h-72 rounded-full bg-blue-500/10 blur-2xl animate-pulse-glow" style={{animationDelay: '2s'}}/>
            <Palette className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 text-accent/5 animate-float" />
        </div>
      <div className="relative z-10 text-center p-4 max-w-4xl mx-auto w-full">
        <div className="bg-white/80 dark:bg-black/50 rounded-lg p-8 border border-gray-200 dark:border-accent/20 shadow-lg backdrop-blur-sm">
            <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">
                {realm.title}
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
                {realm.subheading}
            </p>
            <div className="flex justify-center gap-4">
            <Link href="/contact">
                <Button size="lg" className="font-bold bg-gradient-to-r from-yellow-500 to-blue-600 hover:from-yellow-400 hover:to-blue-500 text-white shadow-lg">
                    Start a Design Project
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

export function DesignPageClient({ realm }: { realm: Realm }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <Header />
      <main className="flex-grow">
        <DesignHero realm={realm} />
        <DesignContent realm={realm} />
      </main>
      <Footer />
    </div>
  );
}
