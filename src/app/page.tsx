import Image from "next/image";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Experience from "./components/experience";
import Footer from "./components/footer";

const skills = [
  {
    category: "Frontend",
    techs: [
      "React.js",
      "Next.js",
      "Angular.js",
      "Typescript",
      "Javascript",
      "TailwindCSS",
      "SCSS",
      "Vite",
    ],
  },
  {
    category: "Backend",
    techs: [
      "Node.js",
      ".NET",
      "Python",
      "MySQL",
      "AzureSQL",
      "MSSql",
      "RestAPI",
      "JWT",
    ],
  },
  {
    category: "DevOps & Version Control",
    techs: ["Azure", "Docker"],
  },
  {
    category: "Developer Tools",
    techs: ["Github", "Git", "VS Code", "Visual Studio"],
  },
];

const exp = [
  {
    role: "Software Engineer",
    company: "YouSource, Inc.",
    techStack: [".NET", "Angular.js", "AzureSQL, AzureDevOps"],
  },
];

export default function Home() {
  return (
    <>
      <section className="flex justify-center w-full p-2">
        <Hero skills={skills} />
      </section>
      <section className="flex justify-center w-full p-2 pt-8">
        <Experience experience={exp} />
      </section>
    </>
  );
}
