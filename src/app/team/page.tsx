
import { TeamPageClient } from "@/components/layout/team-page-client";

export default function TeamPage() {
  // Find a realm to use as a template, or create a specific object for the team page.
  const teamRealm = {
      title: "Meet the Creative Command",
      subheading: "The talented individuals driving our success.",
  }
  return <TeamPageClient realm={teamRealm} />;
}
