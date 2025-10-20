
"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Palette, RefreshCw, Save, Type, Image as ImageIcon, Code, Link as LinkIcon } from "lucide-react";
import { updateThemeAction } from "./actions";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { branding as initialBranding } from "@/lib/branding";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Logo, Branding } from "@/lib/branding";
import { Switch } from "@/components/ui/switch";

// Helper function to convert hex to HSL string "h s% l%"
function hexToHslString(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "0 0% 0%";
  
  const r = parseInt(result[1], 16) / 255;
  const g = parseInt(result[2], 16) / 255;
  const b = parseInt(result[3], 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  
  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return `${h} ${s}% ${l}%`;
}

// Helper function to convert HSL string "h s% l%" to hex
function hslStringToHex(hsl: string): string {
    const [h, s, l] = hsl.match(/\d+(\.\d+)?/g)!.map(Number);
    const s_norm = s / 100;
    const l_norm = l / 100;

    const a = s_norm * Math.min(l_norm, 1 - l_norm);
    const f = (n: number) => {
        const k = (n + h / 30) % 12;
        const color = l_norm - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

const defaultColors = {
  light: {
    primary: "217.2 91.2% 59.8%",
    accent: "45 90% 50%",
    background: "0 0% 100%",
    border: "0 0% 89.8%",
    h1: "217.2 91.2% 59.8%",
    h2: "0 0% 3.9%",
    h3: "0 0% 3.9%",
    h4: "0 0% 3.9%",
    h5: "0 0% 3.9%",
    h6: "0 0% 3.9%",
  },
  dark: {
    primary: "217.2 91.2% 59.8%",
    accent: "45 90% 50%",
    background: "240 10% 3.9%",
    border: "0 0% 14.9%",
    h1: "217.2 91.2% 59.8%",
    h2: "0 0% 98%",
    h3: "0 0% 98%",
    h4: "0 0% 98%",
    h5: "0 0% 98%",
    h6: "0 0% 98%",
  }
};

const defaultFonts = {
    h1: { family: '"Space Grotesk", sans-serif', weight: '700' },
    h2: { family: '"Space Grotesk", sans-serif', weight: '700' },
    h3: { family: '"Space Grotesk", sans-serif', weight: '700' },
    h4: { family: '"Space Grotesk", sans-serif', weight: '700' },
    h5: { family: '"Space Grotesk", sans-serif', weight: '700' },
    h6: { family: '"Space Grotesk", sans-serif', weight: '700' },
    body: { family: 'Inter, sans-serif', weight: '400' }
};

const availableFonts = [
    { value: '"Space Grotesk", sans-serif', label: 'Space Grotesk' },
    { value: 'Inter, sans-serif', label: 'Inter' },
    { value: 'Roboto, sans-serif', label: 'Roboto' },
    { value: '"Open Sans", sans-serif', label: 'Open Sans' },
    { value: 'Lato, sans-serif', label: 'Lato' },
    { value: 'Montserrat, sans-serif', label: 'Montserrat' },
    { value: 'Poppins, sans-serif', label: 'Poppins' },
];

const availableWeights = [
    { value: '300', label: 'Light' },
    { value: '400', label: 'Normal' },
    { value: '500', label: 'Medium' },
    { value: '600', label: 'Semi-bold' },
    { value: '700', label: 'Bold' },
];

export default function AdminThemePage() {
  const { toast } = useToast();
  const [lightTheme, setLightTheme] = useState({
      primary: hslStringToHex(defaultColors.light.primary),
      accent: hslStringToHex(defaultColors.light.accent),
      background: hslStringToHex(defaultColors.light.background),
      border: hslStringToHex(defaultColors.light.border),
      h1: hslStringToHex(defaultColors.light.h1),
      h2: hslStringToHex(defaultColors.light.h2),
      h3: hslStringToHex(defaultColors.light.h3),
      h4: hslStringToHex(defaultColors.light.h4),
      h5: hslStringToHex(defaultColors.light.h5),
      h6: hslStringToHex(defaultColors.light.h6),
  });

  const [darkTheme, setDarkTheme] = useState({
      primary: hslStringToHex(defaultColors.dark.primary),
      accent: hslStringToHex(defaultColors.dark.accent),
      background: hslStringToHex(defaultColors.dark.background),
      border: hslStringToHex(defaultColors.dark.border),
      h1: hslStringToHex(defaultColors.dark.h1),
      h2: hslStringToHex(defaultColors.dark.h2),
      h3: hslStringToHex(defaultColors.dark.h3),
      h4: hslStringToHex(defaultColors.dark.h4),
      h5: hslStringToHex(defaultColors.dark.h5),
      h6: hslStringToHex(defaultColors.dark.h6),
  });

  const [fonts, setFonts] = useState(defaultFonts);

  const [isSaving, setIsSaving] = useState(false);
  
  const [logoLight, setLogoLight] = useState<Logo>(initialBranding.logoLight);
  const [logoDark, setLogoDark] = useState<Logo>(initialBranding.logoDark);
  const [faviconUrl, setFaviconUrl] = useState(initialBranding.faviconUrl || '');
  const [logoLoading, setLogoLoading] = useState<Branding['logoLoading']>(initialBranding.logoLoading || 'lazy');
  
  const [imagePreviewLight, setImagePreviewLight] = useState(initialBranding.logoLight.type === 'url' ? initialBranding.logoLight.content : null);
  const [imagePreviewDark, setImagePreviewDark] = useState(initialBranding.logoDark.type === 'url' ? initialBranding.logoDark.content : null);
  
  const [loadingScreenEnabled, setLoadingScreenEnabled] = useState(initialBranding.loadingScreenEnabled ?? true);
  const [loadingScreenDuration, setLoadingScreenDuration] = useState(initialBranding.loadingScreenDuration ?? 1500);


  const applyTheme = useCallback(() => {
    const styleId = "dynamic-theme-style";
    let styleElement = document.getElementById(styleId);

    if (!styleElement) {
        styleElement = document.createElement("style");
        styleElement.id = styleId;
        document.head.appendChild(styleElement);
    }
    
    const themeCss = `
        :root {
            --primary: ${hexToHslString(lightTheme.primary)};
            --accent: ${hexToHslString(lightTheme.accent)};
            --ring: ${hexToHslString(lightTheme.accent)};
            --background: ${hexToHslString(lightTheme.background)};
            --border: ${hexToHslString(lightTheme.border)};
            --input: ${hexToHslString(lightTheme.border)};
            --h1-color: ${hexToHslString(lightTheme.h1)};
            --h2-color: ${hexToHslString(lightTheme.h2)};
            --h3-color: ${hexToHslString(lightTheme.h3)};
            --h4-color: ${hexToHslString(lightTheme.h4)};
            --h5-color: ${hexToHslString(lightTheme.h5)};
            --h6-color: ${hexToHslString(lightTheme.h6)};
            --font-h1: ${fonts.h1.family};
            --font-h1-weight: ${fonts.h1.weight};
            --font-h2: ${fonts.h2.family};
            --font-h2-weight: ${fonts.h2.weight};
            --font-h3: ${fonts.h3.family};
            --font-h3-weight: ${fonts.h3.weight};
            --font-h4: ${fonts.h4.family};
            --font-h4-weight: ${fonts.h4.weight};
            --font-h5: ${fonts.h5.family};
            --font-h5-weight: ${fonts.h5.weight};
            --font-h6: ${fonts.h6.family};
            --font-h6-weight: ${fonts.h6.weight};
            --font-body: ${fonts.body.family};
        }
        .dark {
            --primary: ${hexToHslString(darkTheme.primary)};
            --accent: ${hexToHslString(darkTheme.accent)};
            --ring: ${hexToHslString(darkTheme.accent)};
            --background: ${hexToHslString(darkTheme.background)};
            --border: ${hexToHslString(darkTheme.border)};
            --input: ${hexToHslString(darkTheme.border)};
            --h1-color: ${hexToHslString(darkTheme.h1)};
            --h2-color: ${hexToHslString(darkTheme.h2)};
            --h3-color: ${hexToHslString(darkTheme.h3)};
            --h4-color: ${hexToHslString(darkTheme.h4)};
            --h5-color: ${hexToHslString(darkTheme.h5)};
            --h6-color: ${hexToHslString(darkTheme.h6)};
        }
        body { font-family: var(--font-body); }
        h1, .font-headline { font-family: var(--font-h1); font-weight: var(--font-h1-weight); }
        h2 { font-family: var(--font-h2); font-weight: var(--font-h2-weight); }
        h3 { font-family: var(--font-h3); font-weight: var(--font-h3-weight); }
        h4 { font-family: var(--font-h4); font-weight: var(--font-h4-weight); }
        h5 { font-family: var(--font-h5); font-weight: var(--font-h5-weight); }
        h6 { font-family: var(--font-h6); font-weight: var(--font-h6-weight); }
        h1 { color: hsl(var(--h1-color)); }
        h2 { color: hsl(var(--h2-color)); }
        h3 { color: hsl(var(--h3-color)); }
        h4 { color: hsl(var(--h4-color)); }
        h5 { color: hsl(var(--h5-color)); }
        h6 { color: hsl(var(--h6-color)); }
    `;

    styleElement.innerHTML = themeCss;
  }, [lightTheme, darkTheme, fonts]);

  useEffect(() => {
    applyTheme();
  }, [applyTheme]);

  const handleLightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLightTheme(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleDarkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDarkTheme(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };
  
  const handleFontChange = (type: keyof typeof defaultFonts, property: 'family' | 'weight', value: string) => {
    setFonts(prev => ({
        ...prev,
        [type]: {
            ...prev[type],
            [property]: value
        }
    }));
  };
  
  const handleLogoTypeChange = (value: "svg" | "url", mode: 'light' | 'dark') => {
    if (mode === 'light') {
      setLogoLight({ type: value, content: '' });
      setImagePreviewLight(null);
    } else {
      setLogoDark({ type: value, content: '' });
      setImagePreviewDark(null);
    }
  };
  
  const handleLogoContentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, mode: 'light' | 'dark') => {
    if (mode === 'light') {
      setLogoLight(prev => ({ ...prev, content: e.target.value }));
    } else {
      setLogoDark(prev => ({ ...prev, content: e.target.value }));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, mode: 'light' | 'dark') => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        if (mode === 'light') {
          setLogoLight({ type: 'url', content: result });
          setImagePreviewLight(result);
        } else {
          setLogoDark({ type: 'url', content: result });
          setImagePreviewDark(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    setLightTheme({
      primary: hslStringToHex(defaultColors.light.primary),
      accent: hslStringToHex(defaultColors.light.accent),
      background: hslStringToHex(defaultColors.light.background),
      border: hslStringToHex(defaultColors.light.border),
      h1: hslStringToHex(defaultColors.light.h1),
      h2: hslStringToHex(defaultColors.light.h2),
      h3: hslStringToHex(defaultColors.light.h3),
      h4: hslStringToHex(defaultColors.light.h4),
      h5: hslStringToHex(defaultColors.light.h5),
      h6: hslStringToHex(defaultColors.light.h6),
    });
    setDarkTheme({
      primary: hslStringToHex(defaultColors.dark.primary),
      accent: hslStringToHex(defaultColors.dark.accent),
      background: hslStringToHex(defaultColors.dark.background),
      border: hslStringToHex(defaultColors.dark.border),
      h1: hslStringToHex(defaultColors.dark.h1),
      h2: hslStringToHex(defaultColors.dark.h2),
      h3: hslStringToHex(defaultColors.dark.h3),
      h4: hslStringToHex(defaultColors.dark.h4),
      h5: hslStringToHex(defaultColors.dark.h5),
      h6: hslStringToHex(defaultColors.dark.h6),
    });
    setFonts(defaultFonts);
    setLogoLight(initialBranding.logoLight);
    setLogoDark(initialBranding.logoDark);
    setFaviconUrl(initialBranding.faviconUrl || '');
    setLogoLoading(initialBranding.logoLoading || 'lazy');
    setImagePreviewLight(initialBranding.logoLight.type === 'url' ? initialBranding.logoLight.content : null);
    setImagePreviewDark(initialBranding.logoDark.type === 'url' ? initialBranding.logoDark.content : null);
    setLoadingScreenEnabled(initialBranding.loadingScreenEnabled ?? true);
    setLoadingScreenDuration(initialBranding.loadingScreenDuration ?? 1500);
    
    toast({
      title: "Theme Reset",
      description: "Theme has been reset to its default values.",
    });
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const newThemeContent = `
        :root {
            --background: ${hexToHslString(lightTheme.background)};
            --foreground: 0 0% 3.9%;
            --card: 0 0% 100%;
            --card-foreground: 0 0% 3.9%;
            --popover: 0 0% 100%;
            --popover-foreground: 0 0% 3.9%;
            --primary: ${hexToHslString(lightTheme.primary)};
            --primary-foreground: 0 0% 98%;
            --secondary: 0 0% 96.1%;
            --secondary-foreground: 0 0% 9%;
            --muted: 0 0% 96.1%;
            --muted-foreground: 0 0% 45.1%;
            --accent: ${hexToHslString(lightTheme.accent)};
            --accent-foreground: 0 0% 9%;
            --destructive: 0 84.2% 60.2%;
            --destructive-foreground: 0 0% 98%;
            --border: ${hexToHslString(lightTheme.border)};
            --input: ${hexToHslString(lightTheme.border)};
            --ring: ${hexToHslString(lightTheme.accent)};
            --radius: 0.5rem;
            --font-h1: ${fonts.h1.family};
            --font-h1-weight: ${fonts.h1.weight};
            --font-h2: ${fonts.h2.family};
            --font-h2-weight: ${fonts.h2.weight};
            --font-h3: ${fonts.h3.family};
            --font-h3-weight: ${fonts.h3.weight};
            --font-h4: ${fonts.h4.family};
            --font-h4-weight: ${fonts.h4.weight};
            --font-h5: ${fonts.h5.family};
            --font-h5-weight: ${fonts.h5.weight};
            --font-h6: ${fonts.h6.family};
            --font-h6-weight: ${fonts.h6.weight};
            --font-body: ${fonts.body.family};
            --h1-color: ${hexToHslString(lightTheme.h1)};
            --h2-color: ${hexToHslString(lightTheme.h2)};
            --h3-color: ${hexToHslString(lightTheme.h3)};
            --h4-color: ${hexToHslString(lightTheme.h4)};
            --h5-color: ${hexToHslString(lightTheme.h5)};
            --h6-color: ${hexToHslString(lightTheme.h6)};
        }
        .dark {
            --background: ${hexToHslString(darkTheme.background)};
            --foreground: 0 0% 98%;
            --card: 240 4% 15% / 0.75;
            --card-foreground: 0 0% 98%;
            --popover: 240 4% 15% / 0.75;
            --popover-foreground: 0 0% 98%;
            --primary: ${hexToHslString(darkTheme.primary)};
            --primary-foreground: 0 0% 10%;
            --secondary: 0 0% 20% / 0.5;
            --secondary-foreground: 0 0% 98%;
            --muted: 0 0% 20% / 0.5;
            --muted-foreground: 0 0% 63.9%;
            --accent: ${hexToHslString(darkTheme.accent)};
            --accent-foreground: 0 0% 98%;
            --destructive: 0 62.8% 30.6%;
            --destructive-foreground: 0 0% 98%;
            --border: ${hexToHslString(darkTheme.border)};
            --input: ${hexToHslString(darkTheme.border)};
            --ring: ${hexToHslString(darkTheme.accent)};
            --h1-color: ${hexToHslString(darkTheme.h1)};
            --h2-color: ${hexToHslString(darkTheme.h2)};
            --h3-color: ${hexToHslString(darkTheme.h3)};
            --h4-color: ${hexToHslString(darkTheme.h4)};
            --h5-color: ${hexToHslString(darkTheme.h5)};
            --h6-color: ${hexToHslString(darkTheme.h6)};
        }
      `;
      
      const newBranding: Branding = {
          logoLight,
          logoDark,
          faviconUrl,
          logoLoading,
          loadingScreenEnabled,
          loadingScreenDuration,
      };

      const result = await updateThemeAction(newThemeContent, newBranding);

      if (result.success) {
        toast({
          title: "Theme Saved!",
          description: "Your new theme has been applied across the site. You may need to refresh to see all changes.",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Error Saving Theme",
          description: result.error,
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "An Unexpected Error Occurred",
        description: "Please try again.",
      });
    } finally {
        setIsSaving(false);
    }
  };


  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-headline text-3xl font-bold">Theme</h1>
          <p className="text-muted-foreground mt-2">
            Customize the look and feel of your application.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Palette /> Colors</CardTitle>
                <CardDescription>Customize the colors for the light and dark themes.</CardDescription>
            </CardHeader>
            <CardContent>
               <Tabs defaultValue="light">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="light">Light Theme</TabsTrigger>
                    <TabsTrigger value="dark">Dark Theme</TabsTrigger>
                  </TabsList>
                  <TabsContent value="light" className="mt-6">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="primary">Primary Color</Label>
                            <div className="flex items-center gap-2">
                                <Input id="primary" value={lightTheme.primary} onChange={handleLightChange} className="w-32"/>
                                <Input type="color" id="primary" value={lightTheme.primary} onChange={handleLightChange} className="w-10 h-10 p-1"/>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <Label htmlFor="accent">Accent Color</Label>
                            <div className="flex items-center gap-2">
                                <Input id="accent" value={lightTheme.accent} onChange={handleLightChange} className="w-32"/>
                                <Input type="color" id="accent" value={lightTheme.accent} onChange={handleLightChange} className="w-10 h-10 p-1"/>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <Label htmlFor="background">Background Color</Label>
                            <div className="flex items-center gap-2">
                                <Input id="background" value={lightTheme.background} onChange={handleLightChange} className="w-32"/>
                                <Input type="color" id="background" value={lightTheme.background} onChange={handleLightChange} className="w-10 h-10 p-1"/>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <Label htmlFor="border">Border Color</Label>
                            <div className="flex items-center gap-2">
                                <Input id="border" value={lightTheme.border} onChange={handleLightChange} className="w-32"/>
                                <Input type="color" id="border" value={lightTheme.border} onChange={handleLightChange} className="w-10 h-10 p-1"/>
                            </div>
                        </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="dark" className="mt-6">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="primary">Primary Color</Label>
                            <div className="flex items-center gap-2">
                                <Input id="primary" value={darkTheme.primary} onChange={handleDarkChange} className="w-32"/>
                                <Input type="color" id="primary" value={darkTheme.primary} onChange={handleDarkChange} className="w-10 h-10 p-1"/>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <Label htmlFor="accent">Accent Color</Label>
                            <div className="flex items-center gap-2">
                                <Input id="accent" value={darkTheme.accent} onChange={handleDarkChange} className="w-32"/>
                                <Input type="color" id="accent" value={darkTheme.accent} onChange={handleDarkChange} className="w-10 h-10 p-1"/>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <Label htmlFor="background">Background Color</Label>
                            <div className="flex items-center gap-2">
                                <Input id="background" value={darkTheme.background} onChange={handleDarkChange} className="w-32"/>
                                <Input type="color" id="background" value={darkTheme.background} onChange={handleDarkChange} className="w-10 h-10 p-1"/>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <Label htmlFor="border">Border Color</Label>
                            <div className="flex items-center gap-2">
                                <Input id="border" value={darkTheme.border} onChange={handleDarkChange} className="w-32"/>
                                <Input type="color" id="border" value={darkTheme.border} onChange={handleDarkChange} className="w-10 h-10 p-1"/>
                            </div>
                        </div>
                    </div>
                  </TabsContent>
               </Tabs>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Type /> Typography</CardTitle>
                <CardDescription>Customize fonts, weights, and heading colors.</CardDescription>
            </CardHeader>
            <CardContent>
               <Tabs defaultValue="fonts">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="fonts">Fonts</TabsTrigger>
                        <TabsTrigger value="light_colors">Light Colors</TabsTrigger>
                        <TabsTrigger value="dark_colors">Dark Colors</TabsTrigger>
                    </TabsList>

                    <TabsContent value="fonts" className="mt-6 space-y-4">
                         {(Object.keys(fonts) as Array<keyof typeof fonts>).map(key => (
                            <div key={key} className="space-y-2">
                                <Label>
                                    {key === 'body' ? 'Body Font' : `${key.toUpperCase()} Font`}
                                </Label>
                                <div className="grid grid-cols-2 gap-4">
                                    <Select value={fonts[key].family} onValueChange={(value) => handleFontChange(key, 'family', value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a font" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {availableFonts.map(font => (
                                                <SelectItem key={font.value} value={font.value} style={{fontFamily: font.value}}>
                                                    {font.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <Select value={fonts[key].weight} onValueChange={(value) => handleFontChange(key, 'weight', value)} disabled={key === 'body'}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a weight" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {availableWeights.map(weight => (
                                                <SelectItem key={weight.value} value={weight.value} style={{fontWeight: parseInt(weight.value)}}>
                                                    {weight.label} ({weight.value})
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        ))}
                    </TabsContent>

                     <TabsContent value="light_colors" className="mt-6 space-y-4">
                        {(Object.keys(lightTheme).filter(k => k.startsWith('h')) as Array<keyof typeof lightTheme>).map(key => (
                            <div key={key} className="flex items-center justify-between">
                                <Label htmlFor={key}>{key.toUpperCase()} Heading Color</Label>
                                <div className="flex items-center gap-2">
                                    <Input id={key} value={lightTheme[key]} onChange={handleLightChange} className="w-32"/>
                                    <Input type="color" id={key} value={lightTheme[key]} onChange={handleLightChange} className="w-10 h-10 p-1"/>
                                </div>
                            </div>
                        ))}
                    </TabsContent>

                    <TabsContent value="dark_colors" className="mt-6 space-y-4">
                        {(Object.keys(darkTheme).filter(k => k.startsWith('h')) as Array<keyof typeof darkTheme>).map(key => (
                            <div key={key} className="flex items-center justify-between">
                                <Label htmlFor={key}>{key.toUpperCase()} Heading Color</Label>
                                <div className="flex items-center gap-2">
                                    <Input id={key} value={darkTheme[key]} onChange={handleDarkChange} className="w-32"/>
                                    <Input type="color" id={key} value={darkTheme[key]} onChange={handleDarkChange} className="w-10 h-10 p-1"/>
                                </div>
                            </div>
                        ))}
                    </TabsContent>
               </Tabs>
            </CardContent>
        </Card>
      </div>

       <Card className="mt-8">
          <CardHeader>
              <CardTitle>Branding</CardTitle>
              <CardDescription>Update your company logos, favicon, and image loading preferences.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="light_logo">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="light_logo">Light Theme Logo</TabsTrigger>
                    <TabsTrigger value="dark_logo">Dark Theme Logo</TabsTrigger>
                </TabsList>
                <TabsContent value="light_logo" className="mt-6">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <Label className="font-semibold">Logo Type</Label>
                            <RadioGroup value={logoLight.type} onValueChange={(v) => handleLogoTypeChange(v as "svg" | "url", 'light')} className="flex gap-4">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="url" id="url_light" />
                                    <Label htmlFor="url_light" className="flex items-center gap-2"><ImageIcon /> Image Upload</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="svg" id="svg_light" />
                                    <Label htmlFor="svg_light" className="flex items-center gap-2"><Code /> SVG Code</Label>
                                </div>
                            </RadioGroup>
                        </div>
                        {logoLight.type === 'url' ? (
                            <div className="space-y-2">
                                <Label htmlFor="logo_light_img">Logo Image</Label>
                                <Input id="logo_light_img" type="file" onChange={(e) => handleImageUpload(e, 'light')} accept="image/*" />
                                <p className="text-xs text-muted-foreground">Upload an image file for your light theme logo.</p>
                                {imagePreviewLight && <div className="mt-4 p-2 border rounded-md w-32 h-32 flex items-center justify-center bg-muted"><Image src={imagePreviewLight} alt="Light logo preview" width={100} height={100} className="object-contain max-w-full max-h-full" /></div>}
                            </div>
                        ) : (
                            <div className="space-y-2">
                                <Label htmlFor="logo_light_svg">SVG Code</Label>
                                <Textarea id="logo_light_svg" value={logoLight.content} onChange={(e) => handleLogoContentChange(e, 'light')} placeholder='<svg>...</svg>' className="min-h-[120px] font-mono text-xs" />
                                <p className="text-xs text-muted-foreground">Paste the raw SVG code for your light theme logo.</p>
                                {logoLight.content && <div className="mt-4 p-2 border rounded-md w-32 h-32 flex items-center justify-center bg-muted"><div dangerouslySetInnerHTML={{ __html: logoLight.content }} className="h-24 w-24 flex items-center justify-center text-primary [&_svg]:h-24 [&_svg]:w-24" /></div>}
                            </div>
                        )}
                    </div>
                </TabsContent>
                <TabsContent value="dark_logo" className="mt-6">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <Label className="font-semibold">Logo Type</Label>
                            <RadioGroup value={logoDark.type} onValueChange={(v) => handleLogoTypeChange(v as "svg" | "url", 'dark')} className="flex gap-4">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="url" id="url_dark" />
                                    <Label htmlFor="url_dark" className="flex items-center gap-2"><ImageIcon /> Image Upload</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="svg" id="svg_dark" />
                                    <Label htmlFor="svg_dark" className="flex items-center gap-2"><Code /> SVG Code</Label>
                                </div>
                            </RadioGroup>
                        </div>
                        {logoDark.type === 'url' ? (
                            <div className="space-y-2">
                                <Label htmlFor="logo_dark_img">Logo Image</Label>
                                <Input id="logo_dark_img" type="file" onChange={(e) => handleImageUpload(e, 'dark')} accept="image/*" />
                                <p className="text-xs text-muted-foreground">Upload an image file for your dark theme logo.</p>
                                {imagePreviewDark && <div className="mt-4 p-2 border rounded-md w-32 h-32 flex items-center justify-center bg-muted"><Image src={imagePreviewDark} alt="Dark logo preview" width={100} height={100} className="object-contain max-w-full max-h-full" /></div>}
                            </div>
                        ) : (
                            <div className="space-y-2">
                                <Label htmlFor="logo_dark_svg">SVG Code</Label>
                                <Textarea id="logo_dark_svg" value={logoDark.content} onChange={(e) => handleLogoContentChange(e, 'dark')} placeholder='<svg>...</svg>' className="min-h-[120px] font-mono text-xs" />
                                <p className="text-xs text-muted-foreground">Paste the raw SVG code for your dark theme logo.</p>
                                {logoDark.content && <div className="mt-4 p-2 border rounded-md w-32 h-32 flex items-center justify-center bg-muted"><div dangerouslySetInnerHTML={{ __html: logoDark.content }} className="h-24 w-24 flex items-center justify-center text-primary [&_svg]:h-24 [&_svg]:w-24" /></div>}
                            </div>
                        )}
                    </div>
                </TabsContent>
            </Tabs>
             <div className="space-y-8 border-t pt-8 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <Label htmlFor="faviconUrl" className="flex items-center gap-2 font-semibold"><LinkIcon /> Favicon URL</Label>
                        <Input id="faviconUrl" placeholder="https://example.com/favicon.ico" value={faviconUrl} onChange={(e) => setFaviconUrl(e.target.value)} />
                        <p className="text-xs text-muted-foreground">Provide a direct URL to your .ico, .png, or .svg file.</p>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="logoLoading" className="font-semibold">Image Loading Strategy</Label>
                        <Select value={logoLoading} onValueChange={(v) => setLogoLoading(v as 'lazy' | 'eager')}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select loading strategy" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="lazy">Lazy</SelectItem>
                                <SelectItem value="eager">Eager</SelectItem>
                            </SelectContent>
                        </Select>
                        <p className="text-xs text-muted-foreground">&quot;Lazy&quot; loads images as they enter the screen. &quot;Eager&quot; loads them immediately.</p>
                    </div>
                </div>
                 <div className="space-y-4">
                    <Label className="font-semibold text-base">Loading Screen</Label>
                     <div className="flex items-center space-x-2">
                        <Switch id="loading-screen-enabled" checked={loadingScreenEnabled} onCheckedChange={setLoadingScreenEnabled} />
                        <Label htmlFor="loading-screen-enabled">Enable Animated Loading Screen</Label>
                    </div>
                    {loadingScreenEnabled && (
                        <div className="grid grid-cols-2 gap-4 items-center">
                            <Label htmlFor="loading-duration" className="text-right">Duration (ms)</Label>
                            <Input
                                id="loading-duration"
                                type="number"
                                value={loadingScreenDuration}
                                onChange={(e) => setLoadingScreenDuration(parseInt(e.target.value))}
                                className="col-span-1"
                            />
                        </div>
                    )}
                 </div>
            </div>
          </CardContent>
        </Card>


       <Card className="mt-8">
            <CardHeader>
                <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-4">
                    Saving will overwrite the global stylesheet and branding files. This action cannot be undone, so please be certain. You can reset to the default theme if needed.
                </p>
            </CardContent>
            <CardFooter className="gap-4">
                <Button onClick={handleSave} disabled={isSaving}>
                    <Save className="mr-2" /> {isSaving ? "Saving..." : "Save Theme"}
                </Button>
                 <Button variant="outline" onClick={handleReset}>
                    <RefreshCw className="mr-2" /> Reset to Default
                </Button>
            </CardFooter>
        </Card>

    </div>
  );
}

    