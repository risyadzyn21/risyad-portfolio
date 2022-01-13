import heroImage from "../../../assets/images/hero-image.jpg";
import Intro from "../../molecules/intro/Intro";
import * as CgIcons from "react-icons/cg";
import Sidebar from "../../molecules/intro/sidebar/Sidebar";

function HeroImage() {
  return (
    <div className="hero-field">
      <Sidebar />
      <img src={heroImage} alt="Hero" className="hero-image" />
      <Intro />
      <CgIcons.CgScrollV className="scroll-icon" />
    </div>
  );
}

export default HeroImage;
