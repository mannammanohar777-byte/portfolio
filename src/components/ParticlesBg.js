import React from "react";
import Particles from "react-tsparticles";

function ParticlesBg() {
  return (
    <Particles
      options={{
        background: { color: "#020617" },
        particles: {
          number: { value: 40 },
          size: { value: 2 },
          move: { speed: 1 },
          links: {
            enable: true,
            distance: 150,
            color: "#38bdf8",
            opacity: 0.3,
          },
        },
      }}
    />
  );
}

export default ParticlesBg;