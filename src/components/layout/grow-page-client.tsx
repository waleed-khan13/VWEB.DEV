
"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Realm } from "@/lib/realms";
import { TrendingUp, Mouse } from "lucide-react";
import { GrowContent } from "./grow-content";

function GrowHero({ realm }: { realm: Realm }) {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center bg-green-900/50 overflow-hidden">
        <div className="absolute inset-0 z-0">
             <TrendingUp className="absolute -left-16 top-1/4 w-64 h-64 text-green-400/10 animate-float" />
             <TrendingUp className="absolute -right-20 bottom-1/4 w-72 h-72 text-yellow-400/10 animate-pulse-glow" />
        </div>
      <div className="relative z-10 text-center p-4 max-w-4xl mx-auto w-full">
        <div className="bg-black/50 rounded-lg p-8 border border-green-500/20 shadow-lg backdrop-blur-sm">
            <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-yellow-300">
                {realm.title}
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
                {realm.subheading}
            </p>
            <div className="flex justify-center gap-4">
            <Link href="/contact">
                <Button size="lg" className="font-bold bg-green-600 hover:bg-green-500 text-white">
                    Start Growing
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

export function GrowPageClient({ realm }: { realm: Realm }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="flex-grow">
        <GrowHero realm={realm} />
        <GrowContent realm={realm} />
      </main>
      <Footer />
    </div>
  );
}
