import { FaPlus, FaMinus } from 'react-icons/fa';
import tony from "../images/tony-stark.jpg";
import { useState } from "react";
import "./About.css";

export default function About() {
  const [detailsExpanded, setDetailsExpanded] = useState({
    origins: false,
    sectors: false,
    vision: false,
  });

  const toggleDetails = (card) => {
    setDetailsExpanded((prevState) => ({
      ...prevState,
      [card]: !prevState[card],
    }));
  };

  return (
    <div className="about-container">
      <div className="image-container">
        <img src={tony} alt="Tony Stark" />
        <h2>About Us</h2>
        <p>{`Stark Industries - where innovation meets excellence.`}</p>
      </div>

      <div className="card">
        <h2>Origins</h2>
        <button onClick={() => toggleDetails("origins")}>
          {detailsExpanded["origins"] ? <FaMinus /> : <FaPlus />} {/* Use FaPlus and FaMinus icons */}
        </button>
        {detailsExpanded["origins"] && (
          <p>
            {`From our humble beginnings as a weapons manufacturer, we've evolved into a global leader in advanced technology, 
               pioneering groundbreaking solutions that redefine industries and change lives.`}
          </p>
        )}
      </div>

      <div className="about-section">
        <div className="card">
          <h2>Sectors</h2>
          <button onClick={() => toggleDetails("sectors")}>
            {detailsExpanded["sectors"] ? <FaMinus /> : <FaPlus />} {/* Use FaPlus and FaMinus icons */}
          </button>
          {detailsExpanded["sectors"] && (
            <p>
              {` But innovation isn't just about creating the next big thing — it's about making a difference. 
                Whether it's developing clean energy solutions to combat climate change, revolutionizing healthcare 
                with cutting-edge medical devices, or enhancing personal safety with state-of-the-art defense technology, 
                everything we do is driven by a passion to make the world a better, safer place.`}
            </p>
          )}
        </div>

        <div className="card">
          <h2>Vision</h2>
          <button onClick={() => toggleDetails("vision")}>
            {detailsExpanded["vision"] ? <FaMinus /> : <FaPlus />} {/* Use FaPlus and FaMinus icons */}
          </button>
          {detailsExpanded["vision"] && (
            <p>{`At Stark Industries, our greatest asset is our people. We're a team of the brightest minds and the most talented engineers, united by a shared vision and a relentless pursuit of excellence. 
            Together, we dream big, challenge the status quo, and dare to imagine a future where anything is possible.
            Join us on our journey as we continue to push the boundaries of innovation and inspire the next generation
             of leaders, inventors, and superheroes.
            Stark Industries — Pioneering Innovation for a Better Tomorrow.`}</p>
          )}
        </div>
      </div>
    </div>
  );
}
