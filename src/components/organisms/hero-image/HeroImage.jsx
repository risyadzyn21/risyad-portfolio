import heroImage from "../../../assets/images/hero-image.jpg";
import Intro from "../../molecules/intro/Intro";
import * as CgIcons from "react-icons/cg";

function HeroImage() {
  return (
    <div className="hero-field">
      <img src={heroImage} alt="Hero" className="hero-image" />
      <Intro />
      <CgIcons.CgScrollV className="scroll-icon" />
    </div>
  );
}

export default HeroImage;
