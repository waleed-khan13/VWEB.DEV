

"use client"

import { ProtectedRoute } from "@/components/auth/ProtectedRoute"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton
} from "@/components/ui/sidebar"
import {
  Settings,
  BarChart2,
  LayoutGrid,
  Package,
  ChevronDown,
  User,
  CreditCard,
  Cpu,
  Handshake,
  Users,
  MessageSquareQuote,
  Briefcase,
  Palette,
} from "lucide-react"
import { Header } from "@/components/layout/admin-header"
import { Footer } from "@/components/layout/footer"
import { useState } from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"
import Link from "next/link"


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  return (
    <ProtectedRoute requireAdmin={true}>
      <SidebarProvider>
        <div className="flex min-h-screen">
          <Sidebar>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Analytics</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <Link href="/admin" passHref>
                      <SidebarMenuButton>
                        <LayoutGrid />
                        Dashboard
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <Link href="/admin/analytics" passHref>
                      <SidebarMenuButton>
                        <BarChart2 />
                        Analytics
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
                <SidebarGroup>
                <SidebarGroupLabel>Store</SidebarGroupLabel>
                  <SidebarMenu>
                  <SidebarMenuItem>
                     <Link href="/admin/orders" passHref>
                      <SidebarMenuButton>
                        <Package />
                        Orders
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                     <Link href="/admin/services" passHref>
                      <SidebarMenuButton>
                        <Briefcase />
                        Services & Pricing
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <Link href="/admin/customers" passHref>
                      <SidebarMenuButton>
                        <Users />
                        Customers
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
              <SidebarGroup>
                <SidebarGroupLabel>Content</SidebarGroupLabel>
                  <SidebarMenu>
                  <SidebarMenuItem>
                     <Link href="/admin/team" passHref>
                      <SidebarMenuButton>
                        <Users />
                        Team
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                   <SidebarMenuItem>
                     <Link href="/admin/clients" passHref>
                      <SidebarMenuButton>
                        <Briefcase />
                        Clients
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <Link href="/admin/arsenal" passHref>
                      <SidebarMenuButton>
                        <Cpu />
                        Arsenal
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                     <Link href="/admin/partners" passHref>
                      <SidebarMenuButton>
                        <Handshake />
                        Partners
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                   <SidebarMenuItem>
                     <Link href="/admin/testimonials" passHref>
                      <SidebarMenuButton>
                        <MessageSquareQuote />
                        Testimonials
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarGroup>
                  <SidebarGroupLabel>General</SidebarGroupLabel>
                    <Collapsible open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
                      <CollapsibleTrigger asChild>
                          <SidebarMenuButton>
                            <Settings />
                            <span>Settings</span>
                            <ChevronDown className={cn("ml-auto transition-transform", isSettingsOpen && "rotate-180")} />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem>
                              <Link href="/admin/profile" passHref legacyBehavior>
                                  <SidebarMenuSubButton asChild>
                                    <a>
                                      <User />
                                      Profile
                                    </a>
                                  </SidebarMenuSubButton>
                              </Link>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem>
                              <Link href="/admin/billing" passHref legacyBehavior>
                                  <SidebarMenuSubButton asChild>
                                      <a>
                                          <CreditCard />
                                          Billing
                                      </a>
                                  </SidebarMenuSubButton>
                              </Link>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem>
                              <Link href="/admin/theme" passHref legacyBehavior>
                                  <SidebarMenuSubButton asChild>
                                      <a>
                                          <Palette />
                                          Theme
                                      </a>
                                  </SidebarMenuSubButton>
                              </Link>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                </SidebarGroup>
            </SidebarFooter>
          </Sidebar>
          <SidebarInset className="flex flex-col flex-1">
              <Header />
              <main className="p-6 flex-grow bg-background">
                {children}
              </main>
              <Footer />
          </SidebarInset>
        </div>
      </SidebarProvider>
    </ProtectedRoute>
  )
}
