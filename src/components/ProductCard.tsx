import type { ProductCardData } from '../types';

interface ProductCardProps {
  product: ProductCardData;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article
      className="group relative flex flex-col h-full rounded-2xl border border-white/10 md:bg-transparent bg-white/5 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.06)] overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12)]"
      role="group"
      aria-labelledby={`card-${product.id}-title`}
    >
      {/* Image with Overlay (Desktop) */}
      <div className="relative hidden md:block h-full">
        <img
          src={product.image.src}
          alt={product.image.alt}
          loading="lazy"
          decoding="async"
          className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
        />
        
        {/* Badge */}
        {product.badge && (
          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full backdrop-blur-sm text-white text-xs font-medium tracking-wide uppercase ${
            product.badge === "Testnet" 
              ? "bg-blue-500/90" 
              : product.badge === "Live"
              ? "bg-pink-500/90"
              : "bg-pink-500/90"
          }`}>
            {product.badge}
          </div>
        )}

        {/* Content Overlay - Desktop Only */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent backdrop-blur-md p-6">
          <h3
            id={`card-${product.id}-title`}
            className="text-2xl font-semibold tracking-tight text-white mb-2"
          >
            {product.name}
          </h3>
          
          <p className="text-base text-white/90 font-medium mb-2">
            {product.tagline}
          </p>
          
          {product.description && (
            <p className="text-sm text-white/70 mb-4 leading-relaxed">
              {product.description}
            </p>
          )}

          {/* CTA */}
          <a
            href={product.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-pink-500 to-pink-600 text-white font-medium text-sm transition-all duration-200 hover:from-pink-600 hover:to-pink-700 hover:shadow-lg hover:shadow-pink-500/25 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-black/90"
          >
            {product.cta.label}
          </a>
        </div>
      </div>

      {/* Traditional Layout (Mobile) */}
      <div className="md:hidden flex flex-col h-full">
        <div className="relative flex-shrink-0 overflow-hidden bg-gradient-to-br from-white/5 to-white/0">
          <img
            src={product.image.src}
            alt={product.image.alt}
            loading="lazy"
            decoding="async"
            className="w-full h-auto"
          />
          {product.badge && (
            <div className={`absolute top-4 right-4 px-3 py-1 rounded-full backdrop-blur-sm text-white text-xs font-medium tracking-wide uppercase ${
              product.badge === "Testnet" 
                ? "bg-blue-500/90" 
                : product.badge === "Live"
                ? "bg-pink-500/90"
                : "bg-pink-500/90"
            }`}>
              {product.badge}
            </div>
          )}
        </div>

        <div className="flex flex-col flex-1 p-5">
          <h3
            className="text-xl font-semibold tracking-tight text-white mb-2"
          >
            {product.name}
          </h3>
          
          <p className="text-sm text-white/90 font-medium mb-2">
            {product.tagline}
          </p>
          
          {product.description && (
            <p className="text-xs text-white/60 mb-4 leading-relaxed">
              {product.description}
            </p>
          )}

          <div className="mt-auto">
            <a
              href={product.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-pink-500 to-pink-600 text-white font-medium text-sm transition-all duration-200 hover:from-pink-600 hover:to-pink-700 hover:shadow-lg hover:shadow-pink-500/25 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-[#0b0e13]"
            >
              {product.cta.label}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

