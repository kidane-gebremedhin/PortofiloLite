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
      title: "Distributed E-commerce Platform",
      brief: "An e-commerce system with a microservices architecture, built for scalability and high availability. It handles thousands of concurrent users and a high volume of transactions.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Kafka", "Docker", "Kubernetes"],
      backendDetails: "The core of this system is a set of decoupled microservices for user authentication, product management, order processing, and payment. Communication between services is handled asynchronously via Kafka message queues to ensure high throughput and resilience. The order service utilizes a transactional outbox pattern to guarantee data consistency. We leveraged Docker for containerization and deployed to a Kubernetes cluster for orchestration and self-healing capabilities.",
      designImg: "https://placehold.co/600x400/1f2937/d1d5db?text=System+Architecture+Diagram"
    },
    {
      id: 2,
      title: "Real-time Chat Application",
      brief: "A real-time, WebSocket-based chat application designed to handle thousands of simultaneous connections with low latency. Features include private messaging, group chats, and read receipts.",
      technologies: ["Scala", "Akka", "Play Framework", "Redis", "WebSocket", "GraphQL"],
      backendDetails: "The application's real-time functionality is powered by a Scala backend using the Akka actor model to manage millions of concurrent connections efficiently. The Play Framework provides a robust, stateless foundation, while Redis serves as an in-memory database for rapid caching of session data and recent messages. We implemented a GraphQL API for a more flexible and efficient data retrieval strategy on the client side, minimizing over-fetching.",
      designImg: "https://placehold.co/600x400/1f2937/d1d5db?text=System+Architecture+Diagram"
    },
    {
      id: 3,
      title: "Content Management System (CMS)",
      brief: "A custom CMS built for a media company, enabling them to manage articles, authors, and user permissions. The API is designed to be highly secure and extensible.",
      technologies: ["PHP", "Laravel", "MySQL", "Vue.js", "OAuth2"],
      backendDetails: "This CMS uses a PHP/Laravel backend with a RESTful API. We designed a normalized MySQL database schema to handle complex relationships between content types, authors, and user roles. For authentication and security, we implemented the OAuth2 protocol, providing secure access to the API for both internal and third-party applications. The backend includes a robust permission system, ensuring users can only access and modify content they are authorized to.",
      designImg: "https://placehold.co/600x400/1f2937/d1d5db?text=System+Architecture+Diagram"
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
              Backend-Focused Full-Stack Developer | System Design Expert
            </p>
            <p className="text-md md:text-lg max-w-2xl mx-auto text-gray-500 animate-slide-up animation-delay-500">
              Building robust, scalable, and resilient systems from the ground up, with a passion for clean architecture and elegant code.
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
                  <li>Frameworks: Spring Boot, Play Framework, Laravel</li>
                  <li>Concepts: Microservices, RESTful/GraphQL API Design, Caching, Concurrency</li>
                </ul>
              </div>
              {/* Databases */}
              <div className="bg-gray-700 p-6 rounded-xl shadow-md border border-gray-600">
                <h3 className="text-2xl font-semibold mb-4 text-teal-400">Databases & Data</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Relational: PostgreSQL, MySQL</li>
                  <li>NoSQL: MongoDB, Redis, Cassandra</li>
                  <li>Messaging: Kafka, RabbitMQ</li>
                </ul>
              </div>
              {/* DevOps & Cloud */}
              <div className="bg-gray-700 p-6 rounded-xl shadow-md border border-gray-600">
                <h3 className="text-2xl font-semibold mb-4 text-teal-400">DevOps & Cloud</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Cloud: AWS, GCP</li>
                  <li>Containers: Docker, Kubernetes</li>
                  <li>CI/CD: GitHub Actions, Jenkins</li>
                </ul>
              </div>
              {/* Frontend */}
              <div className="bg-gray-700 p-6 rounded-xl shadow-md border border-gray-600">
                <h3 className="text-2xl font-semibold mb-4 text-teal-400">Frontend Development</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Frameworks: React, Vue.js</li>
                  <li>Languages: JavaScript (ES6+), TypeScript</li>
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
