import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Wildlife Monitoring Drone (YOLOv3 + TensorFlow Lite)',
      description:
        'Developed a drone-based surveillance system capable of detecting animals and humans in real time using YOLOv3. Integrated ESP32 streaming for live video and GPS tracking, optimized with TensorFlow Lite and OpenCV for edge devices.',
      tech: ['Python', 'TensorFlow Lite', 'YOLOv3', 'OpenCV', 'ESP32'],
      image:
        'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/kavinkishore6236', // update if specific repo exists
      live: 'https://kavinkishore6236.github.io/portfolio-new/',
    },
    {
      title: 'Restaurant Website',
      description:
        'Built a fully functional restaurant website featuring dynamic menu browsing, cart management, and order simulation. Designed responsive UI with HTML, CSS, and JavaScript for seamless user experience.',
      tech: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
      image:
        'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/kavinkishore6236/kavin-project3',
      live: 'https://kavinkishore6236.github.io/kavin-project3/',
    },
    {
      title: 'Portfolio Website',
      description:
        'Designed and deployed a personal portfolio website showcasing my projects, including AI-based applications, web designs, and Java programs. The site is built with clean design principles and responsive layouts.',
      tech: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
      image:
        'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/kavinkishore6236/portfolio-new',
      live: 'https://kavinkishore6236.github.io/portfolio-new/',
    },
    {
      title: 'Student Grade Management System (Java)',
      description:
        'Developed a Java console application for managing student records, including add, view, and delete functionalities using ArrayLists. Designed a menu-driven system for efficient and easy interaction.',
      tech: ['Java', 'OOP', 'ArrayList', 'Eclipse'],
      image:
        'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/kavinkishore6236', // update if repo available
      
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm border border-cyan-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
