import { IntegratePageClient } from '@/components/layout/integrate-page-client';
import { realms } from '@/lib/realms';

export default function IntegratePage() {
  const realm = realms.find(p => p.slug === 'integrate');
  if (!realm) return null;
  return <IntegratePageClient realm={realm} />;
}
