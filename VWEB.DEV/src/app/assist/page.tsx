
import { AssistPageClient } from '@/components/layout/assist-page-client';
import { realms } from '@/lib/realms';

export default function AssistPage() {
  const realm = realms.find(p => p.slug === 'assist');
  if (!realm) return null;
  return <AssistPageClient realm={realm} />;
}
