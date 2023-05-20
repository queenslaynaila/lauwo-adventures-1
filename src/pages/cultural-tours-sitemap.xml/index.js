import { getServerSideSitemapLegacy } from 'next-sitemap';
import { generateSlug } from '@/utils/generateSlug';
export const getServerSideProps = async (ctx) => {
  const culturalTours = await fetch(
    'https://lauwo-adventures-api.onrender.com/cultural_tours'
  ).then((res) => res.json());

  const culturalTourSitemaps = culturalTours.map((item) => ({
    loc: `https://lauwo-adventures-client.vercel.app/cultural-tours/${generateSlug(
      item.name
    )}`,
    lastmod: new Date().toISOString(),
  }));

  const fields = [...culturalTourSitemaps];

  return getServerSideSitemapLegacy(ctx, fields);
};

export default function Site() {}
