import "./App.css";
import server from "./server.png";
import client from "./client.png";
import React, { useRef } from "react";
function App() {
  const mainRef = useRef();
  const projectsRef = useRef();
  const skillsRef = useRef();
  const contactRef = useRef();

  const executeScrollTo = (ref) =>
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  return (
    <div className="App">
      <nav>
        <div>
          <button
            onClick={() => {
              executeScrollTo(mainRef);
            }}
          >
            About me
          </button>
          <button
            onClick={() => {
              executeScrollTo(projectsRef);
            }}
          >
            Projects
          </button>
          <button
            onClick={() => {
              executeScrollTo(skillsRef);
            }}
          >
            Skills
          </button>
          <button
            onClick={() => {
              executeScrollTo(contactRef);
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
        <div className="main-right">일러스트 들어갈 곳</div>
      </section>
      <section className="projects" ref={projectsRef}>
        <h1>Projects</h1>
        <div>
          <div className="project anbda">
            <h1>ANABADA</h1>
            <p>
              desription here ef attribute is required for an anchor to be
              keyboard accessible. Provide a valid, navigable address as the
              href value. If you cannot provide an href, but still need the
              element to resemble a link, use a button and change it with
              appropriate styles. Learn more:
              https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-
            </p>
            <div className="tools">
              <label>React</label>
              <label>Naver search API</label>
              <label>NodeJS</label>
              <label>Express</label>
              <label>MySQL</label>
            </div>
          </div>
          <div className="project scope">
            <h1>Scope</h1>
            <p>
              desription here ef attribute is required for an anchor to be
              keyboard accessible. Provide a valid, navigable address as the
              href value. If you cannot provide an href, but still need the
              element to resemble a link, use a button and change it with
              appropriate styles. Learn more:
              https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-
            </p>
            <div className="tools">
              <label>React</label>
              <label>React Router</label>
              <label>Firebase</label>
            </div>
          </div>
          <div className="project tomodoro">
            <h1>TOMODORO</h1>
            <p>
              desription here ef attribute is required for an anchor to be
              keyboard accessible. Provide a valid, navigable address as the
              href value. If you cannot provide an href, but still need the
              element to resemble a link, use a button and change it with
              appropriate styles. Learn more:
              https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-
            </p>
            <div className="tools">
              <label>React</label>
              <label>Naver search API</label>
              <label>NodeJS</label>
              <label>Express</label>
            </div>
          </div>
        </div>
      </section>
      <section className="skills" ref={skillsRef}>
        <h1>Skills</h1>
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
      <section className="contact" ref={contactRef}>
        <h1>Contact</h1>
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
