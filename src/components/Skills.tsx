import { Code, Database, Layers, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Java Script', 'HTML', 'CSS'],
    },
    {
      icon: Database,
      title: 'Backend',
      skills: ['Node.js', 'Java'],
    },
    {
      icon: Layers,
      title: 'Databases ',
      skills: [ 'Git', 'Sql'],
    },
    {
      icon: Wrench,
      title: 'Tools & Others',
      skills: ['VS Code', 'Eclipse','intelliJ IDEA'],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <div className="bg-cyan-400/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-400/20 transition-colors">
                <category.icon size={28} className="text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm border border-slate-600 hover:border-cyan-400/50 hover:text-cyan-400 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
