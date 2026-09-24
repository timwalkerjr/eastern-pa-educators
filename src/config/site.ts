export const SITE = {
  name: 'Eastern PA Educators',
  title: 'CPR & First Aid Training in Pennsylvania | Eastern PA Educators',
  description: 'Our certified CPR & first aid instructors offer custom first aid training programs to fit your needs. For safety courses & classes, call our teachers today!',
  phone: '484-334-3577',
  email: 'jemes@kresecurity.com',
  trainingAddress: '16600 Pottsville Pike, Hamburg, PA 19526',
  mainOfficeAddress: '301 Chris Drive, Lenhartsville, PA 19534',
  lang: 'en',
  url:
    (typeof process !== 'undefined' && process.env.SITE_URL) ||
    'https://www.easternpaeducators.com',
  socials: {},
} as const;

export type SiteConfig = typeof SITE;
