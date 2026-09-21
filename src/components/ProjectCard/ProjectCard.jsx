import "./projectCard.scss";
import TechIcons from "../TechIcons/TechIcons";
import ScrambleText from "../ScrambleText/ScrambleText.jsx";

export default function ProjectCard({
    title,
    desc,
    techs = [],
    live,
    results,
    achievements = [],
    icon,
    viewProjectLabel
}) {
  const hasAchievements = achievements.length > 0;

  return (
    <article className="project-slide">
      <div className="project-slide__content">
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
            live && (
              <a href={live} target="_blank" rel="noopener noreferrer" className="tech-icons__pill repo-link">
                <img src="/project-icons/boost-for-reddit-svgrepo-com.svg" alt="" className="tech-icons__icon" />
                <ScrambleText as="span" stableWidth className="tech-icons__label" text={viewProjectLabel} />
              </a>
            )
          }
        />
      </div>
    </article>
  );
}
