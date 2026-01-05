import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export const Roadmap = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState('');

  useEffect(() => {
    // Try importing as raw text first (Vite supports ?raw)
    import('../data/roadmap.md?raw')
      .then((module) => setContent(module.default))
      .catch(() => {
        // Fallback: fetch from public folder
        fetch('/roadmap.md')
          .then((res) => res.text())
          .then((text) => setContent(text))
          .catch((err) => {
            console.error('Failed to load roadmap:', err);
          });
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0e13] to-[#141821]">
      {/* Header */}
      <header className="w-full py-6 md:py-8 flex justify-center border-b border-white/10">
        <div className="flex items-center justify-between w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            aria-label="Back to home"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm md:text-base">Back</span>
          </button>
          <img 
            src="/compx-large.png" 
            alt="CompX Logo" 
            className="h-12 md:h-16 w-auto"
          />
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>
      </header>

      {/* Blog Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-4xl md:text-5xl font-semibold text-white mb-8 mt-12 first:mt-0 font-mono" style={{ fontFamily: "'Space Mono', monospace" }}>
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl md:text-3xl font-semibold text-white mt-12 mb-6 border-b border-white/10 pb-3">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl md:text-2xl font-semibold text-pink-500 mt-8 mb-4">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-white/80 leading-7 mb-6 text-base md:text-lg">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc text-white/80 mb-6 space-y-3 ml-6 md:ml-8">
                  {children}
                </ul>
              ),
              li: ({ children }) => (
                <li className="text-base md:text-lg leading-7 pl-2">
                  {children}
                </li>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-white">
                  {children}
                </strong>
              ),
              em: ({ children }) => (
                <em className="italic text-white/90">
                  {children}
                </em>
              ),
              hr: () => (
                <hr className="my-8 border-white/10" />
              ),
              code: ({ children }) => (
                <code className="px-2 py-1 bg-white/10 rounded text-pink-400 text-sm font-mono">
                  {children}
                </code>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
};

