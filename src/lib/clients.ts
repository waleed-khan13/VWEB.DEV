
export type Client = {
  id: string;
  name: string;
  logo: {
    type: 'svg' | 'url';
    content: string;
  };
};

export const clientsData: Client[] = [
  {
    id: "client-1",
    name: "Innovate Inc.",
    logo: {
      type: "svg",
      content: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-2h2v2h-2zm0-4v-6h2v6h-2z"/></svg>`
    }
  },
  {
    id: "client-2",
    name: "TechForward",
    logo: {
      type: "svg",
      content: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H9v-2h6v2zm3-4H6v-2h12v2zm0-4H6V8h12v2z"/></svg>`
    }
  },
  {
    id: "client-3",
    name: "NextGen Apps",
    logo: {
      type: "svg",
      content: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6h-1.5v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"/></svg>`
    }
  },
  {
    id: "client-4",
    name: "Creative Co.",
    logo: {
      type: "svg",
      content: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M22 2H2v20h20V2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"/></svg>`
    }
  },
    {
    id: "client-5",
    name: "Quantum Leap",
    logo: {
      type: "svg",
      content: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.09-4-4L2 16.99z"/></svg>`
    }
  },
   {
    id: "client-6",
    name: "Apex Solutions",
    logo: {
      type: "svg",
      content: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"/></svg>`
    }
  }
];
