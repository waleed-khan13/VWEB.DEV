
"use client";

import { useState, useEffect } from 'react';
import { branding } from '@/lib/branding';
import { useLiveBranding } from '@/lib/use-live-branding';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function LoadingScreen() {
    const [loading, setLoading] = useState(true);
    const [fading, setFading] = useState(false);

    const live = useLiveBranding();

    useEffect(() => {
        if (!live.loadingScreenEnabled) {
            setLoading(false);
            return;
        }

        const timer = setTimeout(() => {
            setFading(true);
        }, live.loadingScreenDuration || 1500);

        const fadeTimer = setTimeout(() => {
            setLoading(false);
        }, (live.loadingScreenDuration || 1500) + 1000);

        return () => {
            clearTimeout(timer);
            clearTimeout(fadeTimer);
        };
    }, [live.loadingScreenEnabled, live.loadingScreenDuration]);

    const Logo = () => (
        <>
            <span className="dark:hidden">
                {live.logoLight.type === 'url' ? (
                    <Image src={live.logoLight.content} alt="VWEB.DEV Logo" width={100} height={100} className="h-24 w-auto" loading="eager" priority />
                ) : (
                    <div dangerouslySetInnerHTML={{ __html: live.logoLight.content }} className="h-24 w-24 text-primary [&_svg]:h-24 [&_svg]:w-24" />
                )}
            </span>
            <span className="hidden dark:inline">
                {live.logoDark.type === 'url' ? (
                    <Image src={live.logoDark.content} alt="VWEB.DEV Logo" width={100} height={100} className="h-24 w-auto" loading="eager" priority />
                ) : (
                    <div dangerouslySetInnerHTML={{ __html: live.logoDark.content }} className="h-24 w-24 text-primary [&_svg]:h-24 [&_svg]:w-24" />
                )}
            </span>
        </>
    );

    if (!loading) {
        return null;
    }

    return (
        <div className={cn(
            "fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-1000",
            fading ? "opacity-0" : "opacity-100"
        )}>
            <div className="animate-pulse-slow-glow">
                <Logo />
            </div>
        </div>
    );
}
