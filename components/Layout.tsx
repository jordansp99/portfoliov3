
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Profile', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#f0f0f0] border-b-4 border-black px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-black tracking-tighter hover:skew-x-2 transition-transform">
            JORDAN_SPEIGHT.AI
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-bold px-4 py-1 border-2 transition-all ${
                  location.pathname === link.path 
                    ? 'bg-yellow-400 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]' 
                    : 'border-transparent hover:border-black hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 pb-4 animate-in fade-in slide-in-from-top-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-black border-4 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 md:px-8 py-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white p-8 md:p-12 border-t-4 border-white mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-4xl font-black mb-6">Let's build something intelligent.</h3>
            <p className="text-gray-400 max-w-md mb-8">
              Specializing in deep learning, large language models, and high-performance AI deployment.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white text-black border-2 border-white hover:bg-yellow-400 transition-colors">
                <Github />
              </a>
              <a href="#" className="p-3 bg-white text-black border-2 border-white hover:bg-yellow-400 transition-colors">
                <Linkedin />
              </a>
              <a href="mailto:jordan@speight.ai" className="p-3 bg-white text-black border-2 border-white hover:bg-yellow-400 transition-colors">
                <Mail />
              </a>
            </div>
          </div>
          <div className="flex flex-col md:items-end justify-center">
            <p className="text-xl font-bold mb-2 uppercase">© 2024 Jordan Speight</p>
            <p className="text-gray-500 italic">London-based AI Engineering</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
