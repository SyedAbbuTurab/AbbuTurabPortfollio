import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-20">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-12">
        <img
          src="/profile.jpg"
          alt="Govind Asawa"
          className="w-72 h-auto rounded-lg grayscale"
        />
        <div>
          <h1 className="text-4xl font-bold">Govind Asawa</h1>
          <h2 className="text-purple-400 mt-2">Software Engineer</h2>
          <p className="text-slate-300 mt-1">MS CS @ University Of North Texas '2025</p>

          <div className="grid grid-cols-2 gap-4 mt-4 text-sm text-slate-400">
            <p>🧑 First Name — Govind</p>
            <p>👨 Last Name — Asawa</p>
            <p>📧 Email — govindasawa23@gmail.com</p>
            <p>🎂 DOB — April 23, 1999</p>
            <p>📍 Address — Denton, Texas</p>
            <p>🌐 Languages — English, Hindi, Telugu</p>
          </div>

          <div className="mt-6 flex gap-4">
            <button className="border px-4 py-2 rounded-full border-purple-500 text-purple-300">Resume ⬇</button>
            <button className="border px-4 py-2 rounded-full border-purple-500">Let's Connect →</button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mt-16">
        <h3 className="text-2xl font-semibold mb-6 text-center">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Languages", items: ["Java", "Python", "JavaScript", "Bash", "SQL"] },
            { title: "Backend", items: ["Spring Boot", "Spring MVC", "Hibernate", "Microservices", "Nodejs", "Expressjs", "REST API"] },
            { title: "Databases", items: ["MySql", "Postgres", "MongoDB", "Redis", "TimescaleDB"] },
            { title: "Tools & Methodologies", items: ["Git", "Jira", "Agile", "Vscode", "Eclipse", "Postman", "Intellij", "Docker", "AWS", "CI/CD"] },
            { title: "Frontend", items: ["Reactjs", "Tailwind CSS", "Jquery", "CSS3", "Html"] },
          ].map((section, idx) => (
            <div key={idx} className="border rounded-xl p-4">
              <h4 className="font-bold text-lg mb-2">{section.title}</h4>
              <div className="flex flex-wrap gap-2">
                {section.items.map((item, i) => (
                  <span key={i} className="bg-slate-800 text-purple-300 px-3 py-1 rounded-full text-sm">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mt-16">
        <h3 className="text-2xl font-semibold mb-6 text-center">Experience</h3>
        <div className="space-y-12">
          <div>
            <p className="text-slate-400">Aug 2024 - May 2025</p>
            <h4 className="font-bold">Software Engineer Intern - Copart Inc. | <span className="text-slate-300">Dallas, TX</span></h4>
            <p className="text-slate-400 mt-1">Worked on B2B seller integrations, microservices, forecasting models, and Redis optimization.</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {["Microservices", "Spring Boot", "Hibernate", "Postgres/MariaDB", "Machine Learning", "Python", "Java", "REST API"].map((tech, i) => (
                <span key={i} className="bg-slate-800 text-purple-300 px-2 py-1 rounded text-xs">{tech}</span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-slate-400">Oct 2022 - Aug 2023</p>
            <h4 className="font-bold">Software Engineer - Opentext Technologies | <span className="text-slate-300">India</span></h4>
            <p className="text-slate-400 mt-1">Enhanced a distributed content hub with new features and integrated APIs for asset import.</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {["JavaScript", "Java", "Solr", "AWS", "HTML/CSS", "Shell Scripting"].map((tech, i) => (
                <span key={i} className="bg-slate-800 text-purple-300 px-2 py-1 rounded text-xs">{tech}</span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-slate-400">Jan 2021 - Sept 2022</p>
            <h4 className="font-bold">Associate Software Engineer - Opentext Technologies | <span className="text-slate-300">India</span></h4>
            <p className="text-slate-400 mt-1">Worked on security testing, implemented password encryption using Bash and Java.</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {["JavaScript", "Java", "HTML/CSS", "Shell Scripting"].map((tech, i) => (
                <span key={i} className="bg-slate-800 text-purple-300 px-2 py-1 rounded text-xs">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
