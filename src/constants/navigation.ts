export interface NavigationItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  name: string;
  href: string;
}

// Header Navigation
export const HEADER_NAVIGATION: NavigationItem[] = [
  { label: 'Trade', href: '/trade', active: true },
  { label: 'Explore', href: '/explore' },
  { label: 'Pool', href: '/pool' },
];

// Footer Sections
export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Products',
    links: [
      { label: 'Wallet', href: '/wallet' },
      { label: 'SwapForm', href: '/swap' },
      { label: 'API', href: '/api' },
      { label: 'Analytics', href: '/analytics' },
    ],
  },
  {
    title: 'Protocol',
    links: [
      { label: 'Vote', href: '/vote' },
      { label: 'Governance', href: '/governance' },
      { label: 'Developers', href: '/developers' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
      { label: 'Brand assets', href: '/brand' },
    ],
  },
  {
    title: 'Need help?',
    links: [
      { label: 'Help center', href: '/help' },
      { label: 'Contact us', href: '/contact' },
    ],
  },
];

// Social Links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Twitter',
    href: '#',
  },
  {
    name: 'Discord',
    href: '#',
  },
  {
    name: 'GitHub',
    href: '#',
  },
];

// Brand Information
export const BRAND_INFO = {
  name: 'SwapForm',
  description: 'The leading decentralized trading protocol, governed by a global community.',
};
