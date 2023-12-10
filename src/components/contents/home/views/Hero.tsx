import "../../../../styles/contents/home/views/Hero.css";
import ActionButton from "../../../shared/ActionButton";
import LightButton from "../../../shared/LightButton";

const Hero = () => {
  return (
    <div className="Hero px-5">
      <div className="Hero-Content col-6">
        <h1>
          NAVIGATING THE PATH TO <span>ACADEMIC</span>
          <br></br>
          EXCELLENCE.
        </h1>

        <p>
          Our platform revolutionizes the way schools operate, offering
          intuitive tools for streamlined administration, efficient
          communication, and personalized learning. Join us in shaping the
          future of education - where every student's potential is unlocked, and
          every school thrives. Explore limitless possibilities with{" "}
          <span>EDUSYNC</span>, your key to educational excellence.
        </p>

        <div className="Hero-Buttons pt-4">
          <ActionButton Name="Get Started" />
          <div className="me-1"></div>
          <LightButton Name="Explore More" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
