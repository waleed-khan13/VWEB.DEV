
import { MarketplacePageClient } from '@/components/layout/marketplace-page-client';
import { realms } from '@/lib/realms';

export default function MarketplacePage() {
  const realm = realms.find(p => p.slug === 'marketplace');
  if (!realm) return null;
  return <MarketplacePageClient realm={realm} />;
}
