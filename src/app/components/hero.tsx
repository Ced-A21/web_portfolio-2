"use client";

const skills = [
  {
    category: "Frontend",
    items: [
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
    items: [
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
    items: ["Azure", "Docker"],
  },
  {
    category: "Developer Tools",
    items: ["Github", "Git", "VS Code", "Visual Studio"],
  },
];

const Hero: React.FC = () => {
  return (
    <div className="px-4 md:px-0 pt-8 flex w-full max-w-2xl column ">
      <h1>Christian Cedrick Alon</h1>
      <div className="md:flex flex-wrap text-lg leading-relaxed py-5">
        <p>
          I'm a Full-Stack Software Engineer based in the Philippines. I really
          like creating web apps. I first started coding with C# and ASP.Net
          Core, which laid the foundation for my approach to building reliable
          and scalable software.
        </p>

        <p className="mt-4">
          Over time, I’ve worked with Python, PHP, SQL, and different JavaScript
          frameworks, gaining exposure across the full application stack. I
          currently work primarily with C#, Angular, MySQL, and Azure as a job,
          while also exploring modern web technologies through side projects.
        </p>

        <p className="mt-4">
          I particularly enjoy building interfaces with React.js, often
          combining it with modern tools to create scalable and interactive
          applications.
        </p>
      </div>
      <div className={`mt-2`}>
        <h1>Tech Stack</h1>
        <div className={`md:ml-6 space-y-6`}>
          {skills.map((sc) => (
            <div key={sc.category}>
              <h2>{sc.category}</h2>
              <div className="flex flex-wrap gap-2">
                {sc.items.map((item) => (
                  <p key={item} className="opacity-50 text-white px-3 py-1">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
