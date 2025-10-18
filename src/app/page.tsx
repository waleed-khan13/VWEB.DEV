"use client";

import { Suspense } from "react";
import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/sections/hero-section";
import { RealmSection } from "@/components/sections/realm-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { TeamSection } from "@/components/sections/team-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { PartnersSection } from "@/components/sections/partners-section";
import { Footer } from "@/components/layout/footer";
import { ContactSection } from "@/components/sections/contact-section";

export const dynamic = "force-dynamic"; // ✅ prevents static prerender errors

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<div className="text-center py-10">Loading sections...</div>}>
          <HeroSection />
          <RealmSection />
          <ProjectsSection />
          <TeamSection />
          <TechStackSection />
          <PartnersSection />
          <TestimonialsSection />
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
