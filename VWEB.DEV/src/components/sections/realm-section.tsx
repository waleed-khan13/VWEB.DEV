
"use client";

import { useState } from "react";
import { realms, Realm } from "@/lib/realms";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Component, Network, Bot, TrendingUp, LifeBuoy, GraduationCap, Store, Headset } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area";
import { RealmDialogContent } from "./realm-dialog-content";
import Link from "next/link";


const realmIcons: { [key: string]: React.ElementType } = {
  design: Palette,
  build: Component,
  integrate: Network,
  automate: Bot,
  grow: TrendingUp,
  support: LifeBuoy,
  learn: GraduationCap,
  marketplace: Store,
  assist: Headset,
};

export function RealmSection() {
  const { ref, isInView } = useInView({ once: false });
  const [selectedRealm, setSelectedRealm] = useState<Realm | null>(null);

  return (
    <section id="realms" ref={ref} className={cn("py-20 md:py-32 bg-background section-reveal", { 'is-visible': isInView })}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Our 9 Realms of Service</h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-muted-foreground">
            We deliver excellence across the full spectrum of digital services. Explore our core realms to see how we build, automate, and grow.
          </p>
        </div>

        <Dialog open={!!selectedRealm} onOpenChange={(isOpen) => !isOpen && setSelectedRealm(null)}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {realms.map((realm) => {
                    const Icon = realmIcons[realm.slug];
                    return (
                        <div key={realm.slug}>
                            <Card 
                                onClick={() => setSelectedRealm(realm)}
                                className="h-full group flex flex-col cursor-pointer transition-all duration-300 border-2 border-border hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transform hover:-translate-y-2"
                            >
                                <CardHeader className="flex-row items-center gap-4">
                                    {Icon && <Icon className="h-10 w-10 text-primary" />}
                                    <CardTitle className="font-headline text-2xl group-hover:text-primary">{realm.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <CardDescription>{realm.description}</CardDescription>
                                </CardContent>
                                <CardFooter className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Button variant="link" className="p-0 h-auto">View Details <ArrowRight className="ml-2" /></Button>
                                </CardFooter>
                            </Card>
                        </div>
                    );
                })}
                 <div className="md:col-span-2 lg:col-span-3">
                    <Card className="h-full bg-primary/10 border-primary/50 flex flex-col items-center justify-center text-center p-8">
                        <h3 className="font-headline text-3xl font-bold text-primary mb-4">Have a project in mind?</h3>
                        <p className="text-muted-foreground text-lg mb-6 max-w-lg mx-auto">Let's turn your vision into reality. We're ready to build, automate, and grow with you.</p>
                        <Link href="/contact">
                            <Button size="lg">
                            Get in Touch <ArrowRight className="ml-2" />
                            </Button>
                        </Link>
                    </Card>
                </div>
            </div>

            {selectedRealm && (
                 <DialogContent className="max-w-7xl h-[90vh] bg-gray-900/90 text-white border-primary/20 backdrop-blur-sm p-0">
                    <DialogTitle className="sr-only">{selectedRealm.title}</DialogTitle>
                    <ScrollArea className="h-full">
                        <RealmDialogContent realm={selectedRealm} />
                    </ScrollArea>
                </DialogContent>
            )}
        </Dialog>
      </div>
    </section>
  );
}
