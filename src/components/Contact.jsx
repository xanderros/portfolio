import ExternalLinkIcon from "./ExternalLinkIcon.jsx";

function Contact() {
	return (
			<section className="section section_contact" id="contact">
				<div className="contact container">
					<p className="contact__caption contact__caption_animate">
						Let's work together
					</p>
					<div className="contact__line"></div>
					<div className="contact__buttons-group">
						<div className="contact__btn">
							<a className="btn" href="https://www.linkedin.com/in/alexkuleshov-frontend/" target="_blank" rel="noreferrer">
								<span className="btn__bg"></span>
								<span className="btn__text">
									Linkedin&nbsp;<ExternalLinkIcon />
								</span>
							</a>
						</div>
						<div className="contact__btn">
							<a className="contact__btn btn" href="mailto:amkuleshov@gmail.com">
								<span className="btn__bg"></span>
								<span className="btn__text">
									Email
								</span>
							</a>
						</div>
					</div>
				</div>
			</section>
	);
}

export default Contact;
