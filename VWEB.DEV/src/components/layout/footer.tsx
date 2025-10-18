
"use client";

import { Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const socialLinks = [
  { icon: Twitter, href: "#", name: "Twitter" },
  { icon: Github, href: "#", name: "Github" },
  { icon: Linkedin, href: "#", name: "LinkedIn" },
];

export function Footer() {
  const pathname = usePathname();
  // The contact form is now part of the main page layout, so we don't need to render it separately in the footer.
  // This also helps avoid potential hydration issues.

  return (
    <footer className="bg-background border-t border-border">
      {/* The ContactSection is now rendered in the page layout directly */}
      <div className="container mx-auto px-4 py-4 md:px-6">
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} VWEB.DEV. All rights reserved.
            </p>
          </div>
          <div className="w-full md:w-1/3 text-center">
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <a href="mailto:info@vweb.dev">info@vweb.dev</a>
              <span>|</span>
              <a href="tel:+923214433994">+92 321 4433994</a>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="text-muted-foreground transition-all hover:text-primary hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
