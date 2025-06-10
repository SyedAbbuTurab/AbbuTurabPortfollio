import React from "react";

function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-white font-cursive text-3xl">Govind</h1>

        <ul className="hidden md:flex gap-8 text-white text-sm font-medium">
          <li onClick={() => scrollTo("home")} className="cursor-pointer hover:text-purple-400">Home</li>
          <li onClick={() => scrollTo("about")} className="cursor-pointer hover:text-purple-400">About</li>
          <li onClick={() => scrollTo("experience")} className="cursor-pointer hover:text-purple-400">Experience</li>
          <li onClick={() => scrollTo("projects")} className="cursor-pointer hover:text-purple-400">Projects</li>
          <li onClick={() => scrollTo("contact")} className="cursor-pointer hover:text-purple-400">Contact</li>
          <li onClick={() => scrollTo("resume")} className="cursor-pointer hover:text-purple-400">Resume</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
