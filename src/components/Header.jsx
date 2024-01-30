import { useState, useRef, useEffect } from "react";
import ExternalLinkIcon from "./ExternalLinkIcon";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // ref to access the menu element
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  // toggle the menu status
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // close the menu when clicking outside
  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      btnRef.current &&
      !btnRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <header className="header">
      <a href="/" className="header__logo">
        Alexander Kuleshov
      </a>
      <nav
        className={isOpen ? "header__nav nav nav_opened" : "header__nav nav"}
      >
        <div
          className="nav__content"
          ref={menuRef}
          id="nav-content"
          aria-label="Main menu"
          aria-labelledby="nav-toggle"
        >
          <ul className="nav__list nav__up">
            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link" onClick={toggleMenu}>
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#experience" className="nav__link" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#testimonials"
                className="nav__link"
                onClick={toggleMenu}
              >
                Testimonials
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
          <div className="nav__title nav__up">Let's talk!</div>
          <ul className="nav__contacts nav__up">
            <li className="nav__item">
              <a
                href="https://www.linkedin.com/in/alexkuleshov-frontend/"
                className="nav__link"
                onClick={toggleMenu}
                target="_blank"
                rel="noreferrer"
              >
                Linkedin&nbsp;
                <ExternalLinkIcon size={20} color="#6b6e6b" />
              </a>
            </li>
            <li className="nav__item">
              <a
                href="mailto:amkuleshov@gmail.com"
                className="nav__link"
                onClick={toggleMenu}
              >
                Email
              </a>
            </li>
          </ul>
        </div>
        <button
          ref={btnRef}
          className="nav__btn"
          onClick={toggleMenu}
          type="button"
          id="nav-toggle"
          aria-expanded={isOpen ? "true" : "false"}
          aria-haspopup="true"
          aria-controls="nav-content"
          aria-label={isOpen ? "Close main menu" : "Open main menu"}
        >
          <svg className="burger-icon" viewBox="0 0 100 100" width="50">
            <path
              className="burger-icon__line burger-icon__line_edge"
              d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
            />
            <path
              className="burger-icon__line burger-icon__line_middle"
              d="m 70,50 h -40"
            />
            <path
              className="burger-icon__line burger-icon__line_edge"
              d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}

export default Header;
