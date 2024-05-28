// React
import { useState } from "react";

// Libs
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";

const BounceInAnimation = ({ children }) => {
  const [inView, setInView] = useState(false);

  const transition = useSpring({
    to: {
      transform: inView ? "scale(1)" : "scale(0.5)",
      opacity: inView ? 1 : 0,
    },
    config: {
      duration: 1200,
    },
  });

  return (
    <Waypoint
      onEnter={() => setInView(true)}
      onLeave={() => setInView(false)}
    >
      <animated.div style={transition}>
        {children}
      </animated.div>
    </Waypoint>
  );
};

export default BounceInAnimation;