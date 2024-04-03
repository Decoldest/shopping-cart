import "./Home.css";
import PropTypes from "prop-types";
import styled from "styled-components";
import plans from "../images/plans.gif";
import reactor from "../images/arc-reactor-home.png";
import materials from "../images/materials.png";
import crops from "../images/crops.jpeg";

HomeImage.propTypes = {
  className: PropTypes.string,
  image: PropTypes.node,
  alt: PropTypes.string,
  text: PropTypes.string,
  lightButtonText: PropTypes.string,
  darkButtonText: PropTypes.string,
};

const Button = styled.button`
  font-size: 15px;
  border-radius: 5px;
  border: none;
  padding: 0.75em 5em;
  background: "white";
  color: "black";
`;

const DarkButton = styled(Button)`
  background: #333;
  color: white;
`;

function HomeImage({
  className,
  image,
  text = "text",
  lightButtonText,
  darkButtonText,
}) {
  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <h2
        style={{
          color: "white",
        }}
      >
        {text}
      </h2>
      <div
        className="see-more-container"
        style={{ display: "flex", gap: "10px", marginBottom: "50px" }}
      >
        {lightButtonText && <Button>{lightButtonText}</Button>}
        <DarkButton>{darkButtonText}</DarkButton>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="home">
      <HomeImage
        className="plans-container"
        image={plans}
        alt="Iron Man Plans"
        text="Where It All Started"
        lightButtonText="Shop Defense"
        darkButtonText="Learn More"
      />
      <div>
        <p>
          {`At Stark Industries, we've been leading the charge in technological advancement since our founding.
          Our commitment to innovation knows no bounds, as we strive to make the world a safer, more efficient place for all`}
        </p>
      </div>
      <HomeImage
        className="reactor-container"
        image={reactor}
        alt="Arc Reactor"
        text="Clean Energy"
        lightButtonText="Shop Energy"
        darkButtonText="Learn More"
      />
      <HomeImage
        className="materials-container"
        image={materials}
        alt="New element"
        text="Material Sythesis"
        darkButtonText="Learn More"
      />
      <HomeImage
        className="crops-container"
        image={crops}
        alt="Intellicrops"
        text="Intellicrops"
        darkButtonText="Learn More"
      />
    </div>
  );
}
