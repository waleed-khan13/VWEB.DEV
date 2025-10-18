
"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Realm } from "@/lib/realms";
import { Store, TrendingUp, Mouse } from "lucide-react";
import { MarketplaceContent } from "./marketplace-content";

// Marketplace Icons
const AmazonIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-white"><path d="M16.39 18.42a1.39 1.39 0 0 1-1.38 1.42h-2.54a1.4 1.4 0 0 1-1.39-1.42v-2.39a1.41 1.41 0 0 1 1.4-1.42h2.53a1.4 1.4 0 0 1 1.4 1.42v2.39h-.02zM19 12a1 1 0 0 0-1-1h-2.5a1 1 0 0 0 0 2H18a1 1 0 0 0 1-1zm-6.66-2.91a1 1 0 0 0-1.41-.09l-3 2.5a1 1 0 1 0 1.32 1.5l3-2.5a1 1 0 0 0 .09-1.41zm-2-4.84a1 1 0 0 0-1.2-1.6L5 4.3v-.01a1 1 0 0 0-1.6 1.2l4.15 7.19a1 1 0 0 0 1.73-.99l-3.5-6.1zM22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zm-2 0c0 4.41-3.59 8-8 8s-8-3.59-8-8 3.59-8 8-8 8 3.59 8 8z"/></svg>;
const EbayIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.12 15.6h-2.4c-1.38 0-2.5-1.12-2.5-2.5v-2.2h2.2v2.2c0 .17.13.3.3.3h2.4v-5.2H6.3v-2.2h4.58v5.2zm7.12 0h-2.4v-7.4h2.4v7.4zm-2.4-9.6h-2.4v-2.2h2.4v2.2z"/></svg>;
const EtsyIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14h-9c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5h9c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5zm-4.5-4.5h-2v2h2v-2zm-3-1h6v-2h-6v2z"/></svg>;
const NoonIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>;
const AlibabaIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path d="M14.32 10.32c-.3-.21-.63-.38-.97-.51-1.35-.49-2.73-.8-4.14-1-1.4-.2-2.82-.26-4.22-.16-.3.02-.6.06-.88.13a.5.5 0 0 0-.38.58c.09.28.37.45.65.4.3-.08.6-.12.9-.14 1.34-.1 2.7-.04 4.04.16 1.35.2 2.68.51 3.98 1 .33.13.66.3.97.51a.5.5 0 0 0 .68-.73zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>;

const marketplaceIcons = [
    { icon: AmazonIcon, name: "Amazon" },
    { icon: EbayIcon, name: "eBay" },
    { icon: EtsyIcon, name: "Etsy" },
    { icon: NoonIcon, name: "Noon" },
    { icon: AlibabaIcon, name: "Alibaba" },
];

function MarketplaceHero({ realm }: { realm: Realm }) {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center bg-yellow-900/50 overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="relative w-96 h-96">
            <Store className="absolute inset-0 w-full h-full text-yellow-400/20 animate-pulse-glow" />
            <div className="absolute inset-0 animate-spin-slow">
                {marketplaceIcons.map((item, index) => {
                    const angle = (index / marketplaceIcons.length) * 2 * Math.PI;
                    const x = 50 + 40 * Math.cos(angle);
                    const y = 50 + 40 * Math.sin(angle);
                    return (
                        <div
                            key={item.name}
                            className="absolute"
                            style={{ 
                                left: `${x}%`, 
                                top: `${y}%`,
                                transform: 'translate(-50%, -50%)',
                             }}
                        >
                            <div className="p-2 bg-black/30 rounded-full backdrop-blur-sm">
                                <item.icon />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
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

export function MarketplacePageClient({ realm }: { realm: Realm }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="flex-grow">
        <MarketplaceHero realm={realm} />
        <MarketplaceContent realm={realm} />
      </main>
      <Footer />
    </div>
  );
}
