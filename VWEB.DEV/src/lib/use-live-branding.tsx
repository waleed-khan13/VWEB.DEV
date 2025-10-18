"use client";

import { useEffect, useState } from 'react';
import { branding as defaultBranding, Branding } from './branding';

export function useLiveBranding(): Branding {
  const [brand, setBrand] = useState<Branding>(defaultBranding);

  useEffect(() => {
    let mounted = true;
    fetch('/branding.json')
      .then((r) => {
        if (!r.ok) return null;
        return r.json();
      })
      .then((data) => {
        if (mounted && data) setBrand(data as Branding);
      })
      .catch(() => {
        // ignore
      });
    return () => {
      mounted = false;
    };
  }, []);

  return brand;
}
