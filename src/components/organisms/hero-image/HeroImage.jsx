import heroImage from "../../../assets/images/hero-image.jpg";
import AvatarProfile from "../../atoms/avatar/AvatarProfile";

function HeroImage() {
  return (
    <div className="hero-field">
      <img src={heroImage} alt="Hero" className="hero-image" />
      <AvatarProfile />
    </div>
  );
}

export default HeroImage;
