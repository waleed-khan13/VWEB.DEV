import { SupportPageClient } from '@/components/layout/support-page-client';
import { realms } from '@/lib/realms';

export default function SupportPage() {
  const realm = realms.find(p => p.slug === 'support');
  if (!realm) return null;
  return <SupportPageClient realm={realm} />;
}
