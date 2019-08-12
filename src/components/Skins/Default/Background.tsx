import React, { useEffect, useRef } from 'react';
import Particles from 'react-particles-js';



export default class Background extends React.Component {
  render() {
    return (
      <Particles
        style={{
          position: 'absolute',
          zIndex: -10,
          background: 'linear-gradient(45deg, rgb(0, 47, 57) 0%, rgb(0, 33, 47) 100%)'
        }}
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3
              }
            },
            line_linked: {
              enable: false
            },
            move: {
              random: true,
              speed: 1,
              direction: "bottom",
              out_mode: "out"
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble"
              },
              onclick: {
                enable: true,
                mode: "repulse"
              }
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0
              },
              repulse: {
                distance: 400,
                duration: 4
              }
            }
          }
        }}
      />
    )
  }
}
