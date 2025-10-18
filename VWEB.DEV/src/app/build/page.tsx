import { realms } from '@/lib/realms';
import { BuildPageClient } from '@/components/layout/build-page-client';

export default function BuildPage() {
  const realm = realms.find(p => p.slug === 'build');
  if (!realm) return null;
  return <BuildPageClient realm={realm} />;
}
