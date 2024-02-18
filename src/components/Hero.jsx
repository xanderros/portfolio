const imageUrl = process.env.REACT_APP_IMAGE_URL;

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <div className="hero__desc">
            <div className="hero__name">Hi, I'm Alex</div>
            <h1 className="hero__title">
              I enjoy building robust frontend products with great user
              experience
            </h1>
          </div>
          <div className="hero__figure">
            <picture>
              <source
                media="(max-width: 359px)"
                srcSet={`${imageUrl}/avatar_alex.jpg?tr=w-200,h-200,dpr-1, ${imageUrl}/avatar_alex.jpg?tr=w-200,h-200,dpr-2 2x`}
              />
              <source
                media="(max-width: 575px)"
                srcSet={`${imageUrl}/avatar_alex.jpg?tr=w-240,h-240,dpr-1, ${imageUrl}/avatar_alex.jpg?tr=w-240,h-240,dpr-2 2x`}
              />
              <source
                media="(max-width: 767px)"
                srcSet={`${imageUrl}/avatar_alex.jpg?tr=w-260,h-260,dpr-1, ${imageUrl}/avatar_alex.jpg?tr=w-260,h-260,dpr-2 2x`}
              />
              <img
                className="hero__img"
                src={`${imageUrl}/avatar_alex.jpg?tr=w-340,h-340,dpr-1`}
                srcSet={`${imageUrl}/avatar_alex.jpg?tr=w-340,h-340,dpr-2 2x`}
                width="340"
                height="340"
                alt="Alexander Kuleshov | Front End Developer"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
