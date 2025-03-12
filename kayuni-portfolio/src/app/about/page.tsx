// src/app/about/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { FiCalendar, FiMapPin, FiAward } from "react-icons/fi";
import SkillsGrid from "@/components/about/SkillsGrid";
import ModeToggle from "@/components/about/ModeToggle";
import PersonalBio from "@/components/about/PersonalBio";
import { skills } from "@/lib/data";

export default function AboutPage() {
  const [mode, setMode] = useState<"recruiter" | "personal">("recruiter");

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
      title: "Software Development/Data Analyst (Intern)",
      company: "Schneider Electric",
      period: "May 2024 - Aug 2024",
      description: "Developed a full-stack tool capacity application to improve operational efficiency. Led the Molding Master Data Quality project to help reduce data inconsistencies. Implemented ETL processes to integrate manufacturing data from multiple sources.",
      location: "Nashville, TN"
    },
    {
      title: "Graduate Teaching Assistant - Computer Science",
      company: "Western Kentucky University",
      period: "Aug 2023 - Present",
      description: "Instruct 40+ students in Java and Python programming labs, leading to noticeable improvements in coding assignments and problem-solving skills. Developing an automated grading system for OOP class diagrams using Mermaid syntax, enhancing feedback efficiency and accuracy. Created supplemental learning materials that increased student comprehension of complex algorithms.",
      location: "Bowling Green, KY"
    },
    {
      title: "Graduate Student Assistant - Data Management",
      company: "University of Southern Indiana",
      period: "Sep 2021 - Aug 2023",
      description: "Maintained databases for international programs, ensuring 99.8% data accuracy. Implemented data collection protocols that improved reporting efficiency by 40%. Developed analytics dashboards for budget tracking across international programs.",
      location: "Evansville, IN"
    },
    {
      title: "Business Analyst",
      company: "Fifth Third Bank",
      period: "Apr 2020 - May 2021",
      description: "Automated reporting processes, minimizing manual workload and improving efficiency. Enhanced data visualization in executive reports, facilitating faster and more informed decision-making. Streamlined system training documentation to accelerate onboarding and knowledge transfer.",
      location: "Grand Rapids, MI"
    },
    {
      title: "Board Member (Volunteer)",
      company: "Heart for Malawi",
      period: "June 2024 - Present",
      description: "Implement data analytics solutions for community impact measurement. Maintain website and digital infrastructure for improved outreach.",
      location: "Lilongwe, Malawi"
    },
    {
      title: "Volunteer",
      company: "Bethany Christian Services",
      period: "Sep 2019 - Aug 2021",
      description: "Assisted in strategic decision-making to enhance program effectiveness and community outreach.",
      location: "Grand Rapids, MI"
    }
  ];

  // Professional bio content
  const professionalBio = (
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
  );

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
          <ModeToggle onModeChange={setMode} />
          
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
              <h3 className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                {mode === "recruiter" 
                  ? "Software Developer | Data Engineer & Scientist" 
                  : "Reader & Bass Guitar Enthusiast"}
              </h3>
              
              {mode === "recruiter" ? professionalBio : <PersonalBio />}
              
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

      {/* Only show these sections in recruiter mode */}
      {mode === "recruiter" && (
        <>
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
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
                  My technical toolkit includes a variety of programming languages, frameworks, and tools.
                </p>
                
                <SkillsGrid skills={skills} />
              </div>
            </div>
          </section>
        </>
      )}

      {/* Personal Interests Section - Only show in personal mode */}
      {mode === "personal" && (
        <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Personal Interests</h2>
              <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-6"></div>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">📚 Reading</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  I enjoy science fiction and magical realism novels. 
                  Some favorites include "Nightfall," "The Hobbit," and "One Hundred Years of Solitude."
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">🎸 Music</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Playing bass guitar is my creative outlet. I love finding the rhythm and 
                  creating the foundation of a song.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">🥾 Hiking</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Exploring nature trails helps me clear my mind and find inspiration. 
                  The physical challenge and natural beauty are the perfect combination.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}