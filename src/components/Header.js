import React, {useState, useEffect} from "react";
import classes from './Header.module.scss'
import image from './../assets/IMAGE.svg'
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
      width: undefined,
      height: undefined,
  });
  useEffect(() => {
    const handleResize = () => {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
}, []);
useEffect(() => {
  if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
  }
}, [size.width, menuOpen]);

const menuToggleHandler = () => {
  setMenuOpen((p) => !p);
};
  return (
    <header className={classes.header}>
      <div className={classes.header_content}>
        <div className={`${classes.header_content_input} ${
                        menuOpen && size.width < 768 ? classes.isMenu : ""
                    }`}>
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
