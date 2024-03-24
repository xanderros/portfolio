const imageUrl = process.env.REACT_APP_IMAGE_URL;

function ProjectFigure({ link, img, alt, first }) {
  return (
    <div
      // className={`projects__cover projects__cover_${
      //   first ? "first" : "hidden"
      // }${link ? " hoverable" : ""}`}
      className={`projects__cover projects__cover_${
        first ? "first" : "hidden"
      }`}
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
            srcSet={`${imageUrl}/placeholder.png`}
          />
          <img
            className="projects__img"
            src={`${imageUrl}/${img}.png?tr=w-314,h-520,dpr-1`}
            srcSet={`${imageUrl}/${img}.png?tr=w-314,h-520,dpr-2 2x`}
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
