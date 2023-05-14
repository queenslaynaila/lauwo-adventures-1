import { getServerSideSitemapLegacy } from 'next-sitemap';
import { generateSlug } from '@/utils/generateSlug';

export const getServerSideProps = async (ctx) => {
  const mountains = await fetch('http://localhost:3000/mountains').then((res) =>
    res.json()
  );

  const mountainSitemaps = mountains.map((item) => ({
    loc: `${process.env.NEXT_PUBLIC_DOMAIN_URL}mountain-trekking/${generateSlug(
      item.mountain_name
    )}`,
    lastmod: new Date().toISOString(),
  }));

  const fields = [...mountainSitemaps];

  return getServerSideSitemapLegacy(ctx, fields);
};

export default function Site() {}
