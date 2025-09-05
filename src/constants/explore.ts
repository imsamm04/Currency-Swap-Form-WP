export interface ExploreLink {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export const EXPLORE_LINKS: ExploreLink[] = [
  {
    id: 'help',
    title: 'Help Center',
    description: 'Browse FAQs and get support from our team',
    icon: '🎓',
    href: '/help'
  },
  {
    id: 'blog',
    title: 'Blog',
    description: 'Catch up on the latest news, features and updates',
    icon: '✏️',
    href: '/blog'
  },
  {
    id: 'docs',
    title: 'Documentation',
    description: 'Explore our developer docs to get started building',
    icon: '📚',
    href: '/docs'
  },
  {
    id: 'community',
    title: 'Community',
    description: 'Join our community on Discord, Twitter, and Telegram',
    icon: '💬',
    href: '/community'
  }
];
