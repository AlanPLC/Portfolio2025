import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import "./projectCard.scss";
import TechIcons from "../TechIcons/TechIcons";
import ImageModal from "../ImageModal/ImageModal";
import ScrambleText from "../ScrambleText/ScrambleText.jsx";

export default function ProjectCard({
    title,
    desc,
    image,
    techs = [],
    live,
    code,
    results,
    achievements = [],
    icon,
    viewRepoLabel
}) {
  const [showModal, setShowModal] = useState(false);
  const [imageWidthPx, setImageWidthPx] = useState(null);
  const contentRef = useRef(null);
  const imgRef = useRef(null);
  const hasAchievements = achievements.length > 0;

  const recalcImageWidth = useCallback((rowHeightOverride) => {
    const contentEl = contentRef.current;
    const imgEl = imgRef.current;
    if (!contentEl || !imgEl || !imgEl.naturalWidth) return;

    // Uses layout height (not getBoundingClientRect) so the entrance
    // animation's transform:scale() doesn't distort the measurement.
    const rowHeight = rowHeightOverride ?? parseFloat(getComputedStyle(contentEl).height);
    const ratio = imgEl.naturalWidth / imgEl.naturalHeight;
    setImageWidthPx(Math.round(rowHeight * ratio));
  }, []);

  useLayoutEffect(() => {
    // useLayoutEffect (not useEffect) so a cached image's real width is
    // applied before the browser paints, avoiding a flash at the CSS
    // fallback width (max-width: 50%) that then visibly shrinks down.
    if (imgRef.current?.complete) recalcImageWidth();
  }, [recalcImageWidth]);

  useEffect(() => {
    const contentEl = contentRef.current;
    if (!contentEl || typeof ResizeObserver === "undefined") return undefined;

    const observer = new ResizeObserver((entries) => {
      recalcImageWidth(entries[0].contentRect.height);
    });
    observer.observe(contentEl);
    return () => observer.disconnect();
  }, [recalcImageWidth]);

  return (
    <article className="project-slide">
      <div className="project-slide__content" ref={contentRef}>
        <div className="project-slide__header-row">
          <div className="project-slide__icon-frame" aria-hidden="true">
            {icon}
          </div>
          <ScrambleText as="h3" className="project-slide__title" text={title} />
        </div>

        <ScrambleText as="p" className="project-slide__desc" text={desc} />

        {hasAchievements && (
          <>
            <div className="project-slide__results-label">
              <ScrambleText as="span" text={results} />
            </div>

            <ul className="achievements-list">
              {achievements.map((item, index) => (
                <li key={index}><ScrambleText as="span" text={item} /></li>
              ))}
            </ul>
          </>
        )}

        <TechIcons
          techs={techs}
          action={
            <>
              {code && (
                <a href={code} target="_blank" rel="noopener noreferrer" className="tech-icons__pill repo-link">
                  <img src="/project-icons/code-editor-svgrepo-com.svg" alt="" className="tech-icons__icon" />
                  <ScrambleText as="span" stableWidth className="tech-icons__label" text={viewRepoLabel} />
                </a>
              )}
              {live && (
                <a href={live} target="_blank" rel="noopener noreferrer" className="tech-icons__pill repo-link">
                  <svg viewBox="0 0 24 24" className="tech-icons__icon" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  <span className="tech-icons__label">Live</span>
                </a>
              )}
            </>
          }
        />
      </div>

      <button
        type="button"
        className="project-slide__image-wrap"
        onClick={() => setShowModal(true)}
        aria-label={title}
        style={imageWidthPx ? { flexBasis: `${imageWidthPx}px` } : undefined}
      >
        <img
          ref={imgRef}
          src={image}
          alt={`${title} preview`}
          onLoad={() => recalcImageWidth()}
        />
      </button>

      {showModal && (
        <ImageModal
          src={image}
          alt={`${title} preview`}
          onClose={() => setShowModal(false)}
        />
      )}
    </article>
  );
}
