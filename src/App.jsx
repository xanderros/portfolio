import { useLayoutEffect, useRef } from "react";
import "./styles/App.scss";

import { Helmet } from "react-helmet-async";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const app = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();
      let breakPoint = "(min-width: 1024px)";

      // ----- lenis integration for smooth scroll
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      });

      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);

      // ----- ScrollTrigger defaults
      ScrollTrigger.defaults({
        scrub: 1,
      });

      // ----- animations
      const wrapper = document.querySelector(".wrapper");

      //**** Projects vars
      const titleSection = document.querySelector(".section__title");
      const projects = document.querySelector(".projects");
      const projectsContentFirst = document.querySelector(
        ".projects__content_first"
      );
      const projectsCoverFirst = document.querySelector(
        ".projects__cover_first"
      );
      const projectsContents = gsap.utils.toArray(".projects__content_trigger");
      const projectsCovers = gsap.utils.toArray(".projects__cover_hidden");
      const testimonials = document.getElementById("testimonials");

      const projectsStartPoint = 1.15;
      const projectsEndPoint = 0.78;

      // update window height on resize
      let windowHeight;

      function setSize() {
        windowHeight = window.innerHeight;
      }

      setSize();
      window.addEventListener("resize", setSize);

      //// Scroll to section by Navigation anchor link
      const navAnchors = document.querySelectorAll('.nav__link[href*="#"]');

      navAnchors.forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const id = e.target.getAttribute("href");
          lenis.scrollTo(document.querySelector(id));
        });
      });

      //// Custom cursor hover
      const cursor = document.querySelector(".cursor");
      const cursorHoverables = document.querySelectorAll(".hoverable");

      document.body.addEventListener("mousemove", onMouseMove);
      for (let i = 0; i < cursorHoverables.length; i++) {
        cursorHoverables[i].addEventListener("mouseenter", onMouseHover);
        cursorHoverables[i].addEventListener("mouseleave", onMouseHoverOut);
      }

      function onMouseMove(e) {
        gsap.to(cursor, {
          x: e.clientX - 50,
          y: e.clientY - 60,
        });
      }

      function onMouseHover() {
        gsap.fromTo(cursor, { scale: 0 }, { scale: 1 });
      }

      function onMouseHoverOut() {
        gsap.to(cursor, { scale: 0 });
      }

      // Split chars in About section
      const aboutSection = document.querySelector(".section_about"); // set end point in CSS .section_about: 270vh = 2.7 windowHeight
      const aboutChars = gsap.utils.toArray(".about__chars");

      aboutChars.forEach((char) => {
        const bg = char.dataset.bgColor;
        const fg = char.dataset.fgColor;

        const text = new SplitType(char, { types: "words" });

        gsap.fromTo(
          text.words,
          {
            color: bg,
          },
          {
            color: fg,
            stagger: 1,
            scrollTrigger: {
              trigger: aboutSection,
              start: "top top",
              end: () => {
                return "+=" + windowHeight * 1.5;
              },
              scrub: true,
              toggleActions: "play play reverse reverse",
            },
          }
        );
      });

      // Split chars in Contact section
      const contactChars = document.querySelector(".contact__caption_animate");
      const contactLine = document.querySelector(".contact__line");

      const contactText = new SplitType(contactChars, {
        types: "chars, words",
      });

      let contactTl = gsap.timeline();

      ScrollTrigger.create({
        animation: contactTl,
        trigger: contactChars,
        start: "bottom bottom",
        scrub: false,
      });

      contactTl
        .fromTo(
          contactText.chars,
          { scale: 0 },
          {
            scale: 1,
            duration: 0.12,
            stagger: { amount: 0.6 },
            ease: "power1.out",
          },
          "contact_show"
        )
        .fromTo(
          contactLine,
          { scaleX: 0 },
          { scaleX: 1, duration: 1.3, ease: "power1.out" },
          "contact_show"
        );

      //**** Projects animations

      //*** Title animations
      const title = document.querySelector(".title_animated");

      // Title E-letter vars
      const titleESide = title.querySelector(".title__e_side");
      const titleETop = title.querySelector(".title__e_top");
      const titleEMiddle = title.querySelector(".title__e_middle");
      const titleEBottom = title.querySelector(".title__e_bottom");

      // Title T-letter vars
      const titleTWrap = title.querySelector(".title__t-wrap");
      const titleTHorizontal = title.querySelector(".title__t_horizontal");
      const titleTVertical = title.querySelector(".title__t_vertical");

      // matchMedia min-width: 1024px
      mm.add(breakPoint, () => {
        // title animations
        let titleTl = gsap.timeline();

        const durationDefault = 0.3;
        const durationSmall = 0.2;

        ScrollTrigger.create({
          animation: titleTl,
          trigger: titleSection,
          start: "top top",
          end: () => {
            return "+=" + 2 * windowHeight;
          },
          pin: true,
          invalidateOnRefresh: true,
          pinSpacing: false,
        });

        titleTl
          .fromTo(
            title,
            { x: 0, scale: 0.2 },
            { x: -503, scale: 1, ease: "power2.in" }
          )

          // Parts
          .to(
            ".title__letter",
            { opacity: 0, duration: durationSmall },
            "parts_hide"
          )
          .to(titleESide, { opacity: 0, duration: durationSmall }, "parts_hide")

          // E letter transform
          .to(
            titleETop,
            { scaleX: 0.45, scaleY: 0.5, y: 87, duration: durationDefault },
            "letters_transform"
          )
          .to(
            titleEMiddle,
            { scaleX: 2.37, scaleY: 0.8, y: 7, duration: durationDefault },
            "letters_transform"
          )
          .to(
            titleEBottom,
            { scaleX: 1.12, scaleY: 0.5, y: -82, duration: durationDefault },
            "letters_transform"
          )

          // T letter transform
          .fromTo(
            titleTWrap,
            { scaleX: 0.944, scaleY: 0.694 },
            { scale: 1, duration: durationDefault },
            "letters_transform"
          )
          .fromTo(
            titleTHorizontal,
            { scaleY: 0.174 },
            { scaleY: 1, duration: durationDefault },
            "letters_transform"
          )
          .fromTo(
            titleTVertical,
            { scaleX: 0.26 },
            { scaleX: 1, duration: durationDefault },
            "letters_transform"
          )

          // Show project cover (T letter)
          .to(
            titleTHorizontal,
            { scaleY: 0, transformOrigin: "50% 0%", duration: durationDefault },
            "project_show"
          )
          .to(titleTVertical, { scale: 0, duration: 0 }, "project_show")

          // Show project text (E letter)
          .to(
            ".title__e",
            { scaleX: 0, duration: durationDefault },
            "project_show"
          )

          // Show first project
          .to(titleSection, { pointerEvents: "none" }, "project_show")
          .fromTo(
            projectsContentFirst,
            { opacity: 0 },
            { opacity: 1, duration: 0 },
            "project_show"
          )
          .fromTo(
            projectsCoverFirst,
            { opacity: 0 },
            { opacity: 1, duration: 0 },
            "project_show"
          );

        // Projects images animations
        projectsContents.forEach((project, i) => {
          gsap.to(projectsCovers[i], {
            height: "100%",
            ease: "power.in",
            scrollTrigger: {
              trigger: projects,
              start: () => {
                return "+=" + windowHeight * (i + projectsStartPoint);
              },
              end: () => {
                return "+=" + projectsEndPoint * windowHeight;
              },
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
        });

        // Projects background animations
        const bgColorDefault = "#f0fbf3";

        let projectBgTl = gsap.timeline();

        ScrollTrigger.create({
          animation: projectBgTl,
          trigger: projects,
          start: () => {
            return "+=" + windowHeight;
          },
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        });

        const bgColorElements = projects.querySelectorAll("[data-color]");

        bgColorElements.forEach((bgColorElement) => {
          let bgColor = bgColorElement.getAttribute("data-color");
          projectBgTl.to(wrapper, { backgroundColor: bgColor });
        });

        projectBgTl.to(wrapper, { backgroundColor: bgColorDefault });

        // experience rows animations
        const experienceRows = gsap.utils.toArray(".exp__row");
        experienceRows.forEach((experienceRow) => {
          let experienceTl = gsap.timeline();

          let experienceLine = experienceRow.querySelector(".exp__line-inner");
          let experienceContainer =
            experienceRow.querySelector(".exp__container");

          ScrollTrigger.create({
            animation: experienceTl,
            trigger: experienceRow, // triggers position resize
            start: "top 90%",
            end: "top 60%",
            invalidateOnRefresh: true,
          });

          experienceTl
            .fromTo(
              experienceLine,
              { scaleX: 0 },
              { scaleX: 1, ease: "power1.inOut" },
              "exp"
            )
            .fromTo(
              experienceContainer,
              { opacity: 0.25 },
              { opacity: 1, ease: "power1.inOut" },
              "exp"
            );
        });

        // testimonials animations
        const testimonialText = gsap.utils.toArray(".testimonial__text");
        const testimonialAuthor = gsap.utils.toArray(".testimonial__author");
        const testimonialDesc = gsap.utils.toArray(".testimonial__desc");
        const testimonialArrowLeft = testimonials.querySelector(
          ".slider-control-centerleft"
        );
        const testimonialArrowRight = testimonials.querySelector(
          ".slider-control-centerright"
        );

        let testimonialTl = gsap.timeline();

        ScrollTrigger.create({
          animation: testimonialTl,
          trigger: testimonials,
          start: "top center",
          scrub: false,
        });

        testimonialTl
          .fromTo(
            testimonialText,
            { opacity: 0, scale: 1.2, filter: "blur(8px)" },
            {
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              duration: 0.8,
              ease: "power1.out",
            },
            "testimonials_show"
          )
          .fromTo(
            testimonialAuthor,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, delay: 0.4, duration: 0.6 },
            "testimonials_show"
          )
          .fromTo(
            testimonialDesc,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, delay: 0.5, duration: 0.6 },
            "testimonials_show"
          )
          .fromTo(
            testimonialArrowLeft,
            { opacity: 0, x: 20 },
            { opacity: 1, x: 0, delay: 0.7, duration: 0.6 },
            "testimonials_show"
          )
          .fromTo(
            testimonialArrowRight,
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, delay: 0.7, duration: 0.6 },
            "testimonials_show"
          );
      });

      return () => mm.revert();
    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={app}>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Works by Alexander Kuleshov",
            description:
              "A collection of works by Alexander Kuleshov, a frontend developer.",
            author: {
              "@type": "Person",
              name: "Alexander Kuleshov",
            },
            publisher: {
              "@type": "Organization",
              name: "Alexander Kuleshov",
            },
            hasPart: [
              {
                "@type": "CreativeWork",
                name: "Readsom",
                description: "App to discover newsletters",
                url: "https://readsom.com/",
              },
              {
                "@type": "CreativeWork",
                name: "Event Registry",
                description: "News intelligence platform",
                url: "https://eventregistry.org/",
              },
              {
                "@type": "CreativeWork",
                name: "Echobox",
                description: "AI-driven social media platform for publishers",
                url: "https://www.echobox.com/",
              },
              {
                "@type": "CreativeWork",
                name: "Wolves of Analytics",
                description: "Advanced digital analytics service",
                url: "https://www.wolvesofanalytics.com/",
              },
              {
                "@type": "CreativeWork",
                name: "Azarenok",
                description: "Website for cool designer",
                url: "http://azarenok.com/",
              },
            ],
          })}
        </script>
      </Helmet>
      <Header />
      <div className="wrapper">
        <main className="wrapper__content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
      <div className="cursor">View</div>
    </div>
  );
}

export default App;
