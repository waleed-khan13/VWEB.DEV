
"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { branding } from "@/lib/branding"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  
  const Logo = () => {
    // In dark mode, use logoDark. In light mode, use logoLight.
    // This component won't re-render on theme change, so we use CSS to hide/show the correct one.
    return (
      <>
        <span className="dark:hidden">
          {branding.logoLight.type === 'url' ? (
            <Image src={branding.logoLight.content} alt="VWEB.DEV Logo" width={24} height={24} className="h-6 w-auto" loading={branding.logoLoading || 'lazy'} />
          ) : (
            <div dangerouslySetInnerHTML={{ __html: branding.logoLight.content }} className="h-6 w-6 text-primary [&_svg]:h-6 [&_svg]:w-6" />
          )}
        </span>
        <span className="hidden dark:inline">
          {branding.logoDark.type === 'url' ? (
            <Image src={branding.logoDark.content} alt="VWEB.DEV Logo" width={24} height={24} className="h-6 w-auto" loading={branding.logoLoading || 'lazy'} />
          ) : (
            <div dangerouslySetInnerHTML={{ __html: branding.logoDark.content }} className="h-6 w-6 text-primary [&_svg]:h-6 [&_svg]:w-6" />
          )}
        </span>
      </>
    )
  }

  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center gap-4 border-b bg-background px-4 md:px-6">
        <div className="md:hidden">
            <SidebarTrigger />
        </div>
        <div className="flex w-full items-center justify-end gap-4">
             <Link href="/" className="flex items-center gap-2 group">
                <Logo />
                <span className="text-lg font-bold font-headline tracking-wider text-foreground">
                VWEB.DEV
                </span>
            </Link>
        </div>
    </header>
  )
}

    