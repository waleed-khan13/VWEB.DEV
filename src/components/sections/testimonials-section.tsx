
"use client";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/testimonials";


export function TestimonialsSection() {
  const { ref, isInView } = useInView();
  const testimonialImages = PlaceHolderImages.filter(img => img.id.startsWith('testimonial-'));

  return (
    <section id="testimonials" ref={ref} className={cn("py-20 md:py-32 bg-background section-reveal", { 'is-visible': isInView })}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Voices of Our Partners</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            See what our clients have to say about their experience with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const image = testimonialImages.find(img => img.id === testimonial.imageId);
            return (
               <Card 
                key={testimonial.id} 
                className="border-border bg-card shadow-lg transform transition-all duration-500 hover:shadow-primary/20 hover:-translate-y-2"
                style={{transitionDelay: `${index * 150}ms`}}
              >
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  <p className="text-foreground italic text-lg mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      {image && <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint} />}
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
