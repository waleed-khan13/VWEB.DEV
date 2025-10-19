

"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/AuthContext"
import { branding } from "@/lib/branding"
import Image from "next/image"
import Link from "next/link"
import { LogOut, User } from "lucide-react"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const { user, signOut } = useAuth()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleLogout = async () => {
    setIsLoggingOut(true)
    try {
      await signOut()
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      setIsLoggingOut(false)
    }
  }
  
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
        <div className="flex w-full items-center justify-between gap-4">
             <Link href="/" className="flex items-center gap-2 group">
                <Logo />
                <span className="text-lg font-bold font-headline tracking-wider text-foreground">
                VWEB.DEV
                </span>
            </Link>

            {user && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <User className="h-4 w-4" />
                    <span className="hidden md:inline">{user.email}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Admin Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/admin/profile" className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    onClick={handleLogout} 
                    disabled={isLoggingOut}
                    className="text-destructive focus:text-destructive cursor-pointer"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    {isLoggingOut ? 'Logging out...' : 'Logout'}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
        </div>
    </header>
  )
}
