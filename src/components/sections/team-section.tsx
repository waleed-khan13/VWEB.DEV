
"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { teamData } from "@/lib/team";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { TeamPageClient } from "../layout/team-page-client";
import { ScrollArea } from "@/components/ui/scroll-area";

export function TeamSection() {
  const { ref, isInView } = useInView();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const teamImages = PlaceHolderImages.filter(img => img.id.startsWith('team-'));

  const featuredTeam = teamData.filter(member => member.category === 'Executive Team').slice(0, 4);
  
  const teamRealm = {
      title: "Meet the Creative Command",
      subheading: "The talented individuals driving our success.",
  }

  return (
    <section id="team" ref={ref} className={cn("py-20 md:py-32 bg-secondary/50 section-reveal", { 'is-visible': isInView })}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Meet the creative command</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            The talented individuals driving our success.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {featuredTeam.map((member) => {
            const image = teamImages.find(img => img.id === member.imageId);
            return (
              <Card key={member.id} className="group overflow-hidden border-2 border-border text-center transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transform hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="relative h-64 w-full">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </div>
                </CardContent>
                <div className="p-4">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-sm text-primary">{member.title}</p>
                    {member.location && <p className="text-xs text-muted-foreground mt-1">({member.location})</p>}
                </div>
              </Card>
            );
          })}
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <div className="text-center mt-12">
            <DialogTrigger asChild>
                <Button size="lg">
                    Meet the Full Team <ArrowRight className="ml-2" />
                </Button>
            </DialogTrigger>
          </div>
           <DialogContent className="max-w-7xl h-[90vh] bg-gray-900/90 text-white border-primary/20 backdrop-blur-sm p-0">
                <DialogTitle className="sr-only">Full Team View</DialogTitle>
                <ScrollArea className="h-full">
                    <TeamPageClient realm={teamRealm} />
                </ScrollArea>
            </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
