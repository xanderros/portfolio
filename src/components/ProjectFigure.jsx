function ProjectFigure({ link, img, alt, first }) {
  const imgPath = "/src/images/";

  return (
    <div
      className={
        first
          ? "projects__cover projects__cover_first"
          : "projects__cover projects__cover_hidden"
      }
    >
      <a
        href={link}
        className="projects__link"
        target="_blank"
        rel="noreferrer"
      >
        <picture>
          <source
            media="(max-width: 1023px)"
            srcSet="/src/images/placeholder.png"
          />
          <source
            type="image/webp"
            media="(max-width: 1023px)"
            srcSet="/src/images/placeholder.webp"
          />
          <source
            type="image/webp"
            media="(min-width: 1024px)"
            srcSet={`${imgPath}${img}.webp, ${imgPath}${img}@2x.webp 2x`}
          />
          <img
            className="projects__img"
            src={`${imgPath}${img}.png`}
            srcSet={`${imgPath}${img}@2x.png 2x`}
            width="314"
            height="520"
            alt={alt}
          />
        </picture>
      </a>
    </div>
  );
}

export default ProjectFigure;
