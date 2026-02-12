"use client";
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="md:min-h-[7vh] w-full max-w-2xl flex justify-center theme-border-t">
      <div className={`flex flex-col items-center`}>
        <button onClick={scrollToTop} className={`button-navs py-2 lift`}>
          Home
        </button>
        <p
          className={`sm:flex align-center text-center opacity-50 text-sm px-4`}
        >
          © 2024 Christian Cedrick Alon. All rights reserved.
        </p>
      </div>
    </div>
  );
}
