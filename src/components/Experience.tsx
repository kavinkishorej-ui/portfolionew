import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Bdreamz Global Solutions Pvt Ltd',
      period: '2024 (6 Months)',
      description: [
        'Completed a 6-month internship focused on full stack web development.',
        'Worked on building responsive web applications using HTML, CSS, JavaScript, and MySQL.',
        'Gained hands-on experience with frontend and backend integration using Java .',
        'Collaborated in a team environment to develop and debug real-world project modules.',
      ],
    },
    {
      title: 'Full Stack Development Course',
      company: 'Besant Technologies',
      period: '2024',
      description: [
        'Completed a professional certification course in Full Stack Development.',
        'Trained in frontend technologies like HTML, CSS, JavaScript,react and Bootstrap.',
        'Learned backend development using Java and MySQL.',
        'Built multiple mini projects, including portfolio and restaurant websites.',
      ],
    },
    {
      title: 'Academic Projects',
      company: 'Easa College of Engineering and Technology',
      period: '2023 - 2025',
      description: [
        'Developed a wildlife monitoring drone using YOLOv3 and TensorFlow Lite for real-time object detection.',
        'Created a responsive restaurant website with menu browsing and cart features.',
        'Built Java console applications for student grade management and task handling.',
        'Designed a personal portfolio website to showcase projects and skills.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full" />
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-cyan-400/30 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'
              }`}
            >
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-cyan-400 rounded-full transform -translate-x-1/2 md:translate-x-0 border-4 border-slate-950" />

              <div
                className={`ml-8 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                } bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300`}
              >
                <div className="flex items-center space-x-2 text-cyan-400 mb-2">
                  <Calendar size={16} />
                  <span className="text-sm font-semibold">{exp.period}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>

                <div className="flex items-center space-x-2 text-gray-400 mb-4">
                  <Briefcase size={16} />
                  <span>{exp.company}</span>
                </div>

                <ul className={`space-y-2 ${index % 2 === 0 ? '' : 'md:text-left'}`}>
                  {exp.description.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-gray-400 flex items-start space-x-2"
                    >
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
