
"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PricingCard } from "@/components/layout/pricing-card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { pricingPlans } from "@/lib/pricing-plans";
import { Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import { CurrencySwitcher } from "@/components/layout/currency-switcher";


export default function PricingPage() {
  const [activeRealm, setActiveRealm] = useState(Object.keys(pricingPlans)[0]);
  
  const realmKeys = Object.keys(pricingPlans);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-4">
            <Bot className="w-16 h-16 text-primary inline-block animate-float" />
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
            Transparent Pricing for Every Need
          </h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-muted-foreground">
            Find the perfect plan for your project. We offer flexible pricing options to fit your budget and goals, from startups to enterprises.
          </p>
           <div className="mt-8 flex justify-center">
            <CurrencySwitcher />
          </div>
        </div>

        <Tabs defaultValue={activeRealm} onValueChange={setActiveRealm} className="w-full">
          <TabsList className="grid w-full max-w-6xl mx-auto grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 h-auto">
            {realmKeys.map((key) => (
                <TabsTrigger key={key} value={key} className="text-xs sm:text-sm">
                    {pricingPlans[key as keyof typeof pricingPlans].title}
                </TabsTrigger>
            ))}
          </TabsList>

          {realmKeys.map((realmKey) => {
            const realm = pricingPlans[realmKey as keyof typeof pricingPlans];
            const realmSubServiceKeys = Object.keys(realm.subServices);
            
            return (
              <TabsContent key={realmKey} value={realmKey} className="mt-12 w-full">
                <Tabs defaultValue={realmSubServiceKeys[0]} className="w-full">
                   <TabsList className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 h-auto max-w-5xl mx-auto">
                      {realmSubServiceKeys.map(subServiceKey => (
                         <TabsTrigger key={subServiceKey} value={subServiceKey} className="text-xs sm:text-sm">
                            {realm.subServices[subServiceKey].title}
                         </TabsTrigger>
                      ))}
                   </TabsList>

                   {realmSubServiceKeys.map(subServiceKey => {
                       const subService = realm.subServices[subServiceKey];
                       const offeringKeys = Object.keys(subService.offerings);

                       return (
                           <TabsContent key={subServiceKey} value={subServiceKey} className="mt-12 space-y-20">
                              {offeringKeys.map(offeringKey => {
                                const offering = subService.offerings[offeringKey];
                                const planCount = offering.plans.length;
                                return (
                                  <div key={offeringKey}>
                                    <div className="text-center mb-8">
                                        <h2 className="font-headline text-3xl font-bold">{offering.title}</h2>
                                        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">{offering.description}</p>
                                    </div>
                                    <div className={cn(
                                        "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto",
                                        planCount === 3 && "lg:grid-cols-3",
                                        planCount === 4 && "lg:grid-cols-4",
                                        planCount === 2 && "lg:grid-cols-2",
                                     )}>
                                        {offering.plans.map((plan, index) => (
                                            <PricingCard key={index} plan={plan} />
                                        ))}
                                    </div>
                                  </div>
                                )
                              })}
                           </TabsContent>
                       )
                   })}
                </Tabs>
              </TabsContent>
            )
          })}
        </Tabs>
      </main>
      <Footer />
    </div>
  );
}
