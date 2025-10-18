
"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactSection } from "@/components/sections/contact-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                 <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Get in Touch</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
                        We're here to help. Reach out to us with any questions or to start your next project.
                    </p>
                </div>
                <div className="grid lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1 space-y-8">
                        <Card>
                            <CardHeader className="flex-row items-center gap-4">
                                <MapPin className="w-8 h-8 text-primary" />
                                <CardTitle>Our Office</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    17/18, New Canal Park Road, Tajbagh<br />
                                    Lahore, 54810<br />
                                    Pakistan
                                </p>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader className="flex-row items-center gap-4">
                                <Mail className="w-8 h-8 text-primary" />
                                <CardTitle>Email Us</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <a href="mailto:info@vweb.dev" className="text-muted-foreground hover:text-primary transition-colors">
                                    info@vweb.dev
                                </a>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader className="flex-row items-center gap-4">
                                <Phone className="w-8 h-8 text-primary" />
                                <CardTitle>Call Us</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <a href="tel:+923214433994" className="text-muted-foreground hover:text-primary transition-colors">
                                    +92 321 4433994
                                </a>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="lg:col-span-2">
                        <ContactSection />
                    </div>
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
