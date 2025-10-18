
import data from './branding.json';

export type Logo = {
    type: 'svg' | 'url' | 'none';
    content: string;
};

export type Branding = {
    logoLight: Logo;
    logoDark: Logo;
    faviconUrl?: string;
    logoLoading?: 'lazy' | 'eager';
    loadingScreenEnabled?: boolean;
    loadingScreenDuration?: number;
}

export const branding: Branding = data as Branding;
