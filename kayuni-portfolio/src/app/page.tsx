import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Home() {
  // Featured projects data
  const featuredProjects = [
    {
      id: 1,
      title: "Interactive UML Editor",
      description: "TEACHING OBJECT-ORIENTED DESIGN THROUGH INTERACTIVE UML: A DUAL-APPROACH FRAMEWORK",
      image: "/images/projects/uml-editor.webp",
      tags: ["Python", "UML", "Education"],
      github: "https://github.com/Mkayuni/Thesis",
      demo: null,
    },
    {
      id: 2,
      title: "StockTrack",
      description: "Real-time stock tracking and portfolio management application with market data analysis.",
      image: "/images/projects/stocktrack.webp",
      tags: ["JavaScript", "React", "API"],
      github: "https://github.com/Mkayuni/stockTrack",
      demo: null,
    },
    {
      id: 3,
      title: "LotaMalawi",
      description: "Interactive Android app for learning Chichewa through gamified language acquisition.",
      image: "/images/projects/lotamalawi.webp",
      tags: ["Java", "Android", "Education"],
      github: "https://github.com/Mkayuni/LotoAndroid",
      demo: null,
    },
  ];

  // Skills data
  const skills = [
    { name: "Java", category: "Languages" },
    { name: "Python", category: "Languages" },
    { name: "JavaScript", category: "Languages" },
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "SQL", category: "Data" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Hi, I'm <span className="gradient-text">Moses Kayuni</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
                Software Developer | Data Engineer & Scientist
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
                Master's in Computer Science candidate with an MBA in Data Analytics & Healthcare Administration, 
                combining technical expertise with business acumen to deliver innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/projects" 
                  className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
                >
                  View My Work
                </Link>
                <Link 
                  href="/contact" 
                  className="px-6 py-3 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                >
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-square max-w-md mx-auto relative rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src="/images/profile.jpg"
                  alt="Moses Kayuni"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore some of my recent work showcasing my skills and expertise in software development and data engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover-card"
              >
                <div className="h-48 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-auto">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                    >
                      <FaGithub className="h-5 w-5" />
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                      >
                        <FaExternalLinkAlt className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/projects"
              className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
            >
              View other select public Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My expertise spans multiple programming languages, frameworks, and tools.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm text-gray-800 dark:text-gray-200 font-medium hover-scale"
              >
                {skill.name}
              </span>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link 
              href="/about"
              className="px-6 py-2 text-primary font-medium hover:underline"
            >
              Learn more about my skills and experience →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-primary-foreground/90 mb-8">
              I'm currently available for work and collaborations. 
              If you have a project that could use my skills, let's talk!
            </p>
            <Link 
              href="/contact"
              className="px-8 py-3 rounded-lg bg-white text-primary font-medium hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}