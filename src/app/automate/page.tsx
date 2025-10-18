import { AutomatePageClient } from '@/components/layout/automate-page-client';
import { realms } from '@/lib/realms';

export default function AutomatePage() {
  const realm = realms.find(p => p.slug === 'automate');
  if (!realm) return null;
  return <AutomatePageClient realm={realm} />;
}
