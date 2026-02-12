import { desc } from "framer-motion/client";
import Projects from "../components/projects";

const projects = [
  {
    title: "Performance Management System",
    description:
      "Contributed to the development of a web-based enterprise system for managing employee performance metrics and organizational risk assessment.",
    techStack: ["Angular.js", ".NET", "Azure SQL", "Azure DevOps"],
  },
  {
    title: "MovieFinder",
    description: "A responsive movie discovery web application",
    techStack: ["React.js", "Vite", "Tailwind CSS", "Appwrite"],
    link: "https://ced-movie-website.vercel.app/",
  },
  {
    title: "Web Porfolio",
    description: "First web portfolio website I created",
    techStack: ["React.js", "TailwindCSS"],
    link: "https://ced-alon-old.vercel.app/",
  },
  {
    title: "Glimpse",
    description:
      "A communicative and classroom engagement aid for visually-impaired students",
    techStack: ["Kotlin", "Socket.IO", "WebRTC"],
  },
  {
    title: "Autopot",
    description: "A web and mobile-based plant monitoring system.",
    techStack: ["PHP", "Bootstrap", "Apache", "Xamarin", "XAMPP"],
    link: "https://github.com/Ced-A21/AutoPot",
  },
  {
    title: "DejaBrew",
    description: "A Full-Stack Ordering and Inventory Management System",
    techStack: [".NET", "SQL", "CSS"],
    link: "https://github.com/Ced-A21/DejaBrew",
  },
  {
    title: "Weather Application",
    description:
      "A simple web application that gets an overview of the weather in a city.",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Ced-A21/Weather-App",
  },
];

export default function ProjectsPage() {
  return (
    <section className="flex justify-center w-full p-2">
      <Projects projects={projects} />
    </section>
  );
}
