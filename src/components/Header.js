import React, {useState, useEffect} from "react";
import classes from './Header.module.scss'
import image from './../assets/search.svg'
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);

const menuToggleHandler = () => {
  setMenuOpen((p) => !p);
};
  return (
    <header className={classes.header}>
      <div className={classes.header_content}>
        <div className={classes.header_content_input}>
          <img src={image} style={{marginTop:'5px', marginLeft:'9px'}}/>
      <input type="text"></input>
        </div>
        <ul>
          <li>
          Categories
          </li>
          <li>
          Website Builders
          </li>
          <li>
          Today's deals
          </li>
        </ul>
        <div className={classes.header_content_toggle}>
                    {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>

      </div>
    </header>
  );
};

export default Header;
