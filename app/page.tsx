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
    technologies: string[]
    systemDesignDetails: string
    link: string
  }

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = [
    {
      id: 1,
      title: "AI Customer Service Chatbot",
      brief: "A multi-tenant AI support platform that lets any business drop a chat widget onto its site and deflect repetitive support conversations to an agent grounded in its own knowledge base. Operators get a real-time inbox, human handoff, analytics, and self-serve billing, so the product onboards and monetizes customers without engineering in the loop. Retrieval is namespaced per organization and agent, making tenant isolation a hard architectural guarantee rather than a policy promise.",
      technologies: ["TypeScript", "Next.js", "React", "Express", "MongoDB", "Redis", "Socket.io", "RAG", "Pinecone", "OpenRouter", "Firecrawl", "NextAuth", "Paddle", "MinIO", "Turborepo", "Tailwind CSS", "Docker", "GitHub Actions"],
      systemDesignDetails: "A pnpm and Turborepo monorepo of four apps (operator dashboard, chat widget, embed loader, and an Express + Socket.io API) plus three shared packages for UI primitives, cross-app types, and tooling config. The RAG pipeline turns a visitor message into a grounded answer through parse, chunk, embed, retrieve, and generate: uploaded documents and crawled websites (Firecrawl) are chunked and embedded into a 1536-dimension Pinecone index namespaced per organization and agent, then the retrieved chunks are passed to an OpenRouter LLM as grounding context. That namespacing is the core safety property of the product: one tenant's data can never surface in another tenant's answer, which is what makes the platform sellable to businesses at all. Grounding every response in retrieved context is also the anti-hallucination strategy, keeping the agent trustworthy enough to put in front of paying customers. Live conversations and human handoff run over Socket.io backed by Redis so a visitor can escalate to a person mid-thread without losing history, authentication uses NextAuth with Google OAuth and JWTs, billing runs through Paddle, and file storage sits on S3-compatible MinIO. Local infrastructure is Docker Compose, and CI/CD runs through GitHub Actions into Coolify.",
      link: ""
    },
    {
      id: 2,
      title: "Distributed Retail Platform",
      brief: "An event-driven retail platform that keeps inventory and order state accurate in real time across millions of requests, so the business stops overselling stock it does not have and customers see the truth at checkout. Decomposing the domain into Spring Boot microservices let teams ship independently instead of queueing behind a single release train, and contained failures so a degraded payments or fulfillment path never takes the storefront down with it.",
      technologies: ["Java", "Spring Boot", "Python", "FastAPI", "Microservices", "PostgreSQL", "MongoDB", "Kafka", "Redis", "Grafana", "Docker", "Kubernetes", "AWS", "Git", "React", "NextJS", "REST APIs", "gRPC"],
      systemDesignDetails: "A decentralized, loosely coupled architecture where each business capability owns its own service and data store. Services communicate synchronously over REST and gRPC where a caller genuinely needs an answer now, and asynchronously over Kafka everywhere else, so a slow downstream dependency creates backpressure instead of a cascading outage. Inventory and order state propagate as events, which is what makes real-time accuracy achievable at this volume without lock contention on a shared database. Redis absorbs hot read traffic on catalog and inventory lookups. The whole platform runs containerized on Kubernetes for self-healing and horizontal scale during demand spikes, with Grafana dashboards over service health, latency, and operational logs so problems are caught from telemetry rather than from customer complaints.",
      link: ""
    },
    {
      id: 3,
      title: "Universal Onboarding",
      brief: "A customer onboarding platform that turns a cold signup into a funded borrower with no human in the loop: registration, credit application, KYC submission and evaluation, and disbursement are all automated end to end. Every manual step removed is a step applicants no longer drop out of, so the architecture is built around conversion as much as throughput. It sustains thousands of concurrent users and high transaction volume, because during an acquisition push, onboarding downtime is lost originations that never come back.",
      technologies: ["Java", "Spring Boot", "Redis", "Python", "FastAPI", "PostgreSQL", "Scala", "Play Framework", "Kafka", "Docker", "Kubernetes", "AWS", "Git", "Android", "React", "NextJS", "REST APIs", "gRPC"],
      systemDesignDetails: "The system is a set of decoupled microservices split along the onboarding funnel: identity and authentication, credit application intake, KYC document submission and evaluation, decisioning, and disbursement. Stages communicate asynchronously over Kafka, so a slow third-party KYC or bureau call never blocks the applicant-facing path and the funnel degrades gracefully instead of failing outright. Disbursement uses a transactional outbox so a payout is recorded and emitted exactly once, which matters when the failure mode is double-paying real money. Redis caches session and decisioning state to keep the applicant experience fast under load. Everything is containerized with Docker and deployed to Kubernetes for orchestration, self-healing, and elastic scale during campaign-driven traffic spikes, with mobile and web clients sharing the same service contracts.",
      link: "https://tala.co"
    },
    {
      id: 4,
      title: "Rails provider API integration for credit service",
      brief: "Integrated Coins.ph as a financial rails provider so customers could move money in and out of the platform directly, unlocking a payment channel the business could not previously reach and removing a manual reconciliation burden from operations. Money movement is unforgiving, so the pipeline was built security-first and reconciliation-first: every deposit and withdrawal is idempotent, auditable, and provably settled against the provider.",
      technologies: ["Java", "Spring boot", "Redis", "Kafka", "Laravel", "Python", "FastAPI", "Scala", "Play Framework", "WebSocket", "RESTful API", "Git"],
      systemDesignDetails: "Security and compliance drove the design: digital signatures and HMAC authentication on every request, with the integration built to satisfy the relevant financial regulations end to end. Reliability came from idempotency keys, bounded retries, and circuit breakers, so a provider outage degrades into a queued transaction rather than a lost or duplicated one. Message queues and webhooks carry asynchronous status updates, keeping the platform eventually consistent with the provider without holding user requests open. Clear error taxonomies, comprehensive logging, and alerting make failures diagnosable in minutes, and an automated reconciliation process gives accounting a daily, provable match between platform records and provider settlement, which is the difference between a payments integration finance can trust and one they cannot sign off on.",
      link: "https://tala.co"
    },
    {
      id: 5,
      title: "Electronic Medical Record (EMR)",
      brief: "An Electronic Medical Record system that gives clinicians one current view of a patient at the point of care: medical and treatment history, medications, and test results in a single place, instead of scattered across paper files and disconnected systems. Faster access to accurate records means less time chasing charts, fewer avoidable errors from missing history, and more of the visit spent on the patient. Built to be highly customizable so each provider can model its own clinical workflows without a separate fork of the product.",
      technologies: ["Java", "Spring boot", "Python", "FastAPI", "Laravel", "YII", "MySQL", "Git", "AWS", "Flutter", "Vue", "NextJS", "REST APIs", "gRPC", "Redis"],
      systemDesignDetails: "The backend is built on Java and Spring Boot with Python and FastAPI services alongside PHP (Laravel and Yii) modules, exposed through RESTful APIs and gRPC, over MySQL as the system of record, chosen because clinical and billing data are highly relational and demand referential integrity. Redis caches frequently accessed patient context so record lookups stay fast during a consultation. Access control is enforced with OAuth2 and JSON Web Tokens, with role-scoped permissions and audit trails, since patient data carries real regulatory and privacy obligations rather than merely technical ones. Clinicians reach the system through a Flutter mobile app and Vue and Next.js web clients sharing the same API contracts, so a provider can adopt the workflow that fits its practice, and the platform is deployed on AWS.",
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
    <div className="bg-zinc-950 text-zinc-300 min-h-screen font-sans antialiased">
      {/* Navbar */}
      <nav className="fixed w-full z-20 top-0 start-0 bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="text-xl font-bold"><GradientText>Kidane Gebremedhin</GradientText></a>
          <div className="space-x-4">
            <a href="#about" className="hover:text-sage-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-sage-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-sage-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-sage-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="h-screen flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-zinc-400 mb-2">Hi, my name is</p>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-zinc-100 animate-fade-in">
              <GradientText>Kidane Gebremedhin</GradientText>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 mb-8 animate-slide-up">
              Senior Full-Stack &amp; AI Engineer | I design distributed, highly available systems, and the AI agents that run on top of them.
            </p>
            <p className="text-md md:text-lg max-w-2xl mx-auto text-zinc-500 animate-slide-up animation-delay-500">
              Seven years architecting fault-tolerant systems in FinTech, Healthcare, and Education with Java, Spring Boot, Python, FastAPI, Node.js, React, and Next.js. These are platforms that move real money, onboard real customers, and cannot afford to be down.
              Today I bring that same discipline to AI products: RAG pipelines, agentic workflows built with LangGraph and LangChain, and multi-tenant LLM services that stay grounded, observable, and affordable under production traffic. I treat an AI feature as a distributed system with a probabilistic component, not a demo, which means hard tenant isolation, evaluation before shipping, and sane behaviour when the model or the vendor has a bad day. I like hard problems, and I care most about the ones where good engineering shows up on the business ledger.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-zinc-100">About Me</h2>
            <div className="bg-zinc-900 p-8 rounded-xl shadow-lg border border-zinc-800">
              <p className="text-lg text-zinc-400 mb-6">
                I am a senior full-stack engineer with 7 years of experience designing enterprise systems in FinTech, Healthcare, and Education, the kind where an outage means lost originations, a delayed diagnosis, or a payment that cannot be reconciled. My work spans high-throughput lending and onboarding platforms, event-driven retail systems, financial rails integrations, and clinical record systems, built with Java, Spring Boot, Python, FastAPI, PHP, Node.js, React, and Next.js. I optimize for systems that survive contact with production and stay cheap to maintain years later.
              </p>
              <p className="text-lg text-zinc-400">
                Increasingly that work is AI-shaped: retrieval-augmented generation, vector search, agent orchestration with LangGraph and LangChain, tool-calling and MCP integrations, and multi-tenant LLM platforms serving real customers. The engineering problems that decide whether an AI product succeeds are rarely the model. They are retrieval quality, tenant isolation, evaluation, latency, and cost per conversation. That is the layer I work at: grounding answers so the system can be trusted in front of customers, isolating tenants so it can be sold to businesses, and instrumenting everything so regressions are caught by telemetry rather than by users. Underneath it all I am still the engineer who enjoys profiling a slow query, drawing service boundaries that hold up, and designing APIs other teams are glad to build on.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 bg-zinc-900">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-zinc-100">My Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Engineering */}
              <div className="bg-zinc-800 p-6 rounded-xl shadow-md border border-zinc-700">
                <h3 className="text-2xl font-semibold mb-4 text-sage-400">AI Engineering</h3>
                <ul className="list-disc list-inside space-y-2 text-zinc-300">
                  <li>Agents &amp; orchestration: AI agents, LangGraph, LangChain, multi-step workflows, tool calling, MCP, human-in-the-loop</li>
                  <li>RAG &amp; retrieval: Pinecone, embeddings, chunking strategies, hybrid search, re-ranking, grounding &amp; citations</li>
                  <li>LLMOps: prompt engineering, evaluation harnesses, guardrails, tracing, token &amp; cost optimization</li>
                  <li>Providers &amp; tooling: OpenAI, Anthropic, OpenRouter, Firecrawl, OpenAI-compatible APIs</li>
                </ul>
              </div>
              {/* Backend */}
              <div className="bg-zinc-800 p-6 rounded-xl shadow-md border border-zinc-700">
                <h3 className="text-2xl font-semibold mb-4 text-sage-400">Backend Development</h3>
                <ul className="list-disc list-inside space-y-2 text-zinc-300">
                  <li>Languages: Java, Python, Scala, PHP, JavaScript</li>
                  <li>Frameworks: Spring Boot, FastAPI, Play Framework, Laravel, Node.js, Yii, NextJS</li>
                  <li>Concepts: OOP, Design patterns, Microservices, gRPC, RESTful APIs, Event Driven architecture</li>
                </ul>
              </div>
              {/* Databases */}
              <div className="bg-zinc-800 p-6 rounded-xl shadow-md border border-zinc-700">
                <h3 className="text-2xl font-semibold mb-4 text-sage-400">Databases & Data</h3>
                <ul className="list-disc list-inside space-y-2 text-zinc-300">
                  <li>Relational: PostgreSQL, MySQL</li>
                  <li>NoSQL: MongoDB, Firebase</li>
                  <li>Data: SQL, PL/pgSQL, Snowflake, Sumologic</li>
                </ul>
              </div>
              {/* DevOps & Cloud */}
              <div className="bg-zinc-800 p-6 rounded-xl shadow-md border border-zinc-700">
                <h3 className="text-2xl font-semibold mb-4 text-sage-400">DevOps & Cloud</h3>
                <ul className="list-disc list-inside space-y-2 text-zinc-300">
                  <li>Cloud: AWS, Vercel, Supabase</li>
                  <li>Containers: Docker, Kubernetes</li>
                  <li>CI/CD: GitHub Actions, Jenkins</li>
                </ul>
              </div>
              {/* Frontend */}
              <div className="bg-zinc-800 p-6 rounded-xl shadow-md border border-zinc-700">
                <h3 className="text-2xl font-semibold mb-4 text-sage-400">Frontend and Mobile</h3>
                <ul className="list-disc list-inside space-y-2 text-zinc-300">
                  <li>Frameworks: NextJS, React, Vue.js, Flutter, Android</li>
                  <li>Languages: JavaScript, TypeScript, Dart, Java/Kotlin</li>
                  <li>Styling: Tailwind CSS, CSS3</li>
                </ul>
              </div>
              {/* Tools */}
              <div className="bg-zinc-800 p-6 rounded-xl shadow-md border border-zinc-700">
                <h3 className="text-2xl font-semibold mb-4 text-sage-400">Collaboration & Communication Tools</h3>
                <ul className="list-disc list-inside space-y-2 text-zinc-300">
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-zinc-100">Projects & Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-zinc-900 p-6 rounded-xl shadow-lg border border-zinc-800 transition-colors hover:border-zinc-700">
                  <h3 className="text-2xl font-semibold mb-2 text-sage-400">{project.title}</h3>
                  <p className="text-zinc-400 mb-4">{project.brief}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-zinc-800 text-sage-300 border border-zinc-700 text-sm font-medium px-2.5 py-0.5 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button onClick={() => handleOpenModal(project)} className="px-4 py-2 bg-sage-700 text-zinc-100 font-semibold rounded-lg shadow-md hover:bg-sage-600 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-opacity-75 transition-all duration-200">
                    View Case Study
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/90 backdrop-blur-sm">
            <div className="bg-zinc-900 p-8 rounded-xl shadow-2xl border border-zinc-800 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
              <button onClick={handleCloseModal} className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-100 transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className="text-3xl font-bold text-sage-400 mb-4">{selectedProject.title}</h3>
              <p className="text-zinc-400 text-lg mb-6">{selectedProject.brief}</p>

              <h4 className="text-xl font-semibold text-zinc-100 mb-2">System Design</h4>
              <p className="text-zinc-400 mb-6">{selectedProject.systemDesignDetails}</p>

              {selectedProject.link && (
                <div className="flex gap-4">
                  <a target="_blank" href={selectedProject.link} className="px-4 py-2 bg-zinc-800 text-zinc-100 font-semibold rounded-lg border border-zinc-700 hover:bg-zinc-700 transition-colors">
                    Link to Live Application
                  </a>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-zinc-900">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-zinc-100">Get in Touch</h2>
            <div className="text-center space-y-4">
              <p className="text-lg text-zinc-400">
                I am always open to discussing new projects, hard technical problems, or collaboration opportunities, especially work that puts AI in front of real users and has to hold up.

                Available for senior full-stack and AI engineering roles, as well as freelance engagements: greenfield AI products, RAG and agent systems, or scaling an existing platform that has outgrown its architecture.
              </p>
              <div className="flex justify-center gap-4">
                <a target='_blank' href="https://www.linkedin.com/in/kidane-gebremedhin/" className="px-6 py-3 bg-zinc-800 text-zinc-300 font-semibold rounded-lg shadow-md border border-zinc-700 hover:bg-zinc-700 transition-all">
                  Lets Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 text-center py-8 text-zinc-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Kidane Gebremedhin.</p>
      </footer>
    </div>
  );
};

export default App;
