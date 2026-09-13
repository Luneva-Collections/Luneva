export const products = [
  {
    id: 'luneva-cloud',
    sku: 'LUNEVA-32OZ-CLOUD',
    name: 'LUNÉVA 32oz — Cloud',
    colour: 'Cloud',
    description: 'A beautifully balanced, double-wall insulated bottle in a soft, light neutral finish.',
    priceCents: 5995,
    image: '/images/luneva-held-white.jpg',
  },
  {
    id: 'luneva-oat',
    sku: 'LUNEVA-32OZ-OAT',
    name: 'LUNÉVA 32oz — Oat',
    colour: 'Oat',
    description: 'A warm neutral inspired by sunlit stone, quiet interiors, and an unhurried pace.',
    priceCents: 5995,
    image: '/images/luneva-rock-oat.jpg',
  },
  {
    id: 'luneva-noir',
    sku: 'LUNEVA-32OZ-NOIR',
    name: 'LUNÉVA 32oz — Noir',
    colour: 'Noir',
    description: 'A deep matte black finish for a bottle that keeps pace anywhere life takes you.',
    priceCents: 5995,
    image: '/images/luneva-desk-black.jpg',
  },
];

export function findProduct(productId) {
  return products.find((p) => p.id === productId) || null;
}

export function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2)}`;
}
