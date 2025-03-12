import Link from "next/link";
import { projects } from "@/lib/data";
import ProjectsClient from "./page-client";

export const metadata = {
  title: "Projects | Moses Kayuni",
  description: "Explore Moses Kayuni's portfolio of software development and data engineering projects.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Featured Work</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my public projects. Additional professional work is available upon request.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          {/* Use the client component for filtering */}
          <ProjectsClient initialProjects={projects} />
          
          <div className="text-center mt-16">
            <Link 
              href="/contact"
              className="px-8 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}