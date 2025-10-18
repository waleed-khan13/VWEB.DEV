
"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import type { Plan } from "@/lib/pricing-plans";
import { useCurrency } from "@/context/currency-context";

interface PricingCardProps {
  plan: Plan;
}

export function PricingCard({ plan }: PricingCardProps) {
  const { formatPrice } = useCurrency();

  return (
    <Card
      className={cn(
        "flex flex-col border-2",
        plan.featured
          ? "border-primary shadow-2xl shadow-primary/20"
          : "border-border"
      )}
    >
      <CardHeader className="relative">
        {plan.featured && (
          <div className="absolute top-0 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-b-md">
            POPULAR
          </div>
        )}
        <CardTitle className="font-headline text-3xl">{plan.name}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-6">
        <div className="space-y-2">
            <span className="text-4xl font-bold">
              {plan.price.amount ? formatPrice(plan.price.amount) : "Custom"}
            </span>
            <span className="text-muted-foreground">{plan.price.period}</span>
        </div>
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          className={cn(
            "w-full",
            plan.featured ? "bg-primary" : "bg-primary/80"
          )}
        >
          <Link href="/contact">Get Started</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
