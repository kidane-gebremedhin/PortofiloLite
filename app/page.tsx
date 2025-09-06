// app/page.tsx
'use client'; // This component uses client-side hooks like useState, so it must be a Client Component.

import React, { useState } from 'react';

// Main App Component
const App = () => {

  interface Project {
    id: number,
    title: string
    brief: string
    backendDetails: string
    designImg: string
  }

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = [
    {
      id: 1,
      title: "Universal Onboarding",
      brief: "User onboarding platform with a microservices architecture, built for scalability, high availability and high conversion rate. It handles thousands of concurrent users and a high volume of transactions.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Kafka", "Docker", "Kubernetes", "Android"],
      backendDetails: "The core of this system is a set of decoupled microservices for user authentication, product management, order processing, and payment. Communication between services is handled asynchronously via Kafka message queues to ensure high throughput and resilience. The order service utilizes a transactional outbox pattern to guarantee data consistency. We leveraged Docker for containerization and deployed to a Kubernetes cluster for orchestration and self-healing capabilities.",
      designImg: "#"
    },
    {
      id: 2,
      title: "Rails provider API integration for credit service",
      brief: "Integrated third-party finanicial rails provider(Coins.ph) leveraging robust APIs to establish reliable and scalable credit data pipelines, enhancing platform capabilities and streamlining data exchange for cashins and cashouts.",
      technologies: ["Spring boot", "Laravel", "Play Framework", "WebSocket", "RESTful API"],
      backendDetails: "This seamless integration and enhanced performance reduced transaction errors by 60% while boosting the overall credit disbursement and repayment rates. This smooth integration enabled Tala to lend more credit and collect more repayments while collecting service fee from each transaction.",
      designImg: "#"
    },
    {
      id: 3,
      title: "Electronic Medical Record (EMR)",
      brief: "Highly customizable application used by healthcare providers to store, manage, and access comprehensive patient information including medical and treatment history, medications, test results and more. It is designed to improve the quality and efficiency of healthcare delivery by providing timely access to accurate patient information.",
      technologies: ["Java", "Spring boot", "Laravel", "MySQL", "React", "Vue.js", "Git", "AWS"],
      backendDetails: "This EMR application uses a Java/Spring boot for backend with a RESTful APIs and MongoDB as database solution to handle the unstructured behavior of the heathcare data. For authentication and security, we implemented the OAuth2 protocol, providing secure access to the application. The frontend was built with NextJS, TypeScript and CSS to make it user friendly and responsive.",
      designImg: "#"
    },
  ];

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen font-sans antialiased">
      {/* Navbar */}
      <nav className="fixed w-full z-20 top-0 start-0 bg-gray-900/80 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-teal-400">Kidane Gebremedhin</a>
          <div className="space-x-4">
            <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="h-screen flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white animate-fade-in">
              Kidane Gebremedhin
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 animate-slide-up">
              Full-Stack Developer | I help businesses turn ideas into seamless digital experiences
            </p>
            <p className="text-md md:text-lg max-w-2xl mx-auto text-gray-500 animate-slide-up animation-delay-500">
              Building robust, scalable, and resilient systems from the ground up, with a passion for clean architecture and elegant code.
              I have been working with Java, Scala, PHP, Node, and NextJS for the past 6 years, building user-friendly web applications.
              I like solving complex problems, learning new skills, and experimenting with different technologies. When I am not coding, I am probably working on a side project or exploring something new.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">About Me</h2>
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
              <p className="text-lg text-gray-400 mb-6">
                I am a seasoned full-stack developer with a decade of experience focused on the backend. My expertise lies in designing and building complex, enterprise-level systems that can handle significant load and are easy to maintain. My skills in **Java**, **Scala**, and **PHP** have allowed me to architect solutions ranging from high-throughput e-commerce platforms to real-time communication services.

                proactive full-stack developer passionate about creating dynamic web experiences. From frontend to backend, I thrive on solving complex problems with clean, efficient code. My expertise spans React, Next.js, and Node.js, and I am always eager to learn more.
                When I am not immersed in work, I am exploring new ideas and staying curious. Life is about balance, and I love embracing every part of it.
                I believe in waking up each day eager to make a difference!
              </p>
              <p className="text-lg text-gray-400">
                I believe that a great user experience starts with a solid foundation. While I am proficient in modern JavaScript frameworks, my true passion is in optimizing database queries, designing resilient microservices, and setting up efficient DevOps pipelines. I am always looking for the next technical challenge to solve.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 bg-gray-800">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">My Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Backend */}
              <div className="bg-gray-700 p-6 rounded-xl shadow-md border border-gray-600">
                <h3 className="text-2xl font-semibold mb-4 text-teal-400">Backend Development</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Languages: Java, Scala, PHP, Node.js</li>
                  <li>Frameworks: Spring Boot, Play Framework, Laravel, Yii</li>
                  <li>Concepts: Microservices, RESTful APIs, Caching</li>
                </ul>
              </div>
              {/* Databases */}
              <div className="bg-gray-700 p-6 rounded-xl shadow-md border border-gray-600">
                <h3 className="text-2xl font-semibold mb-4 text-teal-400">Databases & Data</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Relational: PostgreSQL, MySQL</li>
                  <li>NoSQL: MongoDB, Firebase</li>
                  <li>Data: SQL, PL/pgSQL, Snowflake, Sumologic</li>
                </ul>
              </div>
              {/* DevOps & Cloud */}
              <div className="bg-gray-700 p-6 rounded-xl shadow-md border border-gray-600">
                <h3 className="text-2xl font-semibold mb-4 text-teal-400">DevOps & Cloud</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Cloud: AWS, Vercel</li>
                  <li>Containers: Docker, Kubernetes</li>
                  <li>CI/CD: GitHub Actions, Jenkins</li>
                </ul>
              </div>
              {/* Frontend */}
              <div className="bg-gray-700 p-6 rounded-xl shadow-md border border-gray-600">
                <h3 className="text-2xl font-semibold mb-4 text-teal-400">Frontend and Mobile</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Frameworks: NextJS, React, Vue.js, Flutter, Android</li>
                  <li>Languages: JavaScript (ES6+), TypeScript, Dart, Java/Kotlin</li>
                  <li>Styling: Tailwind CSS, CSS3</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Projects & Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 transform transition-all hover:scale-105">
                  <h3 className="text-2xl font-semibold mb-2 text-teal-400">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.brief}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-teal-700/50 text-teal-200 text-sm font-medium px-2.5 py-0.5 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button onClick={() => handleOpenModal(project)} className="px-4 py-2 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-75 transition-all duration-200">
                    View Case Study
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/90 backdrop-blur-sm">
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
              <button onClick={handleCloseModal} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className="text-3xl font-bold text-teal-400 mb-4">{selectedProject.title}</h3>
              <p className="text-gray-400 text-lg mb-6">{selectedProject.brief}</p>

              <h4 className="text-xl font-semibold text-white mb-2">Backend & System Design</h4>
              <p className="text-gray-400 mb-6">{selectedProject.backendDetails}</p>

              <h4 className="text-xl font-semibold text-white mb-2">Architecture Diagram</h4>
              <div className="bg-gray-700 rounded-lg overflow-hidden mb-6">
                <img src={selectedProject.designImg} alt="System Architecture Diagram" className="w-full h-auto object-cover"/>
              </div>
              <div className="flex gap-4">
                <a href="#" className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors">
                  Link to Live Demo
                </a>
                <a href="#" className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors">
                  Link to GitHub Repo
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-gray-800">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Get in Touch</h2>
            <div className="text-center space-y-4">
              <p className="text-lg text-gray-400">
                I am always open to discussing new projects, technical challenges, or collaboration opportunities.

                I am available for full-time roles & freelance projects.
                I thrive on crafting dynamic web applications, and delivering seamless user experiences.
              </p>
              <div className="flex justify-center gap-4">
                <a href="kidane12g@gmail.com" className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-all">
                  Email Me
                </a>
                <a target='_blank' href="https://www.linkedin.com/in/kidane-gebremedhin/" className="px-6 py-3 bg-gray-700 text-gray-300 font-semibold rounded-lg shadow-md hover:bg-gray-600 transition-all">
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-8 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Kidane Gebremedhin.</p>
      </footer>
    </div>
  );
};

export default App;
