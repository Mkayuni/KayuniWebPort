import Image from "next/image";
import { FiCalendar, FiMapPin, FiAward } from "react-icons/fi";

export const metadata = {
  title: "About | Moses Kayuni",
  description: "Learn more about Moses Kayuni's background, education, and experience in software development and data engineering.",
};

export default function AboutPage() {
  // Education data
  const education = [
    {
      degree: "MS in Computer Science",
      institution: "Western Kentucky University",
      period: "2022 - Present",
      description: "Focusing on advanced algorithms, machine learning, and software engineering practices.",
      location: "Bowling Green, KY"
    },
    {
      degree: "MBA in Data Analytics & Healthcare Administration",
      institution: "University of Southern Indiana",
      period: "2019 - 2021",
      description: "Combined business administration with specialized focus on data analytics and healthcare systems management.",
      location: "Evansville, IN"
    }
  ];

  // Experience data
  const experience = [
    {
      title: "Teaching Assistant",
      company: "Western Kentucky University",
      period: "2022 - Present",
      description: "Instructing Java and Python programming courses (CS146 and CS170). Guiding students through complex coding concepts and problem-solving techniques. Developing educational tools for improved learning outcomes.",
      location: "Bowling Green, KY"
    },
    {
      title: "Software Development Intern",
      company: "Schneider Electric",
      period: "2021 - 2022",
      description: "Developed a full-stack Tool Capacity Analyzer application using React/Node.js. Implemented systems to calculate machine hours, material usage, and forecast-based metrics. Collaborated in an agile team environment to deliver business-critical solutions.",
      location: "Louisville, KY"
    }
  ];

  // Skills data by category
  const skillsByCategory = {
    "Programming Languages": [
      { name: "Java", level: 90 },
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "C", level: 75 },
      { name: "C++", level: 70 },
      { name: "C#", level: 65 }
    ],
    "Web Technologies": [
      { name: "React", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "Django", level: 70 }
    ],
    "Databases & Tools": [
      { name: "SQL", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "Git", level: 90 }
    ]
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">About Me</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Software Developer and Data Engineer with a passion for creating innovative solutions
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-2/5">
              <div className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/profile-about.jpg"
                  alt="Moses Kayuni"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-3/5">
              <h2 className="text-3xl font-bold mb-4">Moses Kayuni</h2>
              <h3 className="text-xl text-gray-600 dark:text-gray-400 mb-6">Software Developer | Data Engineer & Scientist</h3>
              
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  I am a passionate software developer and data engineer currently pursuing a Master's degree in Computer Science. 
                  With a background in both technical development and business analytics through my MBA, I bring a unique 
                  perspective to solving complex problems.
                </p>
                <p>
                  My journey in technology began with a fascination for how software can transform businesses and improve lives. 
                  This led me to develop expertise across multiple programming languages and frameworks, with a particular focus 
                  on creating intuitive, efficient solutions that address real-world challenges.
                </p>
                <p>
                  Currently, my research focuses on enhancing AutoER grading with an emphasis on object-oriented class diagrams.
                  I'm passionate about educational technology and creating tools that help students better understand complex 
                  programming concepts.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <FiMapPin className="text-primary h-5 w-5" />
                  <span>Bowling Green, Kentucky</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCalendar className="text-primary h-5 w-5" />
                  <span>Available for opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiAward className="text-primary h-5 w-5" />
                  <span>3+ years of experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Education</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My academic journey has equipped me with both technical and business knowledge.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {education.map((item, index) => (
              <div key={index} className="mb-8 last:mb-0">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-4">
                    <h3 className="text-xl font-bold">{item.degree}</h3>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">{item.institution}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">📍 {item.location}</p>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Professional Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My work experience has given me practical expertise in software development and data engineering.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {experience.map((item, index) => (
              <div key={index} className="mb-8 last:mb-0">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-4">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">{item.company}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">📍 {item.location}</p>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Technical Skills</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My technical toolkit includes a variety of programming languages, frameworks, and tools.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {Object.entries(skillsByCategory).map(([category, skills]) => (
              <div key={category} className="mb-12 last:mb-0">
                <h3 className="text-2xl font-semibold mb-6">{category}</h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div 
                          className="bg-primary h-2.5 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}