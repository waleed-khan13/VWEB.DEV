
export type TeamMember = {
  id: string;
  name: string;
  title: string;
  imageId: string;
  category: 'Executive Team' | 'Department Heads' | 'Team Leads' | 'Team' | 'Freelancers' | 'Interns';
  location?: string;
};

export const teamData: TeamMember[] = [
  {
    id: "member-1",
    name: "Zeeshan Ali Raza",
    title: "Founder/Director",
    imageId: "team-2",
    category: "Executive Team",
  },
  {
    id: "member-13",
    name: "Danyal Raza",
    title: "Chief Executive Officer (CEO)",
    imageId: "team-1",
    category: "Executive Team",
  },
  {
    id: "member-14",
    name: "Aimen Fatima",
    title: "Chief Operating Officer (COO)",
    imageId: "team-3",
    category: "Executive Team",
  },
   {
    id: "member-15",
    name: "Saad Bin Younas",
    title: "Chief Technology Officer (CTO)",
    imageId: "team-4",
    category: "Executive Team",
  },
  {
    id: "member-16",
    name: "Numan Akram",
    title: "Chief Global Strategist (USA)",
    imageId: "team-2",
    category: "Executive Team",
    location: "USA",
  },
   {
    id: "member-17",
    name: "Shamia Bakht",
    title: "Chief Global Strategist (UK)",
    imageId: "team-4",
    category: "Executive Team",
    location: "UK",
  },
  {
    id: "member-18",
    name: "Waleed Sarfraz",
    title: "Chief Global Strategist (PK)",
    imageId: "team-1",
    category: "Executive Team",
    location: "PK",
  },
  {
    id: "member-2",
    name: "Samantha Ray",
    title: "Head of Design",
    imageId: "team-3",
    category: "Department Heads",
  },
  {
    id: "member-6",
    name: "Ben Carter",
    title: "Head of Engineering",
    imageId: "team-4",
    category: "Department Heads",
  },
  {
    id: "member-4",
    name: "Maria Garcia",
    title: "Head of Marketing",
    imageId: "team-2",
    category: "Department Heads",
  },
  {
    id: "member-3",
    name: "David Chen",
    title: "Project Manager",
    imageId: "team-1",
    category: "Team Leads",
  },
  {
    id: "member-5",
    name: "Alex Johnson",
    title: "Lead Developer",
    imageId: "team-3",
    category: "Team Leads",
  },
  {
    id: "member-7",
    name: "Chloe Wilson",
    title: "Senior UX Designer",
    imageId: "team-4",
    category: "Team",
  },
  {
    id: "member-8",
    name: "James Lee",
    title: "DevOps Engineer",
    imageId: "team-1",
    category: "Team",
  },
  {
    id: "member-9",
    name: "Liam O'Connor",
    title: "Copywriter",
    imageId: "team-2",
    category: "Freelancers",
  },
  {
    id: "member-10",
    name: "Sophie Dubois",
    title: "UI Animation Specialist",
    imageId: "team-3",
    category: "Freelancers",
  },
  {
    id: "member-11",
    name: "Nia Adebayo",
    title: "Frontend Development Intern",
    imageId: "team-4",
    category: "Interns",
  },
    {
    id: "member-12",
    name: "Kenji Tanaka",
    title: "Marketing Analytics Intern",
    imageId: "team-1",
    category: "Interns",
  },
];
