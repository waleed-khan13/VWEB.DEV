import { GrowPageClient } from '@/components/layout/grow-page-client';
import { realms } from '@/lib/realms';

export default function GrowPage() {
  const realm = realms.find(p => p.slug === 'grow');
  if (!realm) return null;
  return <GrowPageClient realm={realm} />;
}
