import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faQuora,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-white flex flex-col items-center justify-center px-4 py-16">
      <header className="text-center mb-10">
        <img
          src="/profile.jpg"
          alt="Govind Asawa"
          className="w-40 h-40 rounded-full mx-auto border-4 border-purple-500 shadow-lg"
        />
        <h1 className="text-5xl font-cursive mt-6">Govind Asawa</h1>
        {/* <h1 className="bg-red-500 text-white text-2xl">If this is red, Tailwind works</h1> */}
        <h2 className="text-xl text-purple-400 mt-2">Software Engineer</h2>
        <p className="text-slate-300 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
          A Full stack developer & Machine Learning enthusiast with a passion for building innovative solutions.
          I thrive on solving complex problems to create cutting-edge applications.
        </p>
      </header>

      <div className="flex gap-6 text-2xl text-white mb-6">
        <a href="#" className="hover:text-purple-400"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="#" className="hover:text-purple-400"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="#" className="hover:text-purple-400"><FontAwesomeIcon icon={faMedium} /></a>
        <a href="#" className="hover:text-purple-400"><FontAwesomeIcon icon={faQuora} /></a>
      </div>

      <div className="text-slate-400 text-3xl animate-bounce">↓</div>
    </main>
  );
}

// function App() {
//   return (
//     <div className="bg-red-500 text-white text-2xl p-6">
//       ✅ Tailwind is now working without npx!
//     <h1 className="bg-red-500 text-white text-2xl">If this is red, Tailwind works</h1>

//     </div>
//   );
// }


export default App;
