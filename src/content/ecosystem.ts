// Content model for CompX ecosystem
export type AppModule = {
  id: 'compx' | 'waypoint' | 'orbital';
  name: string;
  tagline: string;
  route: string;
  metrics?: { label: string; value: string }[];
  schematic: {
    svgPathId: string;
    icon?: string;
  };
  bullets: string[];
};

export type Token = {
  id: 'compx' | 'xusd' | 'calgo';
  name: string;
  role: string;
  color: string;
};

export const APPS: AppModule[] = [
  {
    id: 'compx',
    name: 'CompX',
    tagline: 'Engine core of composable finance',
    route: 'https://app.compx.io',
    metrics: [
      { label: 'TVL', value: '$2.4M' },
      { label: 'Governance Active', value: '1,234' },
      { label: 'Collateralized', value: '$1.8M' },
    ],
    schematic: {
      svgPathId: 'zone-engine',
      icon: '⚡',
    },
    bullets: [
      'Governance power & protocol control',
      'Collateral backbone & yield optimization',
      'xUSD stability mechanism',
    ],
  },
  {
    id: 'waypoint',
    name: 'Waypoint',
    tagline: 'Routes for programmable payments',
    route: 'https://waypoint.compx.io',
    metrics: [
      { label: 'Active Routes', value: '89' },
      { label: 'Avg Fee', value: '0.02%' },
      { label: 'Supported Assets', value: '12' },
    ],
    schematic: {
      svgPathId: 'zone-navigation',
      icon: '🧭',
    },
    bullets: [
      'Milestone-based conditional payments',
      'Multi-user programmable routes',
      'Yield-aware path optimization',
    ],
  },
  {
    id: 'orbital',
    name: 'Orbital',
    tagline: 'Liquidity dock and lending markets',
    route: 'https://orbital.compx.io',
    metrics: [
      { label: 'Total Borrowed', value: '$890K' },
      { label: 'Avg APR', value: '8.2%' },
      { label: 'Markets', value: '6' },
    ],
    schematic: {
      svgPathId: 'zone-docking',
      icon: '🛰️',
    },
    bullets: [
      'Borrow & supply across markets',
      'Protocol-owned buyout mechanisms',
      'Dynamic risk controls & liquidations',
    ],
  },
];

export const TOKENS: Token[] = [
  {
    id: 'compx',
    name: 'COMPX',
    role: 'Command core fuel',
    color: '#7F4AFF', // purple
  },
  {
    id: 'xusd',
    name: 'xUSD',
    role: 'Stabilization coolant',
    color: '#00F5C0', // teal
  },
  {
    id: 'calgo',
    name: 'cALGO',
    role: 'Yield reactor output',
    color: '#F9A826', // bronze
  },
];

// Governance link
export const GOVERNANCE_LINK = 'https://app.compx.io/governance';

// External links
export const EXTERNAL_LINKS = {
  docs: 'https://docs.compx.io',
  twitter: 'https://twitter.com/compxdao',
  discord: 'https://discord.gg/compx',
  github: 'https://github.com/compx-labs',
};

