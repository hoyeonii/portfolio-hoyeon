import "./App.css";
import "./css/mainAnimation.css";
import server from "./server.png";
import client from "./client.png";
import React, { useRef, useState } from "react";
import H1withStroke from "./helper/H1withStroke";
import billyda from "./billyda.png";
function App() {
  const mainRef = useRef();
  const projectsRef = useRef();
  const skillsRef = useRef();
  const contactRef = useRef();
  const [navOpen, setNavOpen] = useState(false);

  const executeScrollTo = (ref) =>
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  const openNav = () => {
    setNavOpen(!navOpen);
  };
  return (
    <div className="App">
      <button className="navBtn" onClick={openNav}>
        <i class="fa-solid fa-burger"></i>
      </button>
      <nav style={{ display: navOpen ? "inline-block" : "none" }}>
        <div>
          <button
            onClick={() => {
              setNavOpen(false);
            }}
          >
            X
          </button>
          <button
            onClick={() => {
              executeScrollTo(mainRef);
              setNavOpen(false);
            }}
          >
            About me
          </button>
          <button
            onClick={() => {
              executeScrollTo(projectsRef);
              setNavOpen(false);
            }}
          >
            Projects
          </button>
          <button
            onClick={() => {
              executeScrollTo(skillsRef);
              setNavOpen(false);
            }}
          >
            Skills
          </button>
          <button
            onClick={() => {
              executeScrollTo(contactRef);
              setNavOpen(false);
            }}
          >
            Contact
          </button>
        </div>
      </nav>
      <section className="main" ref={mainRef}>
        <div className="main-left">
          <h1>HELLO</h1>
          <h1>I AM</h1>
          <h1>HOYEON</h1>
          <div className="main-left-text">
            <span>Frontend Developer from Seoul</span>
            <span>I like bringing creative designs to life</span>
          </div>
        </div>
        <div className="main-right">
          <div className="circle1 circle1-solid" />
          <div className="circle1 circle1-outline" onClick={openNav}>
            <i class="fa-solid fa-burger"></i>
          </div>
          <div className="circle2">
            <div className="circle3" />
          </div>

          {/* <div className="circle3" /> */}
          <div className="oval1 oval1-outline" />
          <div className="oval1 oval1-solid" />
          <div className="oval1 oval2-outline" />
          <div className="oval1 oval2-solid" />
        </div>
      </section>
      <div className="header" ref={projectsRef}>
        <h1 className="h1shadow">Projects</h1>
      </div>
      <section className="projects">
        {/* <H1withStroke text="Projects" /> */}

        <div className="project anbda">
          <div className="project-info">
            <h1>BillyDa</h1>
            <span className="tools">
              #React #Naver #search #API #NodeJS #Express #MySQL
            </span>
            <p>
              desription here ef attribute is required for an anchor to be
              keyboard accessible. Provide a valid, navigable address as the
              href value. If you cannot provide an href, but still need the
              element to resemble a link, use a button and change it with
              appropriate styles. Learn more:
              https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-
            </p>
          </div>
          <img src={billyda} alt="img" />
        </div>
        <div className="project scope">
          <div className="project-info">
            <h1>Scope</h1>
            <span className="tools">
              #React #Naver #search #API #NodeJS #Express #firebase
            </span>
            <p>
              desription here ef attribute is required for an anchor to be
              keyboard accessible. Provide a valid, navigable address as the
              href value. If you cannot provide an href, but still need the
              element to resemble a link, use a button and change it with
              appropriate styles. Learn more:
              https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-
            </p>
          </div>
          <img src={billyda} alt="img" />
        </div>
        <div className="project tomodoro">
          <div className="project-info">
            <h1>
              TOMO
              <br />
              DORO
            </h1>
            <span className="tools">
              #React #Naver API #NodeJS #Express #MySQL
            </span>
            <p>
              desription here ef attribute is required for an anchor to be
              keyboard accessible. Provide a valid, navigable address as the
              href value. If you cannot provide an href, but still need the
              element to resemble a link, use a button and change it with
              appropriate styles. Learn more:
              https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-
            </p>
          </div>
          <img src={billyda} alt="img" />
        </div>
        <div className="project spotify">
          <div className="project-info">
            <h1>Spotify</h1>
            <span className="tools">
              #React #Naver #search #API #NodeJS #Express #MySQL
            </span>
            <p>
              desription here ef attribute is required for an anchor to be
              keyboard accessible. Provide a valid, navigable address as the
              href value. If you cannot provide an href, but still need the
              element to resemble a link, use a button and change it with
              appropriate styles. Learn more:
              https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-
            </p>
          </div>
          <img src={billyda} alt="img" />
        </div>
      </section>
      <div className="header" ref={skillsRef}>
        <h1 className="h1shadow">Skills</h1>
      </div>
      <section className="skills">
        <div>
          <div className="skill">
            <img src={client} alt="server" width="100px" />

            <h2>Client Side</h2>
            <ul>
              <li>HTML5</li>
              <li>JavaScript</li>
              <li>CSS3</li>
              <li>React</li>
              <li>Redux</li>
            </ul>
          </div>
          <div className="skill">
            <img src={server} alt="server" width="100px" />
            <h2>Server Side</h2>
            <ul>
              <li>Node JS</li>
              <li>Express</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="header" ref={contactRef}>
        <h1 className="h1shadow">Contact</h1>
      </div>
      <section className="contact">
        <div>
          {/* <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="github"
            width="30px"
          /> */}
          <a href="https://github.com/hoyeonii">
            <i class="fa-brands fa-github"></i>
            <span>https://github.com/hoyeonii</span>
          </a>
          <br />
          <i class="fa-solid fa-envelope"></i>
          <span>hyeonlee0301@gmail.com</span>
        </div>
      </section>
    </div>
  );
}

export default App;
