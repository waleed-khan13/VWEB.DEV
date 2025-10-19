# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.
- **Styling**: Tailwind CSS 3.4.1
- **UI Components**: Radix UI
- **Animations**: Framer Motion 11.5.7
- **Forms**: React Hook Form + Zod validation

### Backend & Services
- **Backend**: Firebase 11.9.1
- **Authentication**: Firebase Auth
- **Database**: Firestore

### Development Tools
- **Testing**: Jest + React Testing Library
- **Linting**: ESLint
- **Formatting**: Prettier
- **Type Checking**: TypeScript 5

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/waleed-khan13/VWEB.DEV.git
cd VWEB.DEV
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**

Copy `.env.example` to `.env.local` and fill in your Firebase credentials:

```bash
cp .env.example .env.local
```

Required environment variables:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_SITE_URL=https://vweb.dev
```

4. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) in your browser.

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server on port 9002
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run typecheck    # Type checking with TypeScript
npm run format       # Format code with Prettier
npm run format:check # Check code formatting

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage

# Analysis
npm run analyze      # Analyze bundle size
```

## 📁 Project Structure

```
VWEB.DEV/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   ├── error.tsx        # Error boundary
│   │   ├── loading.tsx      # Loading state
│   │   ├── sitemap.ts       # Dynamic sitemap
│   │   └── ...              # Other pages
│   ├── components/          # React components
│   │   ├── layout/          # Layout components
│   │   ├── sections/        # Page sections
│   │   └── ui/              # UI components
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   └── context/             # React context providers
├── public/                  # Static files
│   ├── robots.txt           # SEO robots file
│   └── site.webmanifest     # PWA manifest
├── __tests__/               # Test files
├── .env.local               # Environment variables (not in git)
├── .env.example             # Environment variables template
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── jest.config.ts           # Jest configuration
├── .prettierrc              # Prettier configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Features Overview

### Performance Optimizations
- ✅ Incremental Static Regeneration (ISR)
- ✅ Optimized font loading with next/font
- ✅ Image optimization with next/image
- ✅ Code splitting and lazy loading
- ✅ Production-ready build configuration

### SEO & Analytics
- ✅ Complete metadata (Open Graph, Twitter Cards)
- ✅ Dynamic sitemap generation
- ✅ robots.txt configuration
- ✅ Structured data ready
- ✅ PWA manifest

### Developer Experience
- ✅ TypeScript for type safety
- ✅ ESLint for code linting
- ✅ Prettier for code formatting
- ✅ Jest + Testing Library for testing
- ✅ Error boundaries for graceful error handling
- ✅ Loading states for better UX

## 🧪 Testing

Write tests in the `src/__tests__` directory or co-locate them with components.

Example test:
```typescript
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home Page', () => {
  it('renders without crashing', () => {
    render(<Home />);
    expect(screen.getByText('Header')).toBeInTheDocument();
  });
});
```

Run tests:
```bash
npm run test           # Run all tests
npm run test:watch     # Watch mode
npm run test:coverage  # With coverage report
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

### Other Platforms

- **Netlify**: Similar to Vercel
- **Firebase Hosting**: Already configured with `firebase.json`
- **Docker**: Build and run with Docker

Build command:
```bash
npm run build
```

Start command:
```bash
npm run start
```

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase API Key | ✅ |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase Auth Domain | ✅ |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase Project ID | ✅ |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Firebase Storage Bucket | ✅ |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Firebase Sender ID | ✅ |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Firebase App ID | ✅ |
| `NEXT_PUBLIC_SITE_URL` | Production URL | ✅ |
| `NEXT_PUBLIC_SITE_NAME` | Site Name | ✅ |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics ID | ❌ |

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure:
- ✅ Code passes all tests (`npm run test`)
- ✅ Code is properly formatted (`npm run format`)
- ✅ No TypeScript errors (`npm run typecheck`)
- ✅ No ESLint errors (`npm run lint`)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

Built with ❤️ by the VWEB.DEV Team

## 📧 Contact

- Website: [https://vweb.dev](https://vweb.dev)
- GitHub: [@waleed-khan13](https://github.com/waleed-khan13)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Radix UI](https://www.radix-ui.com/) - Accessible components
- [Firebase](https://firebase.google.com/) - Backend services
- [Framer Motion](https://www.framer.com/motion/) - Animation library

---

Made with 💻 and ☕ by VWEB.DEV


## 🔐 Admin Panel Security

The admin panel is protected with Firebase Authentication. Only authenticated users with the 'admin' role can access it.

**Quick Setup:**
1. See [SECURITY_SETUP.md](SECURITY_SETUP.md) for complete guide
2. Create admin user in Firebase Authentication
3. Set user role to 'admin' in Firestore
4. Login at `/login` page

**Admin Routes:**
- `/login` - Admin login page
- `/admin` - Admin dashboard (protected)
- All `/admin/*` routes require authentication

---

