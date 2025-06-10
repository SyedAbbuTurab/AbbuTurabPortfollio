import React from "react";
import Navbar from "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faQuora,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <>
      <Navbar />

      {/* Home Section */}
      <section
        id="home"
        className="pt-24 min-h-screen bg-gradient-to-b from-black to-slate-900 text-white flex flex-col items-center justify-center px-4 py-16"
      >
        <header className="text-center mb-10">
          <img
            src="/profile.jpg"
            alt="Abbu Turab Syed"
            className="w-40 h-40 rounded-full mx-auto border-4 border-purple-500 shadow-lg"
          />
          <h1 className="text-5xl font-cursive mt-6">Abbu Turab Syed</h1>
          <h2 className="text-xl text-purple-400 mt-2">Software Engineer</h2>
          <p className="text-slate-300 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            A Full stack developer & Machine Learning enthusiast with a passion
            for building innovative solutions. I thrive on solving complex
            problems to create cutting-edge applications.
          </p>
        </header>

        <div className="flex gap-6 text-2xl text-white mb-6">
          <a
            href="https://www.linkedin.com/in/abbuturabsyed/"
            className="hover:text-purple-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="#"
            className="hover:text-purple-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="#"
            className="hover:text-purple-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faMedium} />
          </a>
          <a
            href="#"
            className="hover:text-purple-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faQuora} />
          </a>
        </div>

        <div className="text-slate-400 text-3xl animate-bounce">↓</div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen px-6 py-20 text-white bg-black"
      >
        <section
          id="about"
          className="w-full min-h-screen bg-black text-white px-6 py-16 flex flex-col md:flex-row justify-center items-start gap-12"
        >
          {/* Left - Profile Image */}
          <div>
            <img
              src="/profile.jpg"
              alt="Abbu Turab Syed"
              className="w-72 h-auto rounded-lg grayscale shadow-lg"
            />
          </div>

          {/* Right - Details */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold">Abbu Turab Syed</h2>
            <h3 className="text-purple-400 text-sm">Software Engineer</h3>
            <p className="text-slate-400 text-sm mb-6">
              MS CS @ University of North Texas '2025
            </p>
            <hr className="border-slate-700 mb-6" />

            {/* Grid Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 text-sm text-slate-300">
              <p>
                <span className="text-purple-300">○ First Name</span> — Abbu Turab
              </p>
              <p>
                <span className="text-purple-300">○ Last Name</span> — Syed
              </p>
              <p>
                <span className="text-purple-300">○ Email</span> — syedabbuturab@gmail.com
              </p>
              <p>
                <span className="text-purple-300">○ DOB</span> — 21st of June, 1996
              </p>
              <p>
                <span className="text-purple-300">○ Address</span> — Chicago, IL
              </p>
              <p>
                <span className="text-purple-300">○ Languages</span> — English, Hindi, Telugu
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <a
                href="/resume.pdf"
                download
                className="border border-purple-400 px-6 py-2 rounded-full text-purple-300 hover:bg-purple-500 hover:text-white transition flex items-center gap-2"
              >
                <span className="material-icons">visibility</span> Resume ⬇
              </a>
              <a
                href="#contact"
                className="border px-6 py-2 rounded-full hover:bg-white hover:text-black transition flex items-center gap-2"
              >
                Let’s Connect →
              </a>
            </div>
          </div>
        </section>

      </section>

      {/* Future Sections: Experience, Projects, etc. */}
    </>
  );
}

export default App;
