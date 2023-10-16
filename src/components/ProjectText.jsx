function ProjectText({link, img, alt, site, desc, tech, color, first}) {

	const imgPath = "/src/images/";

	return (
			<div className={first ? "projects__content projects__content_first" : "projects__content projects__content_trigger"} data-color={color}>
				<div className="projects__box">
					<div className="projects__desc">
						<h3 className="projects__text projects__text_site">{site}</h3>
						<p className="projects__text projects__text_desc">{desc}</p>
						<p className="projects__text projects__text_tech">{tech}</p>
					</div>
					<div className="projects__pic-mob">
						<a href={link} className="projects__link-mob" target="_blank" rel="noreferrer">
							<picture>
								<source type="image/webp" media="(min-width: 1024px)" srcSet="/src/images/placeholder.webp"/>
								<source media="(min-width: 1024px)" srcSet="/src/images/placeholder.png"/>
								<source type="image/webp" media="(max-width: 1023px)" srcSet={`${imgPath}${img}_mob.webp, ${imgPath}${img}_mob@2x.webp 2x`} />
								<img
										className="projects__img-mob"
										src={`${imgPath}${img}_mob.png`}
										srcSet={`${imgPath}${img}_mob@2x.png 2x`}
										width="500"
										height="500"
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