"use client";

import { useState } from "react";
import Link from "next/link";
import ProjectFilter from "@/components/projects/ProjectFilter";
import ProjectCard from "@/components/projects/ProjectCard";
import { Project } from "@/lib/data";

interface ProjectsClientProps {
  initialProjects: Project[];
}

const ProjectsClient = ({ initialProjects }: ProjectsClientProps) => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(initialProjects);

  return (
    <>
      {/* Filter section */}
      <ProjectFilter 
        projects={initialProjects} 
        onFilter={setFilteredProjects} 
      />

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">No projects found matching the selected filter.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectsClient;