
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Cpu, Database, Brain, Rocket, 
  Briefcase, GraduationCap, Award, BookOpen, ExternalLink, Download 
} from 'lucide-react';
import { EXPERIENCES, PUBLICATIONS, PROJECTS, BLOG_POSTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-20 pb-24">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-start gap-12 pt-12">
        <div className="flex-1 space-y-10">
          <div className="space-y-6">
            <span className="bg-purple-400 border-4 border-black px-10 py-6 font-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] inline-block uppercase tracking-tighter text-4xl md:text-7xl -rotate-2 mb-8">
              AI Engineer
            </span>
            <h1 className="text-7xl md:text-9xl font-black leading-none tracking-tighter">
              JORDAN <br />
              <span className="bg-yellow-400 border-x-4 border-black px-2">SPEIGHT</span>
            </h1>
          </div>
          <p className="text-2xl md:text-4xl font-bold leading-tight max-w-3xl text-gray-800">
            Building the infrastructure for the next generation of artificial intelligence. Specialized in <span className="underline decoration-blue-500 underline-offset-4">LLM Engineering</span> and <span className="underline decoration-green-500 underline-offset-4">Computer Vision</span>.
          </p>
          <div className="flex flex-wrap gap-6 pt-4">
            <button className="bg-black text-white px-10 py-5 text-2xl font-black flex items-center gap-3 neo-brutal-shadow-hover transition-all">
              <Download size={28} /> GET PDF CV
            </button>
            <div className="flex gap-6 items-center pl-6 border-l-8 border-black">
              <div className="flex flex-col">
                <span className="font-black text-sm uppercase text-gray-400">Location</span>
                <span className="font-black text-lg uppercase">Buckinghamshire, UK</span>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-sm uppercase text-gray-400">Email</span>
                <span className="font-black text-lg uppercase">jordan@speight.ai</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-400 border-4 border-black translate-x-6 translate-y-6 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>
            <img 
              src="https://picsum.photos/seed/jordan-profile/800/800" 
              alt="Jordan Speight" 
              className="relative z-10 w-full aspect-square object-cover border-4 border-black"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="space-y-12">
        <div className="flex items-center gap-4 bg-yellow-400 border-4 border-black p-6 w-fit shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <Briefcase size={40} />
          <h2 className="text-4xl md:text-6xl font-black">PROFESSIONAL EXPERIENCE</h2>
        </div>
        <div className="grid grid-cols-1 gap-12">
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className="bg-white border-4 border-black p-10 neo-brutal-shadow hover:bg-yellow-50 transition-colors">
              <div className="flex flex-col md:flex-row justify-between md:items-start mb-8 gap-6">
                <div>
                  <h3 className="text-4xl font-black italic underline decoration-purple-500 underline-offset-[12px]">{exp.role}</h3>
                  <p className="text-3xl font-black mt-4">{exp.company}</p>
                </div>
                <div className="bg-black text-white px-6 py-3 font-black text-xl h-fit border-2 border-black">
                  {exp.period}
                </div>
              </div>
              <ul className="space-y-6">
                {exp.description.map((item, j) => (
                  <li key={j} className="flex gap-6 text-2xl font-bold items-start text-gray-700">
                    <span className="mt-3 w-4 h-4 bg-black flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      
      {/* Tech Stack / Skills */}
      <section className="space-y-12">
        <div className="flex items-center gap-4 bg-purple-400 border-4 border-black p-6 w-fit shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <Cpu size={40} />
          <h2 className="text-4xl md:text-6xl font-black">TECHNICAL PROFICIENCY</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Brain size={32} />, title: "Deep Learning", color: "bg-pink-300", items: "PyTorch, JAX, HuggingFace" },
            { icon: <Cpu size={32} />, title: "AI Engineering", color: "bg-green-300", items: "Quantization, CUDA, TensorRT" },
            { icon: <Database size={32} />, title: "Cloud & Data", color: "bg-blue-300", items: "AWS, Kubernetes, Pinecone" },
            { icon: <Rocket size={32} />, title: "Production", color: "bg-orange-300", items: "FastAPI, Docker, CI/CD" },
          ].map((skill, i) => (
            <div key={i} className={`${skill.color} p-10 border-4 border-black neo-brutal-shadow h-full flex flex-col gap-6`}>
              <div className="w-20 h-20 bg-white border-4 border-black flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                {skill.icon}
              </div>
              <h3 className="text-3xl font-black mt-2 underline decoration-4 decoration-black underline-offset-8">{skill.title}</h3>
              <p className="text-2xl font-bold leading-relaxed">{skill.items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Publications Section */}
      <section className="space-y-12">
        <div className="flex items-center gap-4 bg-green-400 border-4 border-black p-6 w-fit shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <BookOpen size={40} />
          <h2 className="text-4xl md:text-6xl font-black">PUBLICATIONS</h2>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {PUBLICATIONS.map((pub, i) => (
            <div key={i} className="group bg-white border-4 border-black p-8 neo-brutal-shadow-hover transition-all flex flex-col md:flex-row gap-8 justify-between items-start md:items-center">
              <div className="space-y-3">
                <h3 className="text-3xl font-black group-hover:text-blue-600 transition-colors">{pub.title}</h3>
                <p className="text-xl font-bold text-gray-500 italic">{pub.authors}</p>
                <div className="flex gap-4 items-center">
                   <span className="bg-blue-100 border-2 border-black px-3 py-1 text-sm font-black uppercase">{pub.venue}</span>
                   <span className="font-black text-gray-400 text-lg">{pub.year}</span>
                </div>
              </div>
              {pub.link && (
                <a href={pub.link} className="bg-black text-white p-5 border-2 border-black hover:bg-blue-500 transition-colors neo-brutal-shadow">
                  <ExternalLink size={32} />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
      
      {/* Education */}
      <section className="space-y-12">
        <div className="flex items-center gap-4 bg-blue-400 border-4 border-black p-6 w-fit shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <GraduationCap size={40} />
          <h2 className="text-4xl md:text-6xl font-black">EDUCATION</h2>
        </div>
        <div className="space-y-8">
          <div className="border-4 border-black p-10 bg-white neo-brutal-shadow">
            <h3 className="text-3xl font-black">MSc in Artificial Intelligence</h3>
            <p className="text-2xl font-bold mt-2">Imperial College London • 2019-2020</p>
            <p className="text-xl text-gray-500 font-bold mt-4 italic">Specialization: Vision Systems & GANs</p>
          </div>
          <div className="border-4 border-black p-10 bg-white neo-brutal-shadow">
            <h3 className="text-3xl font-black">BSc Computer Science</h3>
            <p className="text-2xl font-bold mt-2">University of Edinburgh • 2015-2019</p>
          </div>
        </div>
      </section>

      {/* Final CTAs */}
      <section className="bg-black text-white p-20 border-8 border-black shadow-[24px_24px_0px_0px_rgba(251,191,36,1)]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <h2 className="text-6xl md:text-8xl font-black leading-tight italic tracking-tighter">EXPLORE <br /> THE <br /> WORK</h2>
          <div className="flex flex-col gap-8">
             <Link to="/projects" className="bg-yellow-400 text-black p-8 text-3xl font-black flex justify-between items-center hover:bg-white transition-colors border-4 border-black">
                PROJECTS <ArrowRight size={36} />
             </Link>
             <Link to="/blog" className="bg-blue-400 text-black p-8 text-3xl font-black flex justify-between items-center hover:bg-white transition-colors border-4 border-black">
                BLOG <ArrowRight size={36} />
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
