
"use client";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";
import { partnersData, Partner } from "@/lib/partners";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";

// A component to safely render SVG strings or an image
function LogoDisplay({ logo, name }: { logo: Partner['logo'], name: string }) {
  if (logo.type === 'svg') {
    return <div dangerouslySetInnerHTML={{ __html: logo.content }} className="h-16 w-32 flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors duration-300 [&_svg]:h-12 [&_svg]:w-24"/>;
  }
  if (logo.type === 'url') {
    return <Image src={logo.content} alt={`${name} logo`} width={128} height={64} className="object-contain h-16 w-32" />;
  }
  return null;
}


export function PartnersSection() {
  const { ref, isInView } = useInView({ once: false });
  return (
    <section id="partners" ref={ref} className={cn("py-20 md:py-32 bg-secondary/50 section-reveal", { 'is-visible': isInView })}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Our Official Partners</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            We collaborate with industry leaders to deliver best-in-class solutions.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {partnersData.map((partner) => (
              <CarouselItem key={partner.id} className="basis-1/2 md:basis-1/4 lg:basis-1/6">
                <div className="p-1">
                   <Card className="bg-transparent border-none shadow-none">
                      <CardContent className="group flex aspect-square items-center justify-center p-6">
                        <LogoDisplay logo={partner.logo} name={partner.name} />
                      </CardContent>
                    </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
