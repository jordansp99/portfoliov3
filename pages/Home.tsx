import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Cpu, Database, Brain, Rocket, 
  Briefcase, GraduationCap, BookOpen, ExternalLink, MapPin, Mail
} from 'lucide-react';
import { EXPERIENCES, PUBLICATIONS } from '../constants';
import avatarImage from '../src/assets/avatar.jpg';

const Home: React.FC = () => {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-12 pt-8 md:pt-16">
        <div className="w-full md:w-[280px] flex-shrink-0">
          <img 
            src={avatarImage} 
            alt="Jordan Speight" 
            className="w-full aspect-square object-cover rounded-2xl shadow-xl"
          />
        </div>
        <div className="flex-1 space-y-10">
          <div className="space-y-2">
            <h1 className="text-6xl md:text-8xl font-medium tracking-tighter text-gray-900 leading-[0.9] mix-blend-multiply">
              Jordan <br />
              <span className="text-gray-400 font-light italic">Speight</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl font-light">
            <span className="font-medium text-black">AI Researcher</span>. I architect robust intelligent systems that solve complex, real-world problems.
          </p>
          <div className="flex flex-wrap gap-8 pt-4 border-t border-gray-200 w-fit pr-12">
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.location.href = 'mailto:jordanspeight@hotmail.com'}>
              <div className="p-2 bg-white border border-gray-200 rounded-lg text-gray-400 group-hover:text-indigo-600 group-hover:border-indigo-600 transition-all duration-300">
                <Mail size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">Contact</span>
                <span className="text-sm font-medium text-gray-900">jordanspeight@hotmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Experience - Large Box */}
        <section className="md:col-span-8 md:row-span-2 bg-white/60 backdrop-blur-md border border-white/40 shadow-sm p-8 rounded-3xl relative overflow-hidden group hover:shadow-lg transition-all duration-500">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Briefcase size={120} />
          </div>
          <div className="flex items-center gap-3 mb-10">
            <h2 className="text-3xl font-medium tracking-tight text-gray-900">Experience</h2>
            <div className="h-px bg-gray-300 flex-grow ml-4"></div>
          </div>
          <div className="space-y-8 relative z-10">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="relative pl-8 border-l border-gray-200 hover:border-indigo-400 transition-colors duration-300">
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-white border-2 border-gray-300 group-hover:border-indigo-500 transition-colors"></div>
                <div className="flex flex-col md:flex-row justify-between md:items-baseline gap-2">
                  <h3 className="text-xl font-bold text-gray-900">{exp.role} <span className="text-gray-400 font-normal italic">at</span> {exp.company}</h3>
                  <span className="font-mono text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full uppercase tracking-wider">{exp.period}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education - Small Box */}
        <section className="md:col-span-4 bg-gradient-to-br from-white/80 to-indigo-50/30 backdrop-blur-md border border-white/40 shadow-sm p-8 rounded-3xl flex flex-col gap-6 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-medium tracking-tight text-gray-900">Education</h2>
          </div>
          <div className="space-y-8">
            <div className="group">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">MSc. Artificial Intelligence</h3>
              <p className="text-gray-500 text-sm">University Of Essex</p>
            </div>
            <div className="group border-t border-gray-100 pt-6">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">B.A. Modern Languages</h3>
              <p className="text-gray-500 text-sm">University of Birmingham</p>
            </div>
          </div>
        </section>

        {/* Tech Stack - Medium Box */}
        <section className="md:col-span-4 bg-gray-900 text-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600 rounded-full blur-[60px] opacity-40"></div>
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <Cpu size={24} className="text-indigo-400" />
            <h2 className="text-2xl font-medium tracking-tight">Stack</h2>
          </div>
          <div className="flex flex-wrap gap-2 relative z-10">
            {["Python", "NLP", "LLMs", "ASR", "Pandas", "PyTorch", "React", "Azure"].map(skill => (
              <span key={skill} className="bg-white/10 hover:bg-white/20 border border-white/10 px-3 py-1.5 rounded-lg text-sm font-mono transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Publications - Large Box */}
        <section className="md:col-span-12 bg-white/60 backdrop-blur-md border border-white/40 shadow-sm p-8 rounded-3xl group hover:shadow-lg transition-all duration-300">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl font-medium tracking-tight text-gray-900">Publications</h2>
            <div className="h-px bg-gray-300 flex-grow ml-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PUBLICATIONS.map((pub, i) => (
              <a 
                key={i} 
                href={pub.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group/pub p-6 rounded-2xl bg-white border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all flex flex-col justify-between h-full relative overflow-hidden"
              >
                <div className="absolute right-0 top-0 p-4 opacity-0 group-hover/pub:opacity-100 transition-opacity text-indigo-500">
                    <ExternalLink size={20} />
                </div>
                <div className="space-y-3 mb-6">
                  <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover/pub:text-indigo-600 transition-colors pr-6">{pub.title}</h3>
                  <p className="text-sm text-gray-500 font-light">{pub.authors}</p>
                </div>
                <div className="flex items-center gap-2 mt-auto">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/pub:bg-indigo-400 transition-colors"></span>
                    <p className="text-xs font-mono font-medium text-gray-400 uppercase tracking-wide">{pub.venue} • {pub.year}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Explore - CTA Box */}
        <section className="md:col-span-12 flex flex-col md:flex-row gap-8 items-center py-12 px-4">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-4xl font-medium tracking-tight text-gray-300">Browse the Portfolio</h2>
            <p className="text-gray-400 text-lg font-light">Technical case studies and research insights.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto ml-auto">
             <Link to="/projects" className="group flex items-center gap-4 text-xl font-medium text-gray-900 hover:text-indigo-600 transition-colors">
                <span className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:scale-110 group-hover:border-indigo-200 transition-all shadow-sm">
                    <Briefcase size={20} />
                </span>
                Projects
             </Link>
             <Link to="/blog" className="group flex items-center gap-4 text-xl font-medium text-gray-900 hover:text-indigo-600 transition-colors">
                <span className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:scale-110 group-hover:border-indigo-200 transition-all shadow-sm">
                    <BookOpen size={20} />
                </span>
                Blog
             </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;