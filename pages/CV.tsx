
import React from 'react';
import { FileText, Download, Briefcase, GraduationCap, Award } from 'lucide-react';
import { EXPERIENCES } from '../constants';

const CV: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-16">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-12 border-b-4 border-black">
        <div className="space-y-4">
          <h1 className="text-6xl font-black uppercase tracking-tighter">Curriculum Vitae</h1>
          <p className="text-xl font-bold text-gray-600">Jordan Speight • London, UK • jordan@speight.ai</p>
        </div>
        <button className="flex items-center gap-2 bg-black text-white px-6 py-3 font-black text-lg neo-brutal-shadow-hover transition-all">
          <Download size={20} /> DOWNLOAD PDF
        </button>
      </header>

      {/* Experience */}
      <section className="space-y-8">
        <div className="flex items-center gap-4 bg-yellow-400 border-4 border-black p-4 w-fit">
          <Briefcase size={32} />
          <h2 className="text-3xl font-black">EXPERIENCE</h2>
        </div>
        
        <div className="space-y-12">
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className="relative pl-8 border-l-4 border-black">
              <div className="absolute -left-[14px] top-0 w-6 h-6 bg-white border-4 border-black rounded-full"></div>
              <div className="space-y-2">
                <span className="text-lg font-black bg-blue-100 px-2 border-2 border-black">{exp.period}</span>
                <h3 className="text-2xl font-black">{exp.role} @ {exp.company}</h3>
                <ul className="list-disc list-inside font-bold space-y-2 text-gray-700">
                  {exp.description.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Awards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <section className="space-y-8">
          <div className="flex items-center gap-4 bg-purple-400 border-4 border-black p-4 w-fit">
            <GraduationCap size={32} />
            <h2 className="text-3xl font-black">EDUCATION</h2>
          </div>
          <div className="space-y-6">
            <div className="border-4 border-black p-6 bg-white neo-brutal-shadow">
              <h3 className="text-xl font-black">MSc in Artificial Intelligence</h3>
              <p className="font-bold">Imperial College London • 2019-2020</p>
              <p className="text-gray-500 italic">Focus: Generative Adversarial Networks</p>
            </div>
            <div className="border-4 border-black p-6 bg-white neo-brutal-shadow">
              <h3 className="text-xl font-black">BSc Computer Science</h3>
              <p className="font-bold">University of Edinburgh • 2015-2019</p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex items-center gap-4 bg-orange-400 border-4 border-black p-4 w-fit">
            <Award size={32} />
            <h2 className="text-3xl font-black">RECOGNITION</h2>
          </div>
          <div className="space-y-4">
            {[
              "1st Place - Global AI Hackathon (2023)",
              "AWS Certified ML Specialist",
              "Featured Speaker @ NeurIPS Workshops",
              "Open Source Contributor (PyTorch)"
            ].map((award, i) => (
              <div key={i} className="flex items-center gap-4 border-b-2 border-black pb-2">
                <div className="w-2 h-2 bg-black rotate-45"></div>
                <p className="font-bold text-lg">{award}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Skills Bar */}
      <section className="bg-black text-white p-8 border-4 border-black shadow-[10px_10px_0px_0px_rgba(34,197,94,1)]">
        <h2 className="text-3xl font-black mb-6 uppercase">Technical Proficiency</h2>
        <div className="flex flex-wrap gap-4">
          {["Python", "PyTorch", "Rust", "TypeScript", "TensorFlow", "Kubernetes", "AWS", "CUDA", "FastAPI", "React"].map(s => (
            <span key={s} className="bg-white text-black px-4 py-2 font-black border-2 border-white hover:bg-green-400 transition-colors cursor-default">
              {s}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CV;
