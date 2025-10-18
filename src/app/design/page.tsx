import { DesignPageClient } from '@/components/layout/design-page-client';
import { realms } from '@/lib/realms';

export default function DesignPage() {
  const realm = realms.find(p => p.slug === 'design');
  if (!realm) return null;
  return <DesignPageClient realm={realm} />;
}
