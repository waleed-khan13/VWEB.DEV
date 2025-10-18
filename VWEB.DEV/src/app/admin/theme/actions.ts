
"use server";

import fs from 'fs/promises';
import path from 'path';
import { Branding } from '@/lib/branding';

export async function updateThemeAction(newThemeContent: string, newBranding: Branding): Promise<{ success: boolean, error?: string }> {
  
  const cssFilePath = path.join(process.cwd(), 'src', 'app', 'globals.css');
  // Do not overwrite source files in `src/` at runtime — write to `public/` instead
  // to avoid Turbopack/Next HMR module mismatch errors.
  const brandingFilePath = path.join(process.cwd(), 'public', 'branding.json');

  try {
    // === Update CSS File ===
    const existingCssContent = await fs.readFile(cssFilePath, 'utf-8');
    const themeStartMarker = '@layer base {';
    const themeEndMarker = '}';
    const startIndex = existingCssContent.indexOf(themeStartMarker);
    
    if (startIndex === -1) {
        throw new Error("Could not find the start of the theme definition in globals.css");
    }

    const firstBraceIndex = existingCssContent.indexOf(themeEndMarker, startIndex);
    const secondBraceIndex = existingCssContent.indexOf(themeEndMarker, firstBraceIndex + 1);

    if (secondBraceIndex === -1) {
        throw new Error("Could not find the end of the theme definition in globals.css");
    }

    const finalCssContent = `
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
}

h1 { font-family: var(--font-h1); color: hsl(var(--h1-color)); font-weight: var(--font-h1-weight); }
h2 { font-family: var(--font-h2); color: hsl(var(--h2-color)); font-weight: var(--font-h2-weight); }
h3 { font-family: var(--font-h3); color: hsl(var(--h3-color)); font-weight: var(--font-h3-weight); }
h4 { font-family: var(--font-h4); color: hsl(var(--h4-color)); font-weight: var(--font-h4-weight); }
h5 { font-family: var(--font-h5); color: hsl(var(--h5-color)); font-weight: var(--font-h5-weight); }
h6 { font-family: var(--font-h6); color: hsl(var(--h6-color)); font-weight: var(--font-h6-weight); }

main.scroll-snap-container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
}

main.scroll-snap-container::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}

main.scroll-snap-container {
  -ms-overflow-style: none;  /* for Internet Explorer and Edge */
  scrollbar-width: none;  /* for Firefox */
}

.scroll-snap-section {
  scroll-snap-align: start;
  min-height: 100vh;
  position: relative;
}

#contact.scroll-snap-section {
    min-height: auto;
}

@layer base {
  ${newThemeContent}
  
    :root {
        --chart-1: 12 76% 61%;
        --chart-2: 173 58% 39%;
        --chart-3: 197 37% 24%;
        --chart-4: 43 74% 66%;
        --chart-5: 27 87% 67%;
        --sidebar-background: 0 0% 98%;
        --sidebar-foreground: 240 5.3% 26.1%;
        --sidebar-primary: 240 5.9% 10%;
        --sidebar-primary-foreground: 0 0% 98%;
        --sidebar-accent: 240 4.8% 95.9%;
        --sidebar-accent-foreground: 240 5.9% 10%;
        --sidebar-border: 220 13% 91%;
        --sidebar-ring: 217.2 91.2% 59.8%;
    }

    .dark {
        --chart-1: 220 70% 50%;
        --chart-2: 160 60% 45%;
        --chart-3: 30 80% 55%;
        --chart-4: 280 65% 60%;
        --chart-5: 340 75% 55%;
        --sidebar-background: 240 5.9% 10% / 0.8;
        --sidebar-foreground: 240 4.8% 95.9%;
        --sidebar-primary: 224.3 76.3% 48%;
        --sidebar-primary-foreground: 0 0% 100%;
        --sidebar-accent: 240 3.7% 15.9% / 0.5;
        --sidebar-accent-foreground: 240 4.8% 95.9%;
        --sidebar-border: 240 3.7% 15.9% / 0.5;
        --sidebar-ring: 217.2 91.2% 59.8%;
    }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

@layer utilities {
  .section-reveal {
    opacity: 0;
    transform: translateY(2rem);
    transition: opacity 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000), transform 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }
  .section-reveal.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .animate-spin-slow {
    animation: spin-slow 30s linear infinite;
  }

  @keyframes grow {
    from {
        transform: scaleY(0);
    }
    to {
        transform: scaleY(1);
    }
  }

  .animate-grow {
    transform-origin: bottom;
    animation: grow 1s ease-in-out forwards;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .animate-float {
    animation: float 4s ease-in-out infinite;
  }

  @keyframes pulse-glow {
    0%, 100% {
      box-shadow: 0 0 20px -5px currentColor;
    }
    50% {
       box-shadow: 0 0 20px 5px currentColor;
    }
  }

  .animate-pulse-glow {
     animation: pulse-glow 3s ease-in-out infinite;
  }

  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  .animate-blink {
    animation: blink 1s step-end infinite;
  }
}
`;
    await fs.writeFile(cssFilePath, finalCssContent.trim());

    // === Update Branding File ===
    const brandingFileContent = JSON.stringify(newBranding, null, 2);
    await fs.writeFile(brandingFilePath, brandingFileContent);
    
    return { success: true };
  } catch (error: any) {
    console.error(error);
    return { success: false, error: error.message };
  }
}

    