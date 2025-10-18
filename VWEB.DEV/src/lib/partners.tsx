
export type Partner = {
  id: string;
  name: string;
  logo: {
    type: 'svg' | 'url';
    content: string;
  };
};

export const partnersData: Partner[] = [
  {
    id: "partner-aster",
    name: "ASTER",
    logo: {
      type: "svg",
      content: `<svg fill="currentColor" viewBox="0 0 24 24"><text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="8" fontWeight="bold">ASTER</text></svg>`
    }
  },
  {
    id: "partner-monday",
    name: "Monday.com",
    logo: {
      type: "svg",
      content: `<svg role="img" viewBox="0 0 24 24" fill="currentColor"><title>monday.com</title><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6S6.698 2.4 12 2.4s9.6 4.298 9.6 9.6-4.298 9.6-9.6 9.6zM6 8.4h3.6v7.2H6V8.4zm4.2-2.4h3.6v12h-3.6V6zm4.2 3h3.6v6h-3.6v-6z" /></svg>`
    }
  },
  {
    id: "partner-shopify",
    name: "Shopify",
    logo: {
      type: "svg",
      content: `<svg role="img" viewBox="0 0 24 24" fill="currentColor"><title>Shopify</title><path d="M18.06,12.26a4.57,4.57,0,0,0-2.19-2.25l-.23-.1-3.44-1.53a1,1,0,0,0-.79,0L8,10.05a3.86,3.86,0,0,0-2,.7,3.53,3.53,0,0,0-1.1,2.5,4.3,4.3,0,0,0,.1,1l0,.06.1.25.1.26.12.26.14.25.15.24.18.25.2.24.21.23.23.23.25.22.26.21.28.2.29.18.31.17.32.16.34.14.35.13.36.11.37.1.38,0h0a2.84,2.84,0,0,0,1.36.75,5.1,5.1,0,0,0,2.1.26,3.63,3.63,0,0,0,2.4-.7,3.6,3.6,0,0,0,1.4-2.6.5.5,0,0,1,1,0,4.6,4.6,0,0,1-1.8,3.5,4.6,4.6,0,0,1-3.3,1,6.1,6.1,0,0,1-2.9-.5,3.92,3.92,0,0,1-2.9-3.8,3.33,3.33,0,0,1,1.1-2.6,3.67,3.67,0,0,1,2.7-1.3,1.31,1.31,0,0,1,.4.1l3.5,1.5a.36.36,0,0,1,.1.1,3.58,3.58,0,0,1,2,2.2.5.5,0,0,1-.5.6h0a.5.5,0,0,1-.5-.4Z M14.67,5.17a.5.5,0,0,0,.5-.5,4.42,4.42,0,0,0-8.34,0,.5.5,0,0,0,.5.5Z" /></svg>`
    }
  },
  {
    id: "partner-wix",
    name: "Wix",
    logo: {
      type: "svg",
      content: `<svg role="img" viewBox="0 0 24 24" fill="currentColor"><title>Wix</title><path d="m13.25 2.1-4.3 8.35-4.3-8.35H0l6.62 12.3L0 21.9h4.65l4.3-8.45 4.3 8.45H24l-6.5-9.6L24 2.1z" /></svg>`
    }
  },
  {
    id: "partner-ecwid",
    name: "Ecwid",
    logo: {
      type: "svg",
      content: `<svg role="img" viewBox="0 0 24 24" fill="currentColor"><title>Ecwid</title><path d="M12 2.4A9.6 9.6 0 0 0 2.4 12a9.6 9.6 0 0 0 9.6 9.6 9.6 9.6 0 0 0 9.6-9.6A9.6 9.6 0 0 0 12 2.4zM12 0a12 12 0 1 1-12 12A12 12 0 0 1 12 0zm-3 5.4h6v2.1h-6V5.4zm0 4.5h6v2.1h-6V9.9zm0 4.5h6v2.1h-6v-2.1z" /></svg>`
    }
  },
  {
    id: "partner-kommo",
    name: "Kommo",
    logo: {
      type: "svg",
      content: `<svg role="img" viewBox="0 0 24 24" fill="currentColor"><title>Kommo</title><path d="M12 0c-3.13 0-6.07.9-8.49 2.51l.01.01c-2.4 1.6-4.01 4.2-4.01 7.19 0 4.8 3.51 8.8 8.2 9.5v-2.2c-3.4-.6-6-3.6-6-7.2 0-2.3 1.1-4.31 2.8-5.6l10.9 10.9c1.29-1.7 2.1-3.8 2.1-6 0-4.8-3.5-8.8-8.2-9.5v2.2c3.4.6 6 3.6 6 7.2 0 2.3-1.1 4.3-2.8 5.6L2.5 4.7C4.8 3.1 7.4 2.2 10.2 2.2c3.1 0 6.07.9 8.49 2.51l-.01-.01c2.4 1.6 4.01 4.2 4.01 7.19 0 .1 0 .2-.01.3h2.2c0-.1 0-.2 0-.3C24.49 5.3 18.7 0 12 0z" /></svg>`
    }
  },
  {
    id: "partner-meta",
    name: "Meta",
    logo: {
      type: "svg",
      content: `<svg role="img" viewBox="0 0 24 24" fill="currentColor"><title>Meta</title><path d="M12,0a12,12,0,1,0,12,12A12,12,0,0,0,12,0Zm0,21.6A9.6,9.6,0,1,1,21.6,12,9.6,9.6,0,0,1,12,21.6Zm3.3-6.1a4.2,4.2,0,0,0-1.8-1.8,4.5,4.5,0,0,0-5.1,0,4.2,4.2,0,0,0-1.8,1.8,4.5,4.5,0,0,0,0,5.1,4.2,4.2,0,0,0,1.8,1.8,4.5,4.5,0,0,0,5.1,0,4.2,4.2,0,0,0,1.8-1.8,4.5,4.5,0,0,0,0-5.1Z" /></svg>`
    }
  },
  {
    id: "partner-cloudways",
    name: "Cloudways",
    logo: {
      type: "svg",
      content: `<svg role="img" viewBox="0 0 24 24" fill="currentColor"><title>Cloudways</title><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,21.6A9.6,9.6,0,1,1,21.6,12,9.611,9.611,0,0,1,12,21.6ZM16.8,7.2,12,12l4.8,4.8,2.4-4.8ZM7.2,7.2,4.8,12l2.4,4.8,4.8-4.8Z" /></svg>`
    }
  },
  {
    id: "partner-dashnex",
    name: "DashNex",
    logo: {
      type: "svg",
      content: `<svg fill="currentColor" viewBox="0 0 24 24"><text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="6" fontWeight="bold">DashNex</text></svg>`
    }
  },
  {
    id: "partner-typeform",
    name: "Typeform",
    logo: {
      type: "svg",
      content: `<svg role="img" viewBox="0 0 24 24" fill="currentColor"><title>Typeform</title><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2.4 18V6h2.4v4.8h2.4V6h2.4v12h-2.4v-4.8H9.6v4.8H7.2z" /></svg>`
    }
  },
  {
    id: "partner-kaspersky",
    name: "Kaspersky",
    logo: {
      type: "svg",
      content: `<svg role="img" viewBox="0 0 24 24" fill="currentColor"><title>Kaspersky</title><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm5.4,18L12,14.4,6.6,18,12,3.6ZM6.6,6,12,9.6,17.4,6,12,14.4Z" /></svg>`
    }
  },
  {
    id: "partner-jungleworks",
    name: "JungleWorks",
    logo: {
      type: "svg",
      content: `<svg fill="currentColor" viewBox="0 0 24 24"><text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="5" fontWeight="bold">JungleWorks</text></svg>`
    }
  },
  {
    id: "partner-wati",
    name: "WATI",
    logo: {
      type: "svg",
      content: `<svg fill="currentColor" viewBox="0 0 24 24"><text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="8" fontWeight="bold">WATI</text></svg>`
    }
  },
  {
    id: "partner-codebrew",
    name: "CodeBrew",
    logo: {
      type: "svg",
      content: `<svg fill="currentColor" viewBox="0 0 24 24"><text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="6" fontWeight="bold">CodeBrew</text></svg>`
    }
  },
  {
    id: "partner-odoo",
    name: "Odoo",
    logo: {
      type: "svg",
      content: `<svg role="img" viewBox="0 0 24 24" fill="currentColor"><title>Odoo</title><path d="M11.939 24c-2.316 0-4.38-.63-6.192-1.892-1.812-1.261-3.12-2.92-3.924-4.975C.926 14.896.5 12.632.5 10.156c0-2.73.465-5.174 1.396-7.332C2.828.663 4.41-.03 6.24.004c2.25.045 4.14.9 5.67 2.565 1.53 1.665 2.295 3.825 2.295 6.48 0 2.61-.704 4.755-2.115 6.435-1.41 1.68-3.286 2.52-5.626 2.52-.9 0-1.74-.15-2.52-.45-.78-.3-1.425-.72-1.935-1.26a3.25 3.25 0 0 1-.9-1.215c-.21-.495-.315-1.02-.315-1.575 0-.96.39-1.785 1.17-2.475.78-.69 1.77-1.035 2.97-1.035 1.02 0 1.905.33 2.655.99.75.66 1.125 1.515 1.125 2.565 0 .27-.03.525-.09.765a.96.96 0 0 1-.3.495c-.135.135-.315.203-.54.203-.225 0-.42-.075-.585-.225-.165-.15-.248-.36-.248-.63 0-.48.165-.885.495-1.215.33-.33.72-.495 1.17-.495.66 0 1.215.24 1.665.72.45.48.675 1.095.675 1.845 0 .78-.24 1.455-.72 2.025-.48.57-1.08.975-1.8 1.215s-1.5.36-2.34.36c-1.68 0-3.15-.555-4.41-1.665-1.26-1.11-1.89-2.55-1.89-4.32 0-1.77.63-3.285 1.89-4.545 1.26-1.26 2.73-1.89 4.41-1.89 1.725 0 3.21.645 4.455 1.935 1.245 1.29 1.868 2.85 1.868 4.68 0 2.07-.63 3.84-1.89 5.31-1.26 1.47-2.79 2.475-4.59 3.015-1.8.54-3.615.81-5.445.81z"/></svg>`
    }
  },
  {
    id: "partner-wordpress",
    name: "WordPress",
    logo: {
      type: "svg",
      content: `<svg role="img" viewBox="0 0 24 24" fill="currentColor"><title>WordPress</title><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.22 8.312l-2.174 6.059-3.41-3.65-1.83 3.65-3.66-8.9h2.368l2.45 5.564 1.77-3.41-1.51-4.204h2.463l1.51 4.204 2.4-5.564h2.413z" /></svg>`
    }
  },
  {
    id: "partner-squarespace",
    name: "Squarespace",
    logo: {
      type: "svg",
      content: `<svg role="img" viewBox="0 0 24 24" fill="currentColor"><title>Squarespace</title><path d="M14.4 22.4h-4.8V9.6h4.8v12.8zm-1.2-16a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0zM22.4 1.6H1.6v4.8h20.8V1.6zm-16 14.4H1.6V9.6h4.8v6.4zm16 0h-4.8V9.6h4.8v6.4z" /></svg>`
    }
  },
  {
    id: "partner-mailwizz",
    name: "MailWizz",
    logo: {
      type: "svg",
      content: `<svg fill="currentColor" viewBox="0 0 24 24"><text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="6" fontWeight="bold">MailWizz</text></svg>`
    }
  },
  {
    id: "partner-amniosa",
    name: "Amniosa",
    logo: {
      type: "svg",
      content: `<svg fill="currentColor" viewBox="0 0 24 24"><text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="6" fontWeight="bold">Amniosa</text></svg>`
    }
  },
  {
    id: "partner-zoom",
    name: "Zoom",
    logo: {
      type: "svg",
      content: `<svg role="img" viewBox="0 0 24 24" fill="currentColor"><title>Zoom</title><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6S6.698 2.4 12 2.4s9.6 4.298 9.6 9.6-4.298 9.6-9.6 9.6zM8.4 8.4H12v2.4H8.4V8.4zm4.8 4.8l-2.4 2.4h4.8V8.4H12l2.4 2.4v2.4z" /></svg>`
    }
  },
  {
    id: "partner-teramind",
    name: "Teramind",
    logo: {
      type: "svg",
      content: `<svg fill="currentColor" viewBox="0 0 24 24"><text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="6" fontWeight="bold">Teramind</text></svg>`
    }
  },
];
