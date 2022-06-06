import "./App.css";
import "./css/mainAnimation.css";
import server from "./server.png";
import client from "./client.png";
import React, { useRef, useState } from "react";
import H1withStroke from "./helper/H1withStroke";
import billyda from "./billyda.png";
import spotify from "./spotify.png";
function App() {
  const mainRef = useRef();
  const projectsRef = useRef();
  const skillsRef = useRef();
  const contactRef = useRef();
  const [navOpen, setNavOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(false);

  const executeScrollTo = (ref) =>
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  const openNav = () => {
    setNavOpen(!navOpen);
  };
  // projectsRef.current && console.log(projectsRef.current.offsetTop);\
  window.onscroll = function () {
    if (projectsRef.current.offsetTop < window.pageYOffset) {
      setNavVisible(true);
    } else {
      setNavVisible(false);
    }
  };

  let projectInfo = document.querySelectorAll(".project-info");
  projectInfo.forEach((info) => {
    window.addEventListener("scroll", function () {
      let value = window.scrollY;
      // console.log(info);
      // console.log(info + ":" + info.offsetTop +"" info.clientHeight +"vlaue"+value);
      if (
        info.offsetTop - (this.innerHeight * 4) / 5 < value &&
        value < info.offsetTop + (info.clientHeight * 4) / 5
      ) {
        // console.log(this.innerHeight);
        info.style.animation = "slide 0.5s ease-in-out forwards";
      } else if (
        info.offsetTop + info.clientHeight < value ||
        value < info.offsetTop
      ) {
        // console.log("going back!!");s
        info.style.animation = "slideBack 1s ease-in-out forwards";
      }
    });
  });

  // window.addEventListener("scroll", function () {
  //   let value = window.scrollY;
  //   console.log(value);
  // });
  return (
    <div className="App">
      <button
        className="navBtn"
        onClick={openNav}
        style={{ display: navVisible ? "inline-block" : "none" }}
      >
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
            <span>Frontend Developer from Seoul living in Germany.</span>
            <span>
              I studied Educational Technology and Multi Media in uni, and love
              solving problems and playing escape room.
            </span>
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
          <img src={billyda} alt="img" className="project-info-img" />

          <div className="project-info">
            <h1>BillyDa</h1>
            <div className="tools">
              <span> #React #Search API #NodeJS #Express #MySQL</span>
            </div>
            <p>
              BillyDa means ‘borrow’ in Korean, and is a used Korean bookstore
              in Europe. By using Book Search API, users can search and upload
              books they have in 10 seconds, and text other users if they find a
              book they want to read. Next would be implementing user rating
              system to make users feel secure.
            </p>
            <button
              className="project-info-viewBtn"
              onClick={() => {
                window.open("https://main--deft-zuccutto-fdb883.netlify.app/");
              }}
            >
              <p>VIEW SITE</p>
            </button>
          </div>
        </div>
        <div className="project scope">
          <img src={billyda} alt="img" className="project-info-img" />
          <div className="project-info">
            <h1>Scope</h1>
            <div className="tools">
              <span> #React #Firebase #Figma #TeamProject</span>
            </div>
            <p>
              Scope is where you can upload your portfolio and get feedback from
              others. My first project with UX/UI designers. We are still in
              progress, making it better in both design and function wise. The
              next step will be implementing a function where experts can give
              them more detailed feedback than merely leaving comments.
            </p>
            <button className="project-info-viewBtn">
              <p>VIEW SITE</p>
            </button>
          </div>
        </div>
        <div className="project tomodoro">
          <img src={billyda} alt="img" className="project-info-img" />
          <div className="project-info">
            <h1>
              TOMO
              {/* <br /> */}
              DORO
            </h1>
            <div className="tools">
              <span> #React #search API #NodeJS #Express #MySQL</span>
            </div>
            <p>
              Tomodoro is a customizable pomodoro timer that works on desktop &
              mobile browser. The aim of this app is to help you focus on any
              task you are working on, such as study, writing, or coding. This
              app is inspired by Pomodoro Technique which is a time management
              method developed by Francesco Cirillo.
            </p>
            <button className="project-info-viewBtn">
              <p>VIEW SITE</p>
            </button>
          </div>
        </div>
        <div className="project spotify">
          <img src={spotify} alt="img" className="project-info-img" />
          <div className="project-info">
            <h1>Spotify</h1>

            <div className="tools">
              <span> #JavaScript #CSS #MockUp</span>
            </div>
            <p>Spotify landing page Mockup with responsive design.</p>
            <button className="project-info-viewBtn">
              <p>VIEW SITE</p>
            </button>
          </div>
        </div>
      </section>
      <div className="header" ref={skillsRef}>
        <h1 className="h1shadow">Skills</h1>
      </div>
      <section className="skills">
        <div>
          <div className="skill">
            <img src={client} alt="client" width="100px" />

            <h2>Client</h2>
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
            <h2>Server</h2>
            <ul>
              <li>Node JS</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>Firebase</li>
              <li>Java</li>
            </ul>
          </div>
          {/* <div className="skill">
            <img src={server} alt="other" width="100px" />
            <h2>Other</h2>
            <ul>
              <li>Adobe PS</li>
              <li>Adobe IL</li>
              <li>Figma</li>
              <li>Firebase</li>
              <li>Java</li>
            </ul>
          </div> */}
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
