// React
import { useState } from "react";

// Libs
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";

const SlideLeft = ({ children }) => {
  const [inView, setInView] = useState(false);

  const transition = useSpring({
    to: {
      transform: inView ? 'translateX(0)' : 'translateX(100%)',
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

export default SlideLeft;