export type ProductCardData = {
  id: string;
  name: string;
  tagline: string;
  description?: string;
  image: {
    src: string;
    alt: string;
    aspect?: "16x9" | "5x2";
  };
  badge?: "Live" | "Testnet" | "New";
  cta: { label: string; href: string };
  secondary?: { label: string; href: string };
};

