import React from 'react';
import { useActiveSection, Section } from '../hooks/useActiveSection';

interface ProgressNavProps {
  sections: Section[];
}

const ProgressNav: React.FC<ProgressNavProps> = ({ sections }) => {
  const { activeSection, scrollToSection } = useActiveSection(sections);

  return (
    <nav 
      className="fixed right-0 top-0 bottom-0 z-40 hidden lg:flex flex-col justify-center bg-black/80 backdrop-blur-sm border-l border-white/10"
      aria-label="Section navigation"
    >
      <ul className="flex flex-col gap-8 py-8 px-6">
        {sections.map((section, index) => {
          const isActive = activeSection === section.id;
          return (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className="group relative flex items-center gap-4"
                aria-label={`Go to ${section.name}`}
                aria-current={isActive ? 'true' : 'false'}
              >
                {/* Square indicator */}
                <div className="relative flex items-center justify-center">
                  <div
                    className={`
                      w-3 h-3 transition-all duration-300
                      ${isActive 
                        ? 'bg-compx-purple scale-125' 
                        : 'bg-white/30 group-hover:bg-compx-purple/70 group-hover:scale-110'
                      }
                    `}
                  />
                  {/* Glow effect when active */}
                  {isActive && (
                    <div className="absolute inset-0 bg-compx-purple/40 blur-lg animate-pulse" />
                  )}
                </div>

                {/* Label (appears on hover) */}
                <span
                  className={`
                    absolute right-full mr-6 px-3 py-1 rounded-md text-sm font-medium whitespace-nowrap
                    opacity-0 group-hover:opacity-100 transition-opacity duration-200
                    glass border border-white/20
                    ${isActive ? 'text-compx-purple' : 'text-white/80'}
                  `}
                >
                  {section.name}
                </span>

                {/* Section number */}
                <span
                  className={`
                    text-lg font-bold font-mono transition-colors duration-200
                    ${isActive ? 'text-compx-purple' : 'text-white/40 group-hover:text-white/70'}
                  `}
                >
                  0{index + 1}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default ProgressNav;

