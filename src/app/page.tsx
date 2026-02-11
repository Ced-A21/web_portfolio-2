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
      <header className={`fixed top-0 left-0 right-0 z-50 header-color`}>
        <Nav />
      </header>
      <main className={`p-2`}>
        <section
          className={`flex justify-center md:w-full pt-[12vh] md:pt-[9.11vh]`}
        >
          <Hero skills={skills} />
        </section>
        <section className={`flex justify-center md: w-full`}>
          <Experience experience={exp} />
        </section>
        <footer className={`flex justify-center md:w-full pt-20`}>
          <Footer />
        </footer>
      </main>
    </>
  );
}
