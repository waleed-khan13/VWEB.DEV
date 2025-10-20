
"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Briefcase, Handshake, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import { pricingPlans } from "@/lib/pricing-plans";
import { partnersData } from "@/lib/partners";
import { testimonials } from "@/lib/testimonials";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

export default function AdminPage() {
    const totalServices = Object.values(pricingPlans).flatMap(realm => 
        Object.values(realm.subServices).flatMap(sub => 
            Object.values(sub.offerings).flatMap(offering => offering.plans)
        )
    ).length;

    const totalPartners = partnersData.length;
    const totalTestimonials = testimonials.length;
    const testimonialImages = PlaceHolderImages.filter(img => img.id.startsWith('testimonial-'));
    const recentTestimonials = testimonials.slice(-2);

    return (
        <>
            <h1 className="font-headline text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-2">Welcome to your application&apos;s command center.</p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Quick Stats */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Total Services</CardTitle>
                        <Briefcase className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{totalServices}</div>
                        <p className="text-xs text-muted-foreground">pricing plans available</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Total Partners</CardTitle>
                        <Handshake className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{totalPartners}</div>
                         <p className="text-xs text-muted-foreground">official partners listed</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Total Testimonials</CardTitle>
                        <MessageSquareQuote className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{totalTestimonials}</div>
                        <p className="text-xs text-muted-foreground">client testimonials featured</p>
                    </CardContent>
                </Card>
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Testimonials</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {recentTestimonials.map(testimonial => {
                                const image = testimonialImages.find(img => img.id === testimonial.imageId);
                                return (
                                    <div key={testimonial.id} className="flex items-start gap-4">
                                         <Avatar>
                                            {image && <AvatarImage src={image.imageUrl} alt={testimonial.name} />}
                                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex-grow">
                                            <p className="font-semibold">{testimonial.name}, <span className="text-sm text-muted-foreground">{testimonial.title}</span></p>
                                            <p className="text-sm text-muted-foreground italic mt-1">&quot;{testimonial.quote.substring(0, 100)}...&quot;</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </CardContent>
                    </Card>
                </div>
                 <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Quick Links</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                           <Link href="/admin/services" passHref>
                                <Button variant="outline" className="w-full justify-start">
                                    <Briefcase className="mr-2"/> Manage Services
                                </Button>
                           </Link>
                           <Link href="/admin/partners" passHref>
                                <Button variant="outline" className="w-full justify-start">
                                    <Handshake className="mr-2"/> Manage Partners
                                </Button>
                           </Link>
                           <Link href="/admin/testimonials" passHref>
                                <Button variant="outline" className="w-full justify-start">
                                    <MessageSquareQuote className="mr-2"/> Manage Testimonials
                                </Button>
                           </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}
