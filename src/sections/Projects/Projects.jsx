import { useEffect, useRef, useState } from "react";
import { projectsData } from "../../data/dataSource.js";
import useActiveSection from "../../contexts/useActiveSection.js";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import Reveal from "../../components/Reveal/Reveal.jsx";
import useLanguage from "../../contexts/useLanguage.js";
import { MinimarketIcon, PokedexIcon } from "../../components/ProjectCard/projectIcons.jsx";
import "./projects.scss";

const PROJECT_ICONS = {
  project1: <MinimarketIcon />,
  project2: <PokedexIcon />,
};

const AUTO_ADVANCE_MS = 6000;
const WHEEL_LOCK_MS = 700;

export default function Projects() {
  const { translation } = useLanguage();
  const translatedProjects = translation.projects;
  const { setRef } = useActiveSection();
  const projectEntries = Object.entries(translatedProjects);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(null);
  const carouselRef = useRef(null);
  const wheelLockRef = useRef(false);
  const slideMeasureRef = useRef(null);

  useEffect(() => {
    const el = slideMeasureRef.current;
    if (!el || typeof ResizeObserver === "undefined") return undefined;

    const observer = new ResizeObserver((entries) => {
      setViewportHeight(entries[0].contentRect.height);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Preload every slide's image up front so switching slides never shows
    // an un-measured image at its CSS fallback width before shrinking down.
    Object.keys(translatedProjects).forEach((id) => {
      const src = projectsData[id]?.img;
      if (src) new Image().src = src;
    });
  }, [translatedProjects]);

  useEffect(() => {
    if (isPaused || projectEntries.length <= 1) return undefined;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % projectEntries.length);
    }, AUTO_ADVANCE_MS);

    return () => clearInterval(timer);
  }, [isPaused, projectEntries.length, activeIndex]);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el || projectEntries.length <= 1) return undefined;

    const handleWheel = (e) => {
      e.preventDefault();
      if (wheelLockRef.current) return;
      wheelLockRef.current = true;

      const direction = e.deltaY > 0 ? 1 : -1;
      setActiveIndex((current) => (current + direction + projectEntries.length) % projectEntries.length);

      setTimeout(() => {
        wheelLockRef.current = false;
      }, WHEEL_LOCK_MS);
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [projectEntries.length]);

  const [projectId, proj] = projectEntries[activeIndex] || [];
  const staticData = projectId ? projectsData[projectId] : null;

  return (
    <section ref={setRef("projects")} id="projects">
      <Reveal sectionId="projects">
        <SectionTitle id="projects" title={translation.sections.projects} />
      </Reveal>

      <div className="projects">
        <div
          ref={carouselRef}
          className="projects-carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {staticData && (
            <div
              className="projects-carousel__viewport"
              style={viewportHeight ? { height: `${viewportHeight}px` } : undefined}
            >
              <div ref={slideMeasureRef} className="projects-carousel__slide-measure">
                <ProjectCard
                  key={projectId}
                  title={proj.role}
                  desc={proj.description}
                  image={staticData.img}
                  techs={staticData.tech}
                  results={translation.labels.keyResults}
                  achievements={proj.achievements}
                  live={staticData.liveUrl}
                  code={staticData.codeUrl}
                  icon={PROJECT_ICONS[projectId]}
                  viewRepoLabel={translation.labels.viewRepo}
                />
              </div>
            </div>
          )}

          {projectEntries.length > 1 && (
            <div className="projects-carousel__dots">
              {projectEntries.map(([id], index) => (
                <button
                  key={id}
                  type="button"
                  className={`projects-carousel__dot ${index === activeIndex ? "is-active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`${translation.labels.viewProject} ${index + 1}`}
                  aria-current={index === activeIndex}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
