import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

// Mock the components to avoid complex dependencies
jest.mock('@/components/layout/header', () => ({
  Header: () => <header>Header</header>,
}));

jest.mock('@/components/sections/hero-section', () => ({
  HeroSection: () => <section>Hero Section</section>,
}));

jest.mock('@/components/sections/realm-section', () => ({
  RealmSection: () => <section>Realm Section</section>,
}));

jest.mock('@/components/sections/projects-section', () => ({
  ProjectsSection: () => <section>Projects Section</section>,
}));

jest.mock('@/components/sections/team-section', () => ({
  TeamSection: () => <section>Team Section</section>,
}));

jest.mock('@/components/sections/tech-stack-section', () => ({
  TechStackSection: () => <section>Tech Stack Section</section>,
}));

jest.mock('@/components/sections/testimonials-section', () => ({
  TestimonialsSection: () => <section>Testimonials Section</section>,
}));

jest.mock('@/components/sections/partners-section', () => ({
  PartnersSection: () => <section>Partners Section</section>,
}));

jest.mock('@/components/sections/contact-section', () => ({
  ContactSection: () => <section>Contact Section</section>,
}));

jest.mock('@/components/layout/footer', () => ({
  Footer: () => <footer>Footer</footer>,
}));

describe('Home Page', () => {
  it('renders without crashing', () => {
    render(<Home />);
    expect(screen.getByText('Header')).toBeInTheDocument();
  });

  it('renders all main sections', () => {
    render(<Home />);
    
    expect(screen.getByText('Hero Section')).toBeInTheDocument();
    expect(screen.getByText('Realm Section')).toBeInTheDocument();
    expect(screen.getByText('Projects Section')).toBeInTheDocument();
    expect(screen.getByText('Team Section')).toBeInTheDocument();
    expect(screen.getByText('Tech Stack Section')).toBeInTheDocument();
    expect(screen.getByText('Partners Section')).toBeInTheDocument();
    expect(screen.getByText('Testimonials Section')).toBeInTheDocument();
    expect(screen.getByText('Contact Section')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});
