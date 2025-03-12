"use client";

import React from "react";

interface Skill {
  name: string;
  icon: string;
  category: string;
}

interface SkillsGridProps {
  skills: Skill[];
}

const SkillsGrid: React.FC<SkillsGridProps> = ({ skills }) => {
  // Map of skill names to background colors
  const skillColors: Record<string, string> = {
    JAVA: "bg-orange-500",
    PYTHON: "bg-blue-500 text-white",
    JAVASCRIPT: "bg-yellow-400 text-black",
    TYPESCRIPT: "bg-blue-600 text-white",
    REACT: "bg-cyan-400 text-black",
    NODEJS: "bg-green-600 text-white",
    C: "bg-blue-700 text-white",
    SQL: "bg-slate-500 text-white",
    GIT: "bg-red-500 text-white",
    "C++": "bg-blue-500 text-white",
    "C#": "bg-green-700 text-white",
    HTML5: "bg-orange-600 text-white",
    CSS3: "bg-blue-600 text-white",
    DJANGO: "bg-green-800 text-white",
    MYSQL: "bg-blue-800 text-white",
    TAILWIND: "bg-sky-500 text-white",
  };

  // Get corresponding icon for a skill
  const getSkillIcon = (icon: string) => {
    switch (icon.toLowerCase()) {
      case "java":
        return "☕";
      case "python":
        return "🐍";
      case "javascript":
        return "JS";
      case "typescript":
        return "TS";
      case "react":
        return "⚛️";
      case "nodejs":
        return "🟢";
      case "c":
        return "C";
      case "sql":
        return "🔍";
      case "git":
        return "🔄";
      case "cplusplus":
        return "C++";
      case "csharp":
        return "C#";
      case "html5":
        return "🌐";
      case "css3":
        return "🎨";
      case "django":
        return "DJ";
      case "mysql":
        return "🗄️";
      case "tailwind":
        return "💨";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {skills.map((skill, index) => (
        <div
          key={index}
          className={`${
            skillColors[skill.name] || "bg-gray-700 text-white"
          } py-2 px-4 rounded-lg font-medium transition-transform hover:scale-105 flex items-center gap-2`}
        >
          <span className="font-bold">{getSkillIcon(skill.icon)}</span>
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;