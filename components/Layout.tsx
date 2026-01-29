
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail, Menu, X, Terminal } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Profile', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <div className="min-h-screen flex flex-col relative selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="sticky top-6 z-50 px-4 mb-8">
        <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-full px-6 py-3 flex justify-between items-center transition-all hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
          <Link to="/" className="text-lg font-bold tracking-tight text-gray-900 hover:text-indigo-600 transition-colors flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            JORDAN SPEIGHT
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-1 items-center bg-gray-100/50 p-1 rounded-full border border-gray-200/50">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-mono px-4 py-1.5 rounded-full transition-all duration-300 ${
                  location.pathname === link.path 
                    ? 'bg-white text-black shadow-sm font-bold' 
                    : 'text-gray-500 hover:text-black hover:bg-gray-200/50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white/90 backdrop-blur-xl border border-white/20 rounded-2xl p-4 flex flex-col gap-2 shadow-xl animate-in fade-in slide-in-from-top-2 z-50">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-mono px-4 py-3 rounded-xl ${
                    location.pathname === link.path ? 'bg-gray-100 text-black font-bold' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 md:px-8 py-8 relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-20 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="font-medium text-sm text-gray-900">
               Jordan Speight — AI Engineer
            </h3>
            <p className="text-xs text-gray-500 max-w-xs text-center md:text-left">
              Focused on the intersection of NLP and deep learning.
            </p>
          </div>
          
          <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-black transition-colors transform hover:scale-110 duration-300">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors transform hover:scale-110 duration-300">
                <Linkedin size={20} />
              </a>
              <a href="mailto:jordanspeight@hotmail.com" className="text-gray-400 hover:text-indigo-600 transition-colors transform hover:scale-110 duration-300">
                <Mail size={20} />
              </a>
            </div>

          <div className="text-right hidden md:block">
            <p className="text-xs font-mono text-gray-400">© {new Date().getFullYear()} JORDAN SPEIGHT</p>
            <p className="text-[10px] text-gray-300 font-mono uppercase tracking-widest">AI Research & Engineering</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
