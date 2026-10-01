"use client";

import { useState } from "react";

const projects = [
  {
    title: "Inventory Management System",

    description:
      "A web-based inventory management system designed to manage products, stock, suppliers, and inventory transactions. for live Demo Login with staff@inventory.com pass: staff123",

    technologies: ["Next.js", "Firebase", "Firestore"],

    // EXAMPLE: replace with your actual screenshots
    images: [
      "/img/inventory-01.png",
      "/img/inventory-03.png",
      "/img/inventory-04.png",
      "/img/inventory-05.png",
      "/img/inventory-06.png",
    ],

    // EXAMPLE: replace with your real links
    github: "https://github.com/m-A-i-VA-n/Sistem-Inventory",
    demo: "https://sistem-inventory-one.vercel.app/login",
  },

  // EXAMPLE PROJECT 2
  // {
  //   title: "Another Project",
  //   description: "Project description...",
  //   technologies: ["React", "Node.js"],
  //   images: [
  //     "/projects/project2-01.png",
  //     "/projects/project2-02.png",
  //   ],
  //   github: "https://github.com/...",
  //   demo: "https://example.com/...",
  // },
];

function ProjectCard({
  project,
  number,
}: {
  project: (typeof projects)[number];
  number: number;
}) {
  const [currentImage, setCurrentImage] = useState(0);

  function nextImage() {
    setCurrentImage((current) =>
      current === project.images.length - 1 ? 0 : current + 1
    );
  }

  function previousImage() {
    setCurrentImage((current) =>
      current === 0 ? project.images.length - 1 : current - 1
    );
  }

  return (
    <article className="project-card">

      {/* Screenshot Gallery */}
      <div className="project-gallery-column">
        <div className="project-gallery">

        <img
          src={project.images[currentImage]}
          alt={`${project.title} screenshot ${currentImage + 1}`}
        />

        {project.images.length > 1 && (
          <>
            <button
              className="gallery-button gallery-previous"
              onClick={previousImage}
              aria-label="Previous screenshot"
            >
              ←
            </button>

            <button
              className="gallery-button gallery-next"
              onClick={nextImage}
              aria-label="Next screenshot"
            >
              →
            </button>

            <div className="gallery-counter">
              {currentImage + 1} / {project.images.length}
            </div>
          </>
        )}
        </div>

        {/* Gallery Dots */}
        {project.images.length > 1 && (
          <div className="gallery-dots">
            {project.images.map((_, index) => (
              <button
                key={index}
                className={`gallery-dot ${
                  currentImage === index ? "active" : ""
                }`}
                onClick={() => setCurrentImage(index)}
                aria-label={`View screenshot ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Project Information */}
      <div className="project-content">

        <p className="project-number">
          {String(number).padStart(2, "0")}
        </p>

        <h3>{project.title}</h3>

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <div className="project-links">

          {/* EXAMPLE LINKS */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub →
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo →
          </a>

        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="projects-header-card">
        <p className="section-label">MY WORK</p>

        <h2>Featured Projects</h2>

        <p className="section-description">
          A selection of projects I've built while learning and
          developing my software engineering skills.
          Some Project cant be published and still under maintenace
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            number={index + 1}
          />
        ))}
      </div>
    </section>
  );
}
