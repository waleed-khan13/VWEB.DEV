
"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Realm } from "@/lib/realms";
import { Database, Network, Mouse } from "lucide-react";
import { IntegrateContent } from "./integrate-content";


function IntegrateHero({ realm }: { realm: Realm }) {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center bg-gray-900/50 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <Network className="absolute -left-16 top-1/4 w-64 h-64 text-orange-400/10 animate-pulse-glow" />
            <Database className="absolute -right-20 bottom-1/4 w-72 h-72 text-cyan-400/10 animate-float" />
        </div>
      <div className="relative z-10 text-center p-4 max-w-4xl mx-auto w-full">
        <div className="bg-black/50 rounded-lg p-8 border border-orange-500/20 shadow-lg backdrop-blur-sm">
            <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-cyan-300">
                {realm.title}
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
                {realm.subheading}
            </p>
            <div className="flex justify-center gap-4">
            <Link href="/contact">
                <Button size="lg" className="font-bold bg-orange-600 hover:bg-orange-500 text-white">
                    Connect Your Systems
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

export function IntegratePageClient({ realm }: { realm: Realm }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="flex-grow">
        <IntegrateHero realm={realm} />
        <IntegrateContent realm={realm} />
      </main>
      <Footer />
    </div>
  );
}
