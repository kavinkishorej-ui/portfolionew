import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 animate-fade-in">
          <span className="text-cyan-400 font-mono text-lg">Hi, my name is</span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4 animate-fade-in-up">
          KAVIN KISHORE R 
        </h1>

        <h2 className="text-3xl sm:text-5xl font-bold text-gray-400 mb-6 animate-fade-in-up delay-200">
        FULL STACK DEVELOPER
        </h2>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 animate-fade-in-up delay-300">
           Specializing in creating scalable web applications
          with modern technologies. Passionate about clean code and seamless user experiences.
        </p>

        <div className="flex items-center justify-center space-x-6 mb-12 animate-fade-in-up delay-400">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/kavin-kishore-r-197123371/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BIuggm545RBCC1lFLQkuN8A%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:kavinkishore.j@gmail.com"
            className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
          >
            <Mail size={28} />
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="group px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300 animate-fade-in-up delay-500"
        >
          View My Work
        </button>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-cyan-400 transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
