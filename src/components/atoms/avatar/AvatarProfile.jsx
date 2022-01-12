import { Avatar } from "@chakra-ui/react";
import avaPicture from "../../../assets/images/ava-picture.jpg";

function AvatarProfile() {
  return (
    <div className="avatar">
      <Avatar size="2xl" name="Risyad Ziyan Arkham" src={avaPicture} />
    </div>
  );
}

export default AvatarProfile;
