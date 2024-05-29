// React
import { useState } from "react";

// Libs
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";

const BottomDown = ({ children }) => {
  const [inView, setInView] = useState(false);

  const transition = useSpring({
    to: {
      transform: inView ? 'translateY(0)' : 'translateY(-100%)',
      opacity: inView ? 1 : 0,
    },
    config: {
      duration: 1000,
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

export default BottomDown;