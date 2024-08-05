import React from "react";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import './HomePage.css'; // Create this CSS file for styling

function HomePage() {
  const navigate = useNavigate();

  const animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <div className="home-page">
      <animated.div style={animation} className="welcome-message">
        <h1>Welcome to My App!</h1>
        <button onClick={() => navigate("/dashboard")} className="start-button">
          Start
        </button>
      </animated.div>
    </div>
  );
}

export default HomePage;
