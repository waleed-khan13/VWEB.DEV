
"use client";

import { Toaster } from "@/components/ui/toaster"
import { CurrencyProvider } from '@/context/currency-context';
import { LoadingScreen } from '@/components/layout/loading-screen';
import { branding } from "@/lib/branding";
import { AnimatedSymbols } from "@/components/animated-symbols";
import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <CurrencyProvider>
      {branding.loadingScreenEnabled && <LoadingScreen />}
      {isClient && <AnimatedSymbols />}
      <div className="relative z-10 bg-transparent">
          {children}
      </div>
      <Toaster />
    </CurrencyProvider>
  )
}
