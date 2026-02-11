"use client";
type Exp = {
  role: string;
  company: string;
  techStack: string[];
};

type ExpProps = {
  experience: Exp[];
};

const Experience: React.FC<ExpProps> = ({ experience }) => {
  return (
    <div
      className={`px-4 py-6 md:px-0 min-h-[9vh] pt-8 flex w-full max-w-2xl column`}
    >
      <h1>Experience</h1>
      <div className={`md:flex py-4 border-l border-white`}>
        <div className={`px-4 md:ml-6 space-y-6`}>
          {experience.map((exp) => (
            <div key={exp.role}>
              <h2>{exp.role}</h2>
              <p>{exp.company}</p>
              <p>August 2024 - Present</p>
              <div className={`row pt-4 gap-2 items-center justify-center`}>
                <span className={`text-white`}>Tech Stack:</span>
                <div className="flex flex-wrap gap-2 text-white">
                  {exp.techStack.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
