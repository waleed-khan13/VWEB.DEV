
"use client";

import { Menu, X, ChevronDown, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "../ui/button";
import { realms } from "@/lib/realms";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { branding } from "@/lib/branding";
import { useLiveBranding } from '@/lib/use-live-branding';
import Image from "next/image";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "../ui/scroll-area";


export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);
  
  const live = useLiveBranding();

  const Logo = () => {
    return (
      <>
        <span className="dark:hidden">
          {live.logoLight.type === 'url' ? (
            <Image src={live.logoLight.content} alt="VWEB.DEV Logo" width={32} height={32} className="h-8 w-auto" loading={live.logoLoading || 'lazy'} />
          ) : (
            <div dangerouslySetInnerHTML={{ __html: live.logoLight.content }} className="h-8 w-8 text-primary [&_svg]:h-8 [&_svg]:w-8" />
          )}
        </span>
        <span className="hidden dark:inline">
          {live.logoDark.type === 'url' ? (
            <Image src={live.logoDark.content} alt="VWEB.DEV Logo" width={32} height={32} className="h-8 w-auto" loading={live.logoLoading || 'lazy'} />
          ) : (
            <div dangerouslySetInnerHTML={{ __html: live.logoDark.content }} className="h-8 w-8 text-primary [&_svg]:h-8 [&_svg]:w-8" />
          )}
        </span>
      </>
    )
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-background border-b border-border"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <Logo />
          <span className="text-xl font-bold font-headline tracking-wider text-foreground">
            VWEB.DEV
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-sm">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="font-medium text-muted-foreground transition-colors hover:text-primary px-3 flex items-center gap-1 outline-none">
                  Services
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background/80 backdrop-blur-sm">
                {realms.map((realm) => (
                  <DropdownMenuItem key={realm.slug} asChild>
                    <Link href={realm.href}>{realm.title}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          <Link href="/pricing" className="font-medium text-muted-foreground transition-colors hover:text-primary px-3">
            Pricing
          </Link>
          <Link href="/team" className="font-medium text-muted-foreground transition-colors hover:text-primary px-3">
            Team
          </Link>
           <Link href="/clients" className="font-medium text-muted-foreground transition-colors hover:text-primary px-3">
            Clients
          </Link>
          <Link href="/quote-estimator" className="font-medium text-muted-foreground transition-colors hover:text-primary px-3">
            Quote Estimator
          </Link>
          <Link href="/#contact" className="font-medium text-muted-foreground transition-colors hover:text-primary px-3">
            Contact
          </Link>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/admin" className="font-medium text-muted-foreground transition-colors hover:text-primary px-3">
                  <Shield className="h-5 w-5" />
                  <span className="sr-only">Admin</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Admin</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full max-w-sm p-0">
                  <SheetHeader className="p-6 border-b">
                    <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                    <Link href="/" className="flex items-center gap-2 group" onClick={() => setMobileMenuOpen(false)}>
                      <Logo />
                      <span className="text-xl font-bold font-headline tracking-wider text-foreground">
                        VWEB.DEV
                      </span>
                    </Link>
                  </SheetHeader>
                  <ScrollArea className="h-[calc(100%-4.5rem)]">
                    <nav className="flex flex-col p-6 space-y-4">
                      <Collapsible className="w-full text-left">
                        <CollapsibleTrigger className="font-medium text-muted-foreground transition-colors hover:text-primary text-xl flex items-center justify-between w-full">
                          Services <ChevronDown className={cn("h-6 w-6 transition-transform")} />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-4 space-y-4 pl-4 border-l">
                          {realms.map((realm) => (
                            <Link
                              key={realm.slug}
                              href={realm.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block font-medium text-muted-foreground transition-colors hover:text-primary text-lg"
                            >
                              {realm.title}
                            </Link>
                          ))}
                        </CollapsibleContent>
                      </Collapsible>
                      <Link
                          href="/pricing"
                          onClick={() => setMobileMenuOpen(false)}
                          className="font-medium text-muted-foreground transition-colors hover:text-primary text-xl"
                        >
                          Pricing
                        </Link>
                      <Link
                          href="/team"
                          onClick={() => setMobileMenuOpen(false)}
                          className="font-medium text-muted-foreground transition-colors hover:text-primary text-xl"
                        >
                          Team
                        </Link>
                        <Link
                          href="/clients"
                          onClick={() => setMobileMenuOpen(false)}
                          className="font-medium text-muted-foreground transition-colors hover:text-primary text-xl"
                        >
                          Clients
                        </Link>
                      <Link
                          href="/quote-estimator"
                          onClick={() => setMobileMenuOpen(false)}
                          className="font-medium text-muted-foreground transition-colors hover:text-primary text-xl"
                        >
                          Quote Estimator
                        </Link>
                      <Link
                          href="/#contact"
                          onClick={() => setMobileMenuOpen(false)}
                          className="font-medium text-muted-foreground transition-colors hover:text-primary text-xl"
                        >
                          Contact
                        </Link>
                      <Link
                          href="/admin"
                          onClick={() => setMobileMenuOpen(false)}
                          className="font-medium text-muted-foreground transition-colors hover:text-primary text-xl"
                        >
                          Admin
                        </Link>
                    </nav>
                  </ScrollArea>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
