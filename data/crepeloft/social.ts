export interface SocialLink {
  name: string;
  href: string;
  icon: 'facebook' | 'instagram' | 'pinterest';
}

export const socialLinks: SocialLink[] = [
  { name: 'Facebook', href: 'https://facebook.com/crepeloft', icon: 'facebook' },
  { name: 'Instagram', href: 'https://instagram.com/crepeloft', icon: 'instagram' },
  { name: 'Pinterest', href: 'https://pinterest.com/crepeloft', icon: 'pinterest' },
];
