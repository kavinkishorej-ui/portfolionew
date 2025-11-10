import React from 'react';
import { Code2, Rocket, Users } from 'lucide-react';

export default function About(): JSX.Element {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code is my priority',
    },
    {
      icon: Rocket,
      title: 'Fast Performance',
      description: 'Optimizing applications for speed and smooth user experiences',
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Strong communicator who thrives in team environments',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full" />
        </div>

        {/* About content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Text */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Hi, I'm <span className="text-cyan-400 font-semibold">Kavin Kishore R</span>, 
              a passionate Full Stack Developer with a background in Electronics and Communication Engineering.
              My journey into software development began with a curiosity about how technology and AI 
              can solve real-world problems. Over time, that curiosity turned into hands-on experience — 
              building everything from AI-powered object detection systems to dynamic web and mobile applications.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I enjoy working across both frontend and backend technologies — crafting responsive interfaces with 
              HTML, CSS, and JavaScript, and developing powerful backend logic using Java, Python, and MySQL. 
              I’ve also explored AI integration through projects involving YOLOv3, TensorFlow Lite, and OpenCV, 
              where I optimized real-time performance on edge devices.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Beyond coding, I love designing clean, user-friendly interfaces and ensuring every application runs 
              smoothly from concept to deployment. My goal is to keep learning, growing, and contributing to 
              impactful tech solutions that bridge innovation with usability.
            </p>
          </div>

          {/* Right: Responsive profile image with glow */}
          <div className="relative flex justify-center md:justify-end">
            {/* subtle cyan glow behind the image */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-500 opacity-20 blur-2xl pointer-events-none" />

            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-cyan-400/30 shadow-lg bg-slate-800/50">
              {/* image served from public/ */}
              <img
                src="/images/1.jpg"
                alt="Kavin Kishore"
                className="w-full h-full object-cover rounded-2xl transition-transform duration-500 ease-out hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-cyan-400/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Icon size={32} className="text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
