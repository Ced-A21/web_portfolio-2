import Image from "next/image";
import Nav from "./components/nav";
import Hero from "./components/hero";

export default function Home() {
  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 header-color`}>
        <Nav />
      </header>
      <section
        className={`flex justify-center md:flex w-full pt-[12vh] md:pt-[9.11vh]`}
      >
        <Hero />
      </section>
    </>
  );
}
