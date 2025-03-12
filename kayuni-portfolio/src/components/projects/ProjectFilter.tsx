"use client";

import { useState } from "react";
import { Project } from "@/lib/data";

interface CategoryFilter {
  id: string;
  name: string;
}

interface ProjectFilterProps {
  projects: Project[];
  onFilter: (filtered: Project[]) => void;
}

const ProjectFilter = ({ projects, onFilter }: ProjectFilterProps) => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Filter categories
  const categories: CategoryFilter[] = [
    { id: "all", name: "All" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "education", name: "Education" },
    { id: "data", name: "Data Engineering" }
  ];

  const handleFilterClick = (categoryId: string) => {
    setActiveFilter(categoryId);

    if (categoryId === "all") {
      onFilter(projects);
      return;
    }

    // Map category IDs to relevant tags
    const categoryToTags: Record<string, string[]> = {
      web: ["JavaScript", "React", "Node.js", "HTML5", "CSS3", "Web"],
      mobile: ["Android", "Java", "Mobile"],
      education: ["Education", "UML", "Learning"],
      data: ["Data", "SQL", "MySQL", "Analytics", "Visualization"]
    };

    const filteredProjects = projects.filter(project => {
      const relevantTags = categoryToTags[categoryId] || [];
      return project.tags.some(tag => 
        relevantTags.includes(tag) || 
        relevantTags.some(rt => tag.toLowerCase().includes(rt.toLowerCase()))
      );
    });

    onFilter(filteredProjects);
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleFilterClick(category.id)}
          className={`px-4 py-2 rounded-full border ${
            activeFilter === category.id
              ? "bg-primary text-white border-primary"
              : "border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary/10"
          } transition-colors`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;