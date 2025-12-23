export interface CrepeItem {
  id: string;
  name: string;
  image: string;
  alt: string;
}

export const signatureCrepes: CrepeItem[] = [
  {
    id: 'chocolate-strawberry',
    name: 'Chocolate Strawberry',
    image: '/static/images/crepes/crepe-1.jpg',
    alt: 'Chocolate crepe with fresh strawberries and whipped cream',
  },
  {
    id: 'nutella-banana',
    name: 'Nutella Banana',
    image: '/static/images/crepes/crepe-2.jpg',
    alt: 'Nutella crepe with sliced bananas and chocolate drizzle',
  },
  {
    id: 'berry-bliss',
    name: 'Berry Bliss',
    image: '/static/images/crepes/crepe-3.jpg',
    alt: 'Mixed berry crepe with powdered sugar and cream',
  },
];
