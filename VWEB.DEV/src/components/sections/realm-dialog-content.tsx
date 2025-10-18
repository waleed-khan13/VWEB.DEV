
"use client";

import type { Realm } from "@/lib/realms";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Palette,
  Component,
  Network,
  Bot,
  TrendingUp,
  LifeBuoy,
  GraduationCap,
  Cog,
  Zap,
  Database,
  ShieldCheck,
  BookOpen,
  Mouse,
  Store,
  Headset,
  Users,
} from "lucide-react";

import { AutomateContent } from "../layout/automate-content";
import { BuildContent } from "../layout/build-content";
import { DesignContent } from "../layout/design-content";
import { GrowContent } from "../layout/grow-content";
import { IntegrateContent } from "../layout/integrate-content";
import { LearnContent } from "../layout/learn-content";
import { SupportContent } from "../layout/support-content";
import { MarketplaceContent } from "../layout/marketplace-content";
import { AssistContent } from "../layout/assist-content";

// Hero Components
function DesignHero({ realm }: { realm: Realm }) {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="absolute -left-24 -top-24 w-72 h-72 rounded-full bg-pink-500/10 blur-2xl animate-pulse-glow" />
            <div className="absolute -right-24 -bottom-24 w-72 h-72 rounded-full bg-blue-500/10 blur-2xl animate-pulse-glow" style={{animationDelay: '2s'}}/>
            <Palette className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 text-pink-500/5 animate-float" />
        </div>
      <div className="relative z-10 text-center p-4 max-w-4xl mx-auto w-full">
        <div className="bg-white/80 dark:bg-black/50 rounded-lg p-8 border border-gray-200 dark:border-purple-500/20 shadow-lg backdrop-blur-sm">
            <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                {realm.title}
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
                {realm.subheading}
            </p>
            <div className="flex justify-center gap-4">
            <Link href="/contact">
                <Button size="lg" className="font-bold bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-500 hover:to-blue-500 text-white shadow-lg">
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

function BuildHero({ realm }: { realm: Realm }) {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center bg-gray-900/50 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="absolute -left-24 -top-24 w-72 h-72 border-4 border-dashed border-teal-500/20 rounded-full animate-spin-slow" />
            <div className="absolute -right-24 -bottom-24 w-96 h-96 border-4 border-dashed border-cyan-500/20 rounded-full animate-spin-slow" style={{animationDelay: '2s'}}/>
            <Component className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 text-teal-500/5 animate-float" />
        </div>
      <div className="relative z-10 text-center p-4 max-w-4xl mx-auto w-full">
        <div className="bg-black/50 rounded-lg p-8 border border-teal-500/20 shadow-lg backdrop-blur-sm">
            <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
                {realm.title}
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
                {realm.subheading}
            </p>
            <div className="flex justify-center gap-4">
            <Link href="/contact">
                <Button size="lg" className="font-bold bg-teal-600 hover:bg-teal-500 text-white">
                Start Building
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

function AutomateHero({ realm }: { realm: Realm }) {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center bg-gray-900/50 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <Cog className="absolute -left-16 top-1/4 w-64 h-64 text-teal-500/10 animate-spin-slow" />
            <Zap className="absolute -right-20 bottom-1/4 w-72 h-72 text-purple-500/10 -rotate-12 animate-pulse-glow" />
            <Bot className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 text-blue-500/5 animate-float" />
        </div>
      <div className="relative z-10 text-center p-4 max-w-4xl mx-auto w-full">
        <div className="bg-black/50 rounded-lg p-8 border border-purple-500/20 shadow-lg backdrop-blur-sm">
            <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
                {realm.title}
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
                {realm.subheading}
            </p>
            <div className="flex justify-center gap-4">
            <Link href="/contact">
                <Button size="lg" className="font-bold bg-purple-600 hover:bg-purple-500 text-white">
                Automate Your Business
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

function MarketplaceHero({ realm }: { realm: Realm }) {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center bg-yellow-900/50 overflow-hidden">
        <div className="absolute inset-0 z-0">
             <Store className="absolute -left-16 top-1/4 w-64 h-64 text-yellow-400/10 animate-float" />
             <TrendingUp className="absolute -right-20 bottom-1/4 w-72 h-72 text-green-400/10 animate-pulse-glow" />
        </div>
      <div className="relative z-10 text-center p-4 max-w-4xl mx-auto w-full">
        <div className="bg-black/50 rounded-lg p-8 border border-yellow-500/20 shadow-lg backdrop-blur-sm">
            <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-green-300">
                {realm.title}
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
                {realm.subheading}
            </p>
            <div className="flex justify-center gap-4">
            <Link href="/contact">
                <Button size="lg" className="font-bold bg-yellow-600 hover:bg-yellow-500 text-white">
                    Dominate Marketplaces
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

function SupportHero({ realm }: { realm: Realm }) {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center bg-blue-900/50 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <ShieldCheck className="absolute -left-16 top-1/4 w-64 h-64 text-blue-400/10 animate-pulse-glow" />
            <LifeBuoy className="absolute -right-20 bottom-1/4 w-72 h-72 text-green-400/10 animate-float" />
        </div>
      <div className="relative z-10 text-center p-4 max-w-4xl mx-auto w-full">
        <div className="bg-black/50 rounded-lg p-8 border border-blue-500/20 shadow-lg backdrop-blur-sm">
            <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-green-300">
                {realm.title}
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
                {realm.subheading}
            </p>
            <div className="flex justify-center gap-4">
            <Link href="/contact">
                <Button size="lg" className="font-bold bg-blue-600 hover:bg-blue-500 text-white">
                    Get Support
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

function AssistHero({ realm }: { realm: Realm }) {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center bg-rose-900/50 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <Headset className="absolute -left-16 top-1/4 w-64 h-64 text-rose-400/10 animate-float" />
            <Users className="absolute -right-20 bottom-1/4 w-72 h-72 text-indigo-400/10 animate-pulse-glow" />
        </div>
      <div className="relative z-10 text-center p-4 max-w-4xl mx-auto w-full">
        <div className="bg-black/50 rounded-lg p-8 border border-rose-500/20 shadow-lg backdrop-blur-sm">
            <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-indigo-300">
                {realm.title}
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
                {realm.subheading}
            </p>
            <div className="flex justify-center gap-4">
            <Link href="/contact">
                <Button size="lg" className="font-bold bg-rose-600 hover:bg-rose-500 text-white">
                    Get an Assistant
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


const realmContentMap: { [key: string]: {
    Hero: React.ComponentType<{ realm: Realm }>,
    Content: React.ComponentType<{ realm: Realm }>
} } = {
  design: { Hero: DesignHero, Content: DesignContent },
  build: { Hero: BuildHero, Content: BuildContent },
  integrate: { Hero: IntegrateHero, Content: IntegrateContent },
  automate: { Hero: AutomateHero, Content: AutomateContent },
  grow: { Hero: GrowHero, Content: GrowContent },
  marketplace: { Hero: MarketplaceHero, Content: MarketplaceContent },
  support: { Hero: SupportHero, Content: SupportContent },
  assist: { Hero: AssistHero, Content: AssistContent },
  learn: { Hero: LearnHero, Content: LearnContent },
};

export function RealmDialogContent({ realm }: { realm: Realm }) {
  const components = realmContentMap[realm.slug];

  if (!components) {
    return <div className="text-white">Content not found for this realm.</div>;
  }

  const { Hero, Content } = components;

  return (
    <div className="bg-background">
        <Hero realm={realm} />
        <Content realm={realm} />
    </div>
  );
}
