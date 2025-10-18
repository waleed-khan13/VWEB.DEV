import { LearnPageClient } from '@/components/layout/learn-page-client';
import { realms } from '@/lib/realms';

export default function LearnPage() {
  const realm = realms.find(p => p.slug === 'learn');
  if (!realm) return null;
  return <LearnPageClient realm={realm} />;
}
