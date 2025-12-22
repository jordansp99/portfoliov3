import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Cpu, Database, Brain, Rocket, 
  Briefcase, GraduationCap, BookOpen, ExternalLink 
} from 'lucide-react';
import { EXPERIENCES, PUBLICATIONS } from '../constants';
import avatarImage from '../src/assets/avatar.jpg';

const Home: React.FC = () => {
  return (
    <div className="space-y-12 pb-24">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-start gap-12 pt-12">
        <div className="flex-1 space-y-10">
          <div className="space-y-6">
            <span className="bg-purple-400 border-4 border-black px-10 py-6 font-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] inline-block uppercase tracking-tighter text-4xl md:text-7xl -rotate-2 mb-8">
              AI Engineer
            </span>
            <h1 className="text-7xl md:text-9xl font-black leading-none tracking-tighter">
              <span className="relative z-10">JORDAN</span> <br />
              <span className="bg-yellow-400 border-x-4 border-black px-2">SPEIGHT</span>
            </h1>
          </div>
          <p className="text-2xl md:text-3xl font-bold leading-tight max-w-3xl text-gray-800">
            AI Engineer and Researcher dedicated to solving complex real-world challenges through NLP and Large Language Models. Expert in enhancing ASR accuracy and pioneering novel evaluation metrics for regional dialects, leveraging a unique intersection of linguistic expertise and advanced AI research to drive inclusive technology.
          </p>
          <div className="flex flex-wrap gap-6 pt-4">
            <div className="flex gap-6 items-center pl-6 border-l-8 border-black">
              <div className="flex flex-col">
                <span className="font-black text-sm uppercase text-gray-400">Location</span>
                <span className="font-black text-lg uppercase">Buckinghamshire, UK</span>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-sm uppercase text-gray-400">Email</span>
                <span className="font-black text-lg uppercase">jordanspeight@hotmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-400 border-4 border-black translate-x-6 translate-y-6 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>
            <img 
              src={avatarImage} 
              alt="Jordan Speight" 
              className="relative z-10 w-full aspect-square object-cover border-4 border-black"
            />
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Experience - Large Box */}
        <section className="md:col-span-8 bg-white border-4 border-black p-8 neo-brutal-shadow flex flex-col gap-8">
          <div className="flex items-center gap-4 bg-yellow-400 border-4 border-black p-4 w-fit shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Briefcase size={32} />
            <h2 className="text-3xl font-black uppercase">Experience</h2>
          </div>
          <div className="space-y-10">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="group">
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-4">
                  <h3 className="text-2xl font-black italic underline decoration-purple-500 underline-offset-8">{exp.role} @ {exp.company}</h3>
                  <span className="bg-black text-white px-3 py-1 font-black text-sm uppercase">{exp.period}</span>
                </div>
                <ul className="space-y-3">
                  {exp.description.slice(0, 2).map((item, j) => (
                    <li key={j} className="flex gap-4 text-lg font-bold items-start text-gray-700">
                      <span className="mt-2 w-2 h-2 bg-black flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                  {exp.description.length > 2 && (
                    <li className="text-gray-400 font-bold italic pl-6">+ {exp.description.length - 2} more contributions...</li>
                  )}
                </ul>
              </div>
            ))}
          </div>
          <Link to="/cv" className="mt-auto self-end flex items-center gap-2 font-black text-xl hover:underline underline-offset-4">
            VIEW FULL CV <ArrowRight size={24} />
          </Link>
        </section>

        {/* Education - Small Box */}
        <section className="md:col-span-4 bg-blue-400 border-4 border-black p-8 neo-brutal-shadow flex flex-col gap-8">
          <div className="flex items-center gap-4 bg-white border-4 border-black p-4 w-fit shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <GraduationCap size={32} />
            <h2 className="text-3xl font-black uppercase">Education</h2>
          </div>
          <div className="space-y-8">
            <div className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-xl font-black">MSc. AI</h3>
              <p className="font-bold">Essex • 2025</p>
            </div>
            <div className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-xl font-black">B.A. Languages</h3>
              <p className="font-bold">Birmingham • 2020</p>
            </div>
          </div>
        </section>

        {/* Tech Stack - Medium Box */}
        <section className="md:col-span-4 bg-purple-400 border-4 border-black p-8 neo-brutal-shadow flex flex-col gap-8">
          <div className="flex items-center gap-4 bg-white border-4 border-black p-4 w-fit shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Cpu size={32} />
            <h2 className="text-3xl font-black uppercase">Stack</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Python", "NLP", "LLMs", "ASR", "Pandas", "PyTorch", "React", "Azure"].map(skill => (
              <span key={skill} className="bg-white border-2 border-black px-3 py-1 font-black text-sm uppercase">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Publications - Large Box */}
        <section className="md:col-span-8 bg-green-400 border-4 border-black p-8 neo-brutal-shadow flex flex-col gap-8">
          <div className="flex items-center gap-4 bg-white border-4 border-black p-4 w-fit shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <BookOpen size={32} />
            <h2 className="text-3xl font-black uppercase">Selected Work</h2>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {PUBLICATIONS.map((pub, i) => (
              <a 
                key={i} 
                href={pub.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group bg-white border-4 border-black p-6 hover:translate-x-1 hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex justify-between items-center"
              >
                <div className="space-y-1 pr-4">
                  <h3 className="text-xl font-black group-hover:text-blue-600 transition-colors line-clamp-1">{pub.title}</h3>
                  <p className="text-sm font-bold text-gray-500 uppercase">{pub.venue} • {pub.year}</p>
                </div>
                <div className="bg-black text-white p-2 border-2 border-black group-hover:bg-blue-500 transition-colors">
                  <ExternalLink size={20} />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Explore - CTA Box */}
        <section className="md:col-span-12 bg-black text-white p-12 border-4 border-black flex flex-col md:flex-row justify-between items-center gap-8 shadow-[12px_12px_0px_0px_rgba(251,191,36,1)]">
          <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter">EXPLORE THE WORK</h2>
          <div className="flex gap-4 w-full md:w-auto">
             <Link to="/projects" className="flex-1 bg-yellow-400 text-black px-8 py-4 text-2xl font-black flex justify-between items-center hover:bg-white transition-colors border-4 border-black">
                PROJECTS <ArrowRight size={32} />
             </Link>
             <Link to="/blog" className="flex-1 bg-blue-400 text-black px-8 py-4 text-2xl font-black flex justify-between items-center hover:bg-white transition-colors border-4 border-black">
                BLOG <ArrowRight size={32} />
             </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;