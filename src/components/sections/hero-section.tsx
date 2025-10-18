
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { realms } from "@/lib/realms";
import { cn } from "@/lib/utils";
import { Mouse, Palette, Component, Network, Bot, TrendingUp, LifeBuoy, GraduationCap, Store, Headset } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { subServiceIcons as allSubServiceIcons } from "@/lib/estimator-questions";

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

const subServiceIcons: { [key: string]: React.ElementType } = allSubServiceIcons;


export function HeroSection() {
    const [api, setApi] = useState<CarouselApi>()
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);

    const period = 5000;
    
    useEffect(() => {
        if (!api) return;

        const onSelect = () => {
             const newIndex = api.selectedScrollSnap();
             setCurrentSlide(newIndex);
             if (loopNum % realms.length !== newIndex) {
                 setLoopNum(newIndex);
                 setText('');
                 setIsDeleting(false);
             }
        }
        
        onSelect();
        api.on("select", onSelect);
        
        return () => {
          api.off("select", onSelect);
        }
    }, [api, loopNum]);


    useEffect(() => {
        if (!api) return;

        let ticker: NodeJS.Timeout;

        const handleTyping = () => {
            const realmsToRotate = realms.map(r => r.title);
            const i = loopNum % realmsToRotate.length;
            const fullText = realmsToRotate[i];

            if (isDeleting) {
                setText(current => fullText.substring(0, current.length - 1));
            } else {
                setText(current => fullText.substring(0, current.length + 1));
            }
            
            if (!isDeleting && text === fullText) {
                 setTimeout(() => setIsDeleting(true), period / 2);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(prev => prev + 1);
                api.scrollNext();
            } else {
                 ticker = setTimeout(handleTyping, isDeleting ? 50 : 120);
            }
        };

        ticker = setTimeout(handleTyping, isDeleting ? 50: 120);

        return () => clearTimeout(ticker);

    }, [text, isDeleting, api, loopNum]);


  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="relative z-20 text-center p-4">
         <Carousel 
            setApi={setApi} 
            className="w-full max-w-lg mx-auto mb-8"
            plugins={[
                Autoplay({
                  delay: period,
                  stopOnInteraction: true,
                }),
            ]}
            opts={{
              loop: true,
            }}>
            <CarouselContent>
                {realms.map((realm, realmIndex) => {
                    const Icon = realmIcons[realm.slug];
                    const subServices = realm.sections.slice(0, 6);
                    
                    return (
                        <CarouselItem key={realm.slug} className="pt-12">
                           <div className="w-full h-80 md:h-96 flex items-center justify-center">
                                <div
                                    className={cn(
                                        "relative flex justify-center items-center h-full w-full transition-transform duration-500",
                                        realmIndex === currentSlide ? "scale-100" : "scale-90"
                                    )}
                                    style={{
                                        '--radius': '100px',
                                        '--md-radius': '150px',
                                    } as React.CSSProperties}
                                >
                                    <div
                                        className={cn(
                                            "transition-all duration-500",
                                            realmIndex === currentSlide ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
                                        )}
                                    >
                                        {Icon && <Icon className="w-16 h-16 md:w-24 md:h-24 text-primary" />}
                                    </div>
                                    
                                    {subServices.map((sub, subIndex) => {
                                        const SubIcon = subServiceIcons[sub.sectionTitle];
                                        const angle = (subIndex / subServices.length) * 360;
                                        return (
                                            <div
                                                key={`${realm.slug}-${sub.sectionTitle}`}
                                                className={cn(
                                                    "absolute flex flex-col items-center justify-center w-20 text-center transition-all duration-500",
                                                    realmIndex === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                                                )}
                                                style={{  '--angle': `${angle}deg`,
                                                    transitionDelay: realmIndex === currentSlide ? `${300 + subIndex * 100}ms` : '0ms',
                                                    transform: 'rotate(var(--angle)) translateY(calc(var(--radius) * -1)) rotate(calc(var(--angle) * -1))',
                                                  } as React.CSSProperties}
                                          >
                                                {SubIcon && <SubIcon className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground" />}
                                                <span className="text-xs text-muted-foreground mt-1">{sub.sectionTitle}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                           </div>
                        </CarouselItem>
                    )
                })}
            </CarouselContent>
        </Carousel>
        
        <h2 className="font-code text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-primary h-16 w-full md:w-96 truncate text-center mb-8 mx-auto">
            {text}<span className="animate-blink">|</span>
        </h2>
        
        <div className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8 animate-in fade-in-0 slide-in-from-top-12 duration-1000 delay-200">
            <p>We design, build, and grow the digital future for your business.</p>
        </div>

        <div className="flex justify-center gap-4 animate-in fade-in-0 slide-in-from-top-14 duration-1000 delay-400">
          <Link href="#realms">
            <Button size="lg" className="font-bold transition-transform duration-300 hover:scale-105">
              View Our Services
            </Button>
          </Link>
          <Link href="#contact">
            <Button size="lg" variant="outline" className="font-bold border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <Mouse className="w-8 h-8 text-primary animate-bounce" />
      </div>

       <style jsx>{`
        @media (min-width: 768px) {
          .absolute[style] {
            transform: rotate(var(--angle)) translateY(calc(var(--md-radius) * -1)) rotate(calc(var(--angle) * -1));
          }
        }
      `}</style>
    </section>
  );
}
