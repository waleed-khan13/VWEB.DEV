
"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { cn } from "@/lib/utils";
import { clientsData, Client } from "@/lib/clients";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Users, ArrowRight } from "lucide-react";

// A component to safely render SVG strings or an image
function LogoDisplay({ logo, name }: { logo: Client['logo'], name: string }) {
  if (logo.type === 'svg') {
    return <div dangerouslySetInnerHTML={{ __html: logo.content }} className="h-16 w-16 flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors duration-300 [&_svg]:h-12 [&_svg]:w-12"/>;
  }
  if (logo.type === 'url') {
    return <Image src={logo.content} alt={`${name} logo`} width={64} height={64} className="object-contain h-16 w-16" />;
  }
  return null;
}

export default function ClientsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-20 md:py-32">
        <div className="text-center mb-16">
          <Users className="w-16 h-16 text-primary mx-auto mb-4 animate-float" />
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
            Our Valued Clients
          </h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-muted-foreground">
            We are proud to have partnered with a diverse range of innovative companies, helping them achieve their digital goals.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {clientsData.map((client) => (
                <div key={client.id} className="group flex flex-col items-center justify-center text-center p-4 rounded-lg border border-transparent hover:border-primary/20 hover:bg-secondary/50 transition-all duration-300 transform hover:-translate-y-1">
                    <LogoDisplay logo={client.logo} name={client.name} />
                    <span className="font-semibold text-sm mt-4 text-foreground">{client.name}</span>
                </div>
            ))}
        </div>
        
        <div className="text-center mt-20">
            <h2 className="font-headline text-2xl font-semibold mb-4">Ready to Join Them?</h2>
            <p className="text-muted-foreground mb-6">Let's discuss how we can help your business succeed.</p>
            <Button asChild size="lg">
                <Link href="/contact">
                    Work With Us <ArrowRight className="ml-2" />
                </Link>
            </Button>
        </div>

      </main>
      <Footer />
    </div>
  );
}
