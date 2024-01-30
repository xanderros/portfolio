import testimonials from "../data/testimonials.js";
import Carousel from "nuka-carousel";

function Testimonials() {
  return (
    <section className="section section_testimonials" id="testimonials">
      <div className="container">
        <h2 className="title">Testimonials</h2>
        <Carousel
          wrapAround="true"
          renderCenterLeftControls={({ previousSlide }) => (
            <button onClick={previousSlide} aria-label="Previous slide">
              <svg
                fill="none"
                width="32"
                height="32"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button onClick={nextSlide} aria-label="Next slide">
              <svg
                fill="none"
                width="32"
                height="32"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          )}
          renderBottomCenterControls={({
            slideCount,
            currentSlide,
            goToSlide,
          }) => (
            <div
              className="slider-control-bottomcenter-list"
              role="group"
              aria-label="Slide controls"
            >
              {[...Array(slideCount)].map((e, key) => (
                <div
                  className={
                    currentSlide == key ? "paging-item active" : "paging-item"
                  }
                  key={key}
                >
                  <button
                    type="button"
                    aria-label={"Go to slide " + (key + 1)}
                    onClick={() => goToSlide(key)}
                  ></button>
                </div>
              ))}
            </div>
          )}
        >
          {testimonials.map((item) => (
            <blockquote className="testimonial" key={item.company}>
              <p className="testimonial__text">"{item.text}"</p>
              <footer className="testimonial__footer">
                <div className="testimonial__author">{item.author}</div>
                <div className="testimonial__desc">
                  {item.position} at{" "}
                  <cite className="testimonial__company" title={item.company}>
                    {item.company}
                  </cite>
                </div>
              </footer>
            </blockquote>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;
