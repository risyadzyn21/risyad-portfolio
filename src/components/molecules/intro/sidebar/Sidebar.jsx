import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import * as AiIcons from "react-icons/ai";

function Sidebar() {
  return (
    <div>
      <Menu>
        <MenuButton
          className="sidebar"
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList>
          <MenuItem>
            <AiIcons.AiOutlineHome />
            Home
          </MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Skills</MenuItem>
          <MenuItem>Portfolio</MenuItem>
          <MenuItem>Contacts</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}

export default Sidebar;
