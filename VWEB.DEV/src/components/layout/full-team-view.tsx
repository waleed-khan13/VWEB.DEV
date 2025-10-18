
"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { teamData, TeamMember } from "@/lib/team";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ScrollArea } from "../ui/scroll-area";

export function FullTeamView() {
  const teamImages = PlaceHolderImages.filter(img => img.id.startsWith('team-'));

  const categories: TeamMember['category'][] = [
    'Executive Team',
    'Department Heads',
    'Team Leads',
    'Team',
    'Freelancers',
    'Interns',
  ];

  const groupedTeam = categories.reduce((acc, category) => {
    const members = teamData.filter(member => member.category === category);
    if (members.length > 0) {
      acc[category] = members;
    }
    return acc;
  }, {} as { [key: string]: typeof teamData });


  return (
    <ScrollArea className="h-full pr-6 -mr-6">
      <div className="space-y-12 py-4">
        {categories.map(category => (
          groupedTeam[category] && (
            <div key={category}>
              <h2 className="font-headline text-3xl font-bold mb-6 text-primary border-b border-primary/20 pb-2">{category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {groupedTeam[category].map((member) => {
                    const image = teamImages.find(img => img.id === member.imageId);
                    return (
                    <Card key={member.id} className="group overflow-hidden border-2 border-border text-center transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transform hover:-translate-y-1">
                        <CardContent className="p-0">
                        <div className="relative h-56 w-full">
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
            </div>
          )
        ))}
      </div>
    </ScrollArea>
  );
}
