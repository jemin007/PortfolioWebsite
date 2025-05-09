import { useState } from 'react';

const techs = [
  { name: 'SSMS', icon: '/icons/ssms.svg' },
  { name: 'Azure', icon: '/icons/azure.svg' },
  { name: 'PySpark', icon: '/icons/spark.svg' },
  { name: 'Kafka', icon: '/icons/kafka.svg' },
  { name: 'Databricks', icon: '/icons/databricks.svg' },
  { name: 'Flink', icon: '/icons/flink.svg' },
  { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
  { name: 'Python', icon: '/icons/python.svg' },
  { name: 'Docker', icon: '/icons/docker.svg' },
  { name: 'Git', icon: '/icons/git.svg' },
  { name: 'AWS', icon: '/icons/aws.svg' },
  { name: 'GCP', icon: '/icons/gcp.svg' },
  { name: 'Tableau', icon: '/icons/tableau.svg' },
  { name: 'Kubernetes', icon: '/icons/kuber.svg' },
];

const workExperience = [
  {
    company: 'Audit Partnership',
    logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQFGkzUNJpmt5g/company-logo_200_200/company-logo_200_200/0/1682355237603/auditpartnership_logo?e=1752105600&v=beta&t=wy20-W19rGB-90EJLI8rajV1VTH0rXzxuW09sHR6zwM',
    role: 'Senior Data Engineer',
    period: 'Mar 2023 - Aug 2023',
    description: [
      'Built automated data pipelines using Azure Data Factory and Dagster that cut down processing time by over 30% and removed a ton of manual work. Also migrated old SSIS jobs to ADF to make everything more reliable',
      'Designed smart, reusable SQL procedures and batch tools that sped up queries by 25% and handled data from 100+ suppliers without slowing down performance'
    ]
  },
  {
    company: 'Cotiviti',
    logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQHbHlLwL6DNEA/company-logo_200_200/company-logo_200_200/0/1630578498647/cotiviti_logo?e=1752105600&v=beta&t=DBSPL7ymFnbfpqlW4lK74713-UdvdWuOLsITyQM8X4s',
    role: 'SQL Developer',
    period: 'Jul 2021 - Mar 2023',
    description: [
      'Collaborated with auditors and stakeholders to gather data requirements and built efficient SQL procedures for managing large datasets. Improved legacy processes by adding structured error handling and logging, making them easier to maintain and monitor.',
      'Optimized slow-performing queries by restructuring them and applying best practices to eliminate bottlenecks. Developed Python scripts and Excel macros to automate data cleanup and reduce manual, repetitive tasks.',
    ]
  },
  {
    company: 'Ncell - Telecom Company',
    logo: 'https://developingtelecoms.com/images/stories/Company_Logos/Ncell-logo.jpg',
    role: 'Strategy Planning Trainee',
    period: 'Feb 2021 - Jul 2021',
    description: [
      'Analyzed revenue, user traffic, and product trends across regions and network types to support executive reporting and strategic insights.',
      'Worked with the BI team to track key KPIs like ARPU and traffic volumes, boosting marketing effectiveness by 15% and improving forecast accuracy by 20%.'
    ]
  }
];

const education = [
  {
    institution: 'Georgian College',
    logo: 'https://b.thumbs.redditmedia.com/xVCmQfFSVz1bbova7HxCdYaGoDJ5svJN3GlGtECIBHU.png',
    degree: 'Post Graduate Certificatine in Big Data Analytics (2024) & Aritificial Intelligence (2025)',
    period: 'Sep 2023 - Apr 2025',
    achievements: [
      '2-time recipient of the Dean\'s Honor List'
    ]
  },
  {
    institution: 'Softwaric College - Coventry University',
    logo: 'https://www.coventry.ac.uk/globalassets/media/cu-social_square_small.jpg',
    degree: 'Bachelors in Information Technology',
    period: '2017 - 2021',
    achievements: [
      'Graduated with First Class Honours '
    ]
  }
];

const Skills = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  return (
    <section id="skills" className="py-20 section-pattern">
      <div className="container-custom flex flex-col items-center gap-12">
        {/* Work & Education Section */}
        <div className="w-full max-w-4xl">
          <div className="flex justify-center mb-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-2 shadow-lg flex gap-2 border border-blue-100 dark:border-blue-900">
              <button
                className={`px-8 py-2 rounded-full font-semibold text-lg transition-all flex items-center gap-2 shadow-sm border-2 ${
                  activeTab === 'work'
                    ? 'bg-blue-600 text-white border-blue-600 scale-105'
                    : 'text-gray-600 dark:text-gray-300 border-transparent hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveTab('work')}
                aria-selected={activeTab === 'work'}
              >
                <span role="img" aria-label="Work">💼</span> Work
              </button>
              <button
                className={`px-8 py-2 rounded-full font-semibold text-lg transition-all flex items-center gap-2 shadow-sm border-2 ${
                  activeTab === 'education'
                    ? 'bg-blue-600 text-white border-blue-600 scale-105'
                    : 'text-gray-600 dark:text-gray-300 border-transparent hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveTab('education')}
                aria-selected={activeTab === 'education'}
              >
                <span role="img" aria-label="Education">🎓</span> Education
              </button>
            </div>
          </div>
          <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute left-7 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 dark:from-blue-900 dark:via-blue-700 dark:to-blue-900 rounded-full z-0" style={{ minHeight: '100%' }}></div>
            {activeTab === 'work' ? (
              <div className="space-y-10 relative z-10">
                {workExperience.map((work, index) => (
                  <div key={index} className="flex items-start gap-6 group relative animate-fade-in">
                    {/* Timeline dot */}
                    <div className="relative z-10">
                      <div className="w-24 h-24 rounded-full border-4 border-blue-500 bg-white dark:bg-gray-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <img src={work.logo} alt={work.company} className="w-20 h-20 rounded-full object-cover mx-auto my-auto" />
                      </div>
                    </div>
                    <div className="flex-1 bg-white/90 dark:bg-gray-900/90 border-l-4 border-blue-500 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative">
                      <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mb-1">{work.period}</p>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
                        {work.company}
                      </h3>
                      <h4 className="text-blue-800 dark:text-blue-300 font-medium mb-2">{work.role}</h4>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-base space-y-1 pl-2">
                        {work.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-10 relative z-10">
                {education.map((edu, index) => (
                  <div key={index} className="flex items-start gap-6 group relative animate-fade-in">
                    {/* Timeline dot */}
                    <div className="relative z-10">
                      <div className="w-24 h-24 rounded-full border-4 border-blue-500 bg-white dark:bg-gray-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <img src={edu.logo} alt={edu.institution} className="w-20 h-20 rounded-full object-cover mx-auto my-auto" />
                      </div>
                    </div>
                    <div className="flex-1 bg-white/90 dark:bg-gray-900/90 border-l-4 border-blue-500 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative">
                      <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mb-1">{edu.period}</p>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
                        {edu.institution}
                      </h3>
                      <h4 className="text-blue-800 dark:text-blue-300 font-medium mb-2">{edu.degree}</h4>
                      {edu.achievements.length > 0 && (
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-base space-y-1 pl-2">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Skills Heading */}
        <h2 className="section-title">Skills</h2>
        {/* Skills Card */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-10 w-full max-w-4xl mb-12 lg:mb-0">
          <div className="bg-white dark:bg-white rounded-2xl shadow-xl p-10 w-full border border-gray-700 relative flex-1 min-h-[340px] flex items-center justify-center">
            <div className="flex flex-wrap justify-center gap-8">
              {techs.map((tech) => (
                <div
                  key={tech.name}
                  className="relative group flex flex-col items-center"
                  onMouseEnter={() => setHovered(tech.name)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-14 h-14 object-contain transition-transform duration-200 group-hover:scale-110"
                    draggable={false}
                  />
                  {hovered === tech.name && (
                    <div className="absolute bottom-[-2.5rem] left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-3 py-1 shadow-lg z-10 whitespace-nowrap animate-fade-in">
                      {tech.name}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl shadow-xl w-full border border-gray-700 relative flex-1 min-h-[340px] flex items-center justify-center">
            <img 
              src="/images/wc.png" 
              alt="Skills Word Cloud" 
              className="rounded-2xl shadow-lg max-w-xs md:max-w-sm lg:max-w-md w-full h-auto object-contain border border-gray-300 dark:border-gray-700 p-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;