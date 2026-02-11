"use client";
import Image from "next/image";
import { Github, LinkedIn, Logo, Vector } from "../svg";

export default function Nav() {
  return (
    <nav className="flex justify-center min-h-[9.11vh] text-2xl text-white">
      <div
        className={` navbar-between md:px-4 pt-4 w-full max-w-2xl border-b border-white`}
      >
        <div className="md:flex-shrink-0 px-4">
          <Image src={Logo} alt="Logo" width={50} height={50} priority />
        </div>
        <div className={`hidden sm:flex items-center pt-2 gap-5`}>
          <div className={`md:flex flex-row gap-4`}>
            <p className={`pointer lift`}>Home</p>
            <p className={`pointer lift`}>Projects</p>
          </div>
          <div className={`row flex items-center justify-center gap-2`}>
            <a href="https://github.com/Ced-A21">
              <Image
                className="pointer lift"
                src={Github}
                alt="Logo"
                width={27}
                height={27}
                priority
              />
            </a>
            <a
              className={`mb-1`}
              href="https://www.linkedin.com/in/christian-cedrick-alon-367214222/"
            >
              <Image
                className="pointer lift"
                src={LinkedIn}
                alt="Logo"
                width={23}
                height={23}
                priority
              />
            </a>
          </div>
          <div>
            <Image
              className="mb-1 pointer lift"
              src={Vector}
              alt="Logo"
              width={18}
              height={18}
              priority
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
