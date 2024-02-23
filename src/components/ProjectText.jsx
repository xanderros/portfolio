const imageUrl = process.env.REACT_APP_IMAGE_URL;

function ProjectText({ link, img, alt, site, desc, tech, color, first }) {
  return (
    <div
      className={
        first
          ? "projects__content projects__content_first"
          : "projects__content projects__content_trigger"
      }
      data-color={color}
    >
      <div className="projects__box">
        <div className="projects__desc">
          <h3 className="projects__text projects__text_site">{site}</h3>
          <p className="projects__text projects__text_desc">{desc}</p>
          <p className="projects__text projects__text_tech">{tech}</p>
        </div>
        <div className="projects__pic-mob">
          <a
            href={link}
            className="projects__link-mob"
            target="_blank"
            rel="noreferrer"
          >
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet={`${imageUrl}/${img}_mob.png?tr=w-300,h-300,dpr-1, ${imageUrl}/${img}_mob.png?tr=w-300,h-300,dpr-2 2x`}
              />
              <source
                media="(min-width: 1024px)"
                srcSet={`${imageUrl}/placeholder.png`}
              />
              <img
                className="projects__img-mob"
                src={`${imageUrl}/${img}_mob.png?tr=w-372,h-372,dpr-1`}
                srcSet={`${imageUrl}/${img}_mob.png?tr=w-372,h-372,dpr-2 2x`}
                width="372"
                height="372"
                alt={alt}
              />
            </picture>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectText;
