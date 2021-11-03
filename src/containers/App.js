import React, { useState, useRef, useEffect } from 'react';
import Particles from 'react-tsparticles';
import ReactGA from 'react-ga';

import './App.css';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import About from './About/About';
import Work from './Work/Work';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Loader from '../components/Loader/Loader';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

ReactGA.initialize(`${process.env.REACT_APP_GA_MEASUREMENT_ID}`);

const App = () => {
  const [loader, setLoader] = useState(false);
  const about = useRef();
  const work = useRef();
  const skills = useRef();
  const contact = useRef();

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  const particleOptions = {
    fpsLimit: 60,
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 1000
        }
      },
      links: {
        color: "#f0a07c",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 2,
      },
      move: {
        bounce: false,
        direction: "none",
        enable: true,
        outMode: "out",
        random: false,
        speed: 4,
        straight: false
      }
    }
  };

  const renderPage = () => {
    if(loader) {
      return <Loader />
    } else {
      return (
        <React.Fragment>
          <Header about={about} work={work} skills={skills} contact={contact} />
          <div className="app__container">
            <div id="banner">
              <Banner title="Prasanna Sriram" subtitle="Full Stack Developer" />
            </div>
            <div id="about" ref={about}>
              <About />
            </div>
            <div id="work" ref={work}>
              <Work />
            </div>
            <div id="skills" ref={skills}>
              <Skills />
            </div>
            <div id="contact" ref={contact}>
              <Contact onLoad={setLoader} />
            </div>
            <ScrollToTop />
          </div>
        </React.Fragment>
      )
    }
  }

  return (
    <div className="app">
      <Particles id="tsparticles" className="app__particles" options={particleOptions} />
      {renderPage()}
    </div>
  );
}

export default App;
