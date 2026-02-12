"use client";
import Image from "next/image";
import { LinkIcon } from "../svg";

type Projects = {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
};

type projectProps = {
  projects: Projects[];
};

const Projects: React.FC<projectProps> = ({ projects }) => {
  return (
    <div className={`px-4 md:px-0 w-full max-w-2xl column pt-4`}>
      <h1>Projects</h1>
      <div className={`md:px-4 pt-6`}>
        {projects.map((project) => (
          <div key={project.title} className="pb-8">
            <div className={`flex row gap-2 items-center`}>
              <h2>{project.title}</h2>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="pointer lift"
                    src={LinkIcon}
                    alt="External Link"
                    width={21}
                    height={21}
                    priority
                  />
                </a>
              )}
            </div>
            <p className="opacity-50 px-3 py-1">{project.description}</p>
            <div
              className="flex flex-wrap gap-2"
              style={{ color: "var(--color-text)" }}
            >
              <span>Tech Stack:</span>
              {project.techStack.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
