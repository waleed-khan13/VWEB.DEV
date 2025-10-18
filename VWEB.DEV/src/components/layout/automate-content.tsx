
"use client";

import type { Realm } from "@/lib/realms";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { CheckCircle2, Cog, Bot, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sectionIcons: { [key: string]: React.ElementType } = {
    "CRM & Workflow Automation": Zap,
    "AI Bots & Reporting": Bot,
    "Business Process Automation": Cog
}

function AutomateContentSection({ section }: { section: Realm['sections'][0] }) {
    const { ref, isInView } = useInView();
    const Icon = sectionIcons[section.sectionTitle] || Cog;

    return (
        <div ref={ref} className={cn("py-20 md:py-24 section-reveal", { 'is-visible': isInView }, 'bg-transparent')}>
             <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-3 items-start gap-8">
                        <div className="md:col-span-1 text-left">
                             <Icon className="w-12 h-12 text-teal-400 mb-4 inline-block" />
                            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-gray-200">
                                {section.sectionTitle}
                            </h2>
                             {section.sectionIntro && (
                                <p className="mt-4 text-lg text-gray-400">
                                    {section.sectionIntro}
                                </p>
                            )}
                        </div>
                        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {section.items.map((item) => (
                                <Card key={item.title} className="bg-gray-900/30 border-accent/20">
                                    <CardHeader>
                                        <CardTitle className="font-code text-xl font-semibold text-yellow-300">
                                            {item.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-3">
                                            {item.bullets.map((bullet) => (
                                                <li key={bullet} className="flex items-start gap-3 text-gray-300">
                                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                                    <span className="text-sm">{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function AutomateContent({ realm }: { realm: Realm }) {
    return (
        <div className="relative">
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900 to-transparent" />
            <div className="relative z-10">
                {realm.sections.map((section) => (
                    <AutomateContentSection key={section.sectionTitle} section={section} />
                ))}
            </div>
        </div>
    );
}
