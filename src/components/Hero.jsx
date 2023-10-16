function Hero() {
	return (
			<section className="hero">
				<div className="container">
					<div className="hero__content">
						<div className="hero__desc">
							<div className="hero__name">Hi, I'm Alex</div>
							<h1 className="hero__title">
								I enjoy building robust frontend products with great user experience
							</h1>
						</div>
						<div className="hero__figure">
							<picture>
								<source type="image/webp" media="(max-width: 575px)" srcSet="https://alexkuleshov.com/src/images/avatar_alex_mob.webp, https://alexkuleshov.com/src/images/avatar_alex_mob@2x.webp 2x" />
								<source media="(max-width: 575px)" srcSet="https://alexkuleshov.com/src/images/avatar_alex_mob.jpg, https://alexkuleshov.com/src/images/avatar_alex_mob@2x.jpg 2x" />
								<source type="image/webp" media="(min-width: 576px)" srcSet="https://alexkuleshov.com/src/images/avatar_alex.webp, https://alexkuleshov.com/src/images/avatar_alex@2x.webp 2x" />
								<img className="hero__img" src="https://alexkuleshov.com/src/images/avatar_alex.jpg" srcSet="https://alexkuleshov.com/src/images/avatar_alex@2x.jpg 2x" width="340"height="340" alt="Alexander Kuleshov | Front End Developer" />
							</picture>
						</div>
					</div>
				</div>
			</section>
	);
}

export default Hero;
