// app/page.tsx
'use client'; // This component uses client-side hooks like useState, so it must be a Client Component.

import React, { useState } from 'react';
import GradientText from '@/components/GradientText'

// Main App Component
const App = () => {

  interface Project {
    id: number,
    title: string
    brief: string
    systemDesignDetails: string
    link: string
  }

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = [
    {
      id: 1,
      title: "Distributed Retail Platform",
      brief: "Highly scalable, resilient, and event-driven Distributed Retail Platform (DRP) capable of handling millions of requests and providing real-time inventory and order processing. The platform is built using Spring Boot microservices, ensuring modularity, independent deployment, and fault isolation.",
      technologies: ["Java", "Spring Boot", "Python", "FastAPI", "Microservices", "PostgreSQL", "MongoDB", "Kafka", "Redis", "Grafana", "Docker", "Kubernetes", "AWS", "Git", "React", "NextJS", "REST APIs", "gRPC"],
      systemDesignDetails: "The architecture utilizes a decentralized, loosely coupled approach where each business capability is isolated into a separate service. Microservices talk with each other in Syncronious (REST API, gRPC) and Asynchronous Communication (Event-Driven) fashion. There is also a comprehensive monitoring that provides full visibility into service health, performance, and operational logs.",
      link: ""
    },
    {
      id: 2,
      title: "Universal Onboarding",
      brief: "User onboarding platform with a microservices architecture, built for scalability, high availability and high conversion rate. It handles thousands of concurrent users and a high volume of transactions. This automates the whole user journey from registration, credit application. KYC submission & evaluation, and credit disbursement.",
      technologies: ["Java", "Spring Boot", "Redis", "Python", "FastAPI", "PostgreSQL", "Scala", "Play Framework", "Kafka", "Docker", "Kubernetes", "AWS", "Git", "Android", "React", "NextJS", "REST APIs", "gRPC"],
      systemDesignDetails: "The core of this system is a set of decoupled microservices for user authentication, product management, order processing, and payment. Communication between services is handled asynchronously via Kafka message queues to ensure high throughput and resilience. The order service utilizes a transactional outbox pattern to guarantee data consistency. We leveraged Docker for containerization and deployed to a Kubernetes cluster for orchestration and self-healing capabilities.",
      link: "https://tala.co"
    },
    {
      id: 3,
      title: "Rails provider API integration for credit service",
      brief: "Integrated third-party finanicial rails provider(Coins.ph) leveraging robust APIs to establish reliable and scalable credit data pipelines, enhancing platform capabilities and streamlining data exchange about withdrawals and deposits made by customers.",
      technologies: ["Java", "Spring boot", "Redis", "Kafka", "Laravel", "Python", "FastAPI", "Scala", "Play Framework", "WebSocket", "RESTful API", "Git"],
      systemDesignDetails: "This integration was done with Security and Compliance first, through the application of digital signatures, HMAC authentication and adhering to all relevant regulations. Enforecd Reliability and Availability through Idempotency, Retry Mechanisms, and Circuit Breakers. We used Message Queues and Webhooks for asynchronous processing and transaction status updates. We defined Clear Error Codes, Comprehensive Logging, Alerting, and Reconciliation process for accounting to ensure all transaction records are accurate.",
      link: "https://tala.co"
    },
    {
      id: 4,
      title: "Electronic Medical Record (EMR)",
      brief: "Highly customizable application used by healthcare providers to store, manage, and access comprehensive patient information including medical and treatment history, medications, test results and more. It is designed to improve the quality and efficiency of healthcare delivery by providing timely access to accurate patient information.",
      technologies: ["Java", "Spring boot", "Python", "FastAPI", "Laravel", "YII", "MySQL", "Git", "AWS", "Flutter", "Vue", "NextJS", "REST APIs", "gRPC", "Redis"],
      systemDesignDetails: "This EMR application uses Java/Spring boot, Node.js and RESTful APIs for backend and MongoDB as database solution to handle the unstructured nature of the heathcare data. For authentication and security, we implemented OAuth2 along with JSON Web Tokens (JWTs), providing secure access to the application. The frontend was built with React, NextJS, TypeScript and Tailwind CSS to make it user friendly and responsive.",
      link: ""
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
          <a href="#home" className="text-xl font-bold text-teal-400"><GradientText>Kidane Gebremedhin</GradientText></a>
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
            Hi, My Name is <br />
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white animate-fade-in">
              <GradientText>Kidane Gebremedhin</GradientText>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 animate-slide-up">
              Full-Stack Developer | I build distributed, highly available, and Resilient web applications & services.
            </p>
            <p className="text-md md:text-lg max-w-2xl mx-auto text-gray-500 animate-slide-up animation-delay-500">
              I develop robust, scalable, and fault tolerant systems from the ground up, with a passion for clean architecture and elegant code.
              I have been working with Java, Spring boot, Python, FastAPI, Node.js, React, and NextJS for the past 7 years, building high performance web applications. I like solving complex problems, learning new skills, and experimenting with different technologies. When I am not immersed in work, I am probably working on a side project or exploring something new. I believe in waking up each day eager to make a difference!
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">About Me</h2>
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
              <p className="text-lg text-gray-400 mb-6">
                I am a seasoned full-stack developer with 7 years of experience developing top-notch web services and applications. My expertise lies in designing and building complex, enterprise-level systems in Education, Healthcare, and FinTech industries that can handle significant load and are easy to maintain. My skills in **Java**, **Spring boot**, **Python**, **FastAPI**, **PHP**, **Node.js**, **React** and **NextJS** empowered me to architect solutions ranging from high-throughput FinTech platforms to real-time communication services.
              </p>
              <p className="text-lg text-gray-400">
                I am a proactive full-stack developer passionate about creating reliable web services, from backend to frontend. I believe that a great user experience starts with a solid foundation. While I am proficient in modern JavaScript frameworks, my true passion is in optimizing database queries, designing resilient microservices, and building efficient REST APIs. I am always looking for the next technical challenge to solve.
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
                  <li>Languages: Java, Python, Scala, PHP, JavaScript</li>
                  <li>Frameworks: Spring Boot, FastAPI, Play Framework, Laravel, Node.js, Yii, NextJS</li>
                  <li>Concepts: OOP, Design patterns, Microservices, gRPC, RESTful APIs, Event Driven architecture</li>
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
                  <li>Cloud: AWS, Vercel, Supabase</li>
                  <li>Containers: Docker, Kubernetes</li>
                  <li>CI/CD: GitHub Actions, Jenkins</li>
                </ul>
              </div>
              {/* Frontend */}
              <div className="bg-gray-700 p-6 rounded-xl shadow-md border border-gray-600">
                <h3 className="text-2xl font-semibold mb-4 text-teal-400">Frontend and Mobile</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Frameworks: NextJS, React, Vue.js, Flutter, Android</li>
                  <li>Languages: JavaScript, TypeScript, Dart, Java/Kotlin</li>
                  <li>Styling: Tailwind CSS, CSS3</li>
                </ul>
              </div>
              {/* Tools */}
              <div className="bg-gray-700 p-6 rounded-xl shadow-md border border-gray-600">
                <h3 className="text-2xl font-semibold mb-4 text-teal-400">Collaboration & Communication Tools</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Collaboration: Git, Jira, Confuluence, Lucid Chart</li>
                  <li>Communication: Slack, Discord, Zoom, Google Meet</li>
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

              <h4 className="text-xl font-semibold text-white mb-2">System Design</h4>
              <p className="text-gray-400 mb-6">{selectedProject.systemDesignDetails}</p>

              {selectedProject.link && (
                <div className="flex gap-4">
                  <a target="_blank" href={selectedProject.link} className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors">
                    Link to Live Application
                  </a>
                </div>
              )}
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
                I thrive on crafting efficient web applications, and delivering seamless user experiences.
              </p>
              <div className="flex justify-center gap-4">
                <a target='_blank' href="https://www.linkedin.com/in/kidane-gebremedhin/" className="px-6 py-3 bg-gray-700 text-gray-300 font-semibold rounded-lg shadow-md hover:bg-gray-600 transition-all">
                  Lets Connect on LinkedIn
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
