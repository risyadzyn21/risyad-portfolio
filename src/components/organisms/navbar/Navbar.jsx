import * as AiIcons from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title-wrapper">
        <h1 className="title">Risyad's Portfolio</h1>
        <h5 className="sub-title">by Risyad Ziyan Arkham</h5>
      </div>
      <ul className="menu">
        <li>
          <AiIcons.AiOutlineHome />
          Home
        </li>
        <li>About</li>
        <li>Skills</li>
        <li>Portfolio</li>
        <li>Contacts</li>
      </ul>
    </div>
  );
};

export default Navbar;
