
"use client";

import type { Realm } from "@/lib/realms";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { CheckCircle2, BookOpen, GraduationCap, Lightbulb, UserCheck, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sectionIcons: { [key: string]: React.ElementType } = {
    "Product Training": UserCheck,
    "Marketing Bootcamps": Lightbulb,
    "Design & Tech": GraduationCap,
    "E-commerce Skills": ShoppingCart
}

function LearnContentSection({ section }: { section: Realm['sections'][0] }) {
    const { ref, isInView } = useInView();
    const Icon = sectionIcons[section.sectionTitle] || BookOpen;

    return (
        <div ref={ref} className={cn("py-20 md:py-24 section-reveal", { 'is-visible': isInView }, 'bg-gray-50 dark:bg-transparent')}>
             <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
                        <div className="md:w-1/3 text-left">
                             <Icon className="w-12 h-12 text-indigo-500 mb-4 inline-block" />
                            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-200">
                                {section.sectionTitle}
                            </h2>
                            {section.sectionIntro && (
                                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                                    {section.sectionIntro}
                                </p>
                            )}
                        </div>
                        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {section.items.map((item) => (
                               <Card key={item.title} className="bg-white/50 dark:bg-gray-900/30 border-indigo-500/20">
                                   <CardHeader>
                                        <CardTitle className="font-code text-xl font-semibold text-yellow-300">
                                            {item.title}
                                        </CardTitle>
                                   </CardHeader>
                                   <CardContent>
                                        <ul className="space-y-3">
                                            {item.bullets.map((bullet) => (
                                                <li key={bullet} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                                    <CheckCircle2 className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-1" />
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

export function LearnContent({ realm }: { realm: Realm }) {
    return (
        <div className="relative">
             <div className="relative z-10">
                {realm.sections.map((section) => (
                    <LearnContentSection key={section.sectionTitle} section={section} />
                ))}
            </div>
        </div>
    );
}
