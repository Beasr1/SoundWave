"use client";

/*
used 
https://vincentgarreau.com/particles.js/
as my testing partener
*/
import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import { theme } from "../../tailwind.config";
const secColor = theme.extend.colors.secondary;
console.log(secColor);
const ParticleProvider = ({ id, zIndex }) => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    //container.element.style.zIndex = "-10";
    await console.log(container);
  }, []);

  const options = {
    // background: {
    //   //color: "#0d47a1",
    //   z:-10,
    // },
    fullScreen: {
      enable: false,
    },
    interactivity: {
      //detect_on: "window",
      events: {
        onClick: {
          enable: true,
          //mode: "push",
          mode: "repulse",
        },
        onHover: {
          enable: true,
          //mode: "repulse",//grab and repulse both look awesome when dist is less
          mode: "grab",
        },
        resize: true,
      },
      modes: {
        bubble: {
          //looks good when config correctly
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
        push: {
          quantity: 1, //only add 1 if do
        },
        repulse: {
          distance: 65,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        //color: "#A020F0", //originally ffffff
        //color: "#41fdfe",//pure cyan
        color: `${secColor}`, //merged cyan
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "bottom",
        enable: true,
        outMode: "out",
        random: true,
        straight: true,
        speed: 1,
      },
      number: {
        density: {
          enable: true,
          value_area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 5,
      },
    },
  };
  return (
    <Particles
      //id="tsparticles"
      //damn it chatgpt i was stuck on it for countless hours and you solved it in sec
      //though i knew exactly what the prob was and instead of experimenting here i was on google
      id={id} // Use the unique ID as the id prop for the Particles component
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      className=" absolute h-full w-full overflow-hidden"
      //style={{ position: "relative", zIndex: -10 }} // Set position and z-index
    />
  );
};

export default ParticleProvider;
