import type { ProductCardData } from '../types';

export const PRODUCTS: ProductCardData[] = [
  {
    id: "core",
    name: "CompX Core",
    tagline: "Your DeFi command center.",
    description: "Your gateway to decentralized finance on Algorand. Swap tokens, earn from liquidity farms and staking pools, mint xUSD stablecoin, collect X-NFTs, and participate in governance to shape the future of DeFi.",
    image: { src: "/img/core-hero.png", alt: "CompX Core dashboard", aspect: "16x9" },
    badge: "Live",
    cta: { label: "Launch Core", href: "https://app.compx.io" },
    secondary: { label: "Learn more", href: "/docs/core" }
  },
  {
    id: "waypoint",
    name: "Waypoint",
    tagline: "Programmable payments on Algorand and Aptos.",
    description: "Your route through stablecoin payments. Route funds continuously across multiple blockchains with transparent schedules and simple, intuitive controls.",
    image: { src: "/img/waypoint-hero.png", alt: "Waypoint routes overview", aspect: "16x9" },
    badge: "Live",
    cta: { label: "Start a Route", href: "https://waypoint.compx.io/" }
  },
  {
    id: "orbital",
    name: "Orbital Lending",
    tagline: "Borrow against LSTs. Transparent, capital-efficient.",
    description: "Decentralized lending protocol on Algorand. Supply assets, borrow funds, and trade debt positions.",
    image: { src: "/img/orbital-hero.png", alt: "Orbital markets UI", aspect: "16x9" },
    badge: "Live",
    cta: { label: "Open Orbital", href: "https://orbital.compx.io/" },
    secondary: { label: "Read docs", href: "/docs/orbital" }
  },
  {
    id: "canix",
    name: "Canix",
    tagline: "Hunt down the best yields on Algorand.",
    description: "Your gateway to the best DeFi yields. Hunt for optimal returns across multiple platforms. Track yields, compare platforms, and maximize your crypto earnings with real-time data.",
    image: { src: "/img/canix-hero.png", alt: "Canix trading interface", aspect: "16x9" },
    badge: "New",
    cta: { label: "Launch Canix", href: "https://canix.compx.io/" }
  },
  {
    id: "cairn",
    name: "Cairn",
    tagline: "Transparency dashboards for Web3 teams and founders",
    description: "Track project treasuries, see incomings and outgoings, and get a clear view of your project's financial health.",
    image: { src: "/img/cairn-hero.png", alt: "Cairn portfolio dashboard", aspect: "16x9" },
    cta: { label: "View the demo", href: "https://cairn.live/" }
  },
  {
    id: "haven",
    name: "Haven",
    tagline: "Easy xUSD based savings account.",
    description: "Easy xUSD based savings account. Deposit xUSD, earn interest, and withdraw anytime. No lock-ups, no fees, no hassle.",
    image: { src: "/img/haven-hero.png", alt: "Haven security interface", aspect: "16x9" },
    cta: { label: "Sign up for the waitlist", href: "https://haven.compx.io/" }
  }
];

