import React from 'react'
import classes from "./Footer.module.scss";
const Footer = () => {
  return (
    <div>
      <div className={classes.container}>
        <ul>
            <li className={classes.container_head}>CATEGORIES</li>
            <li>Web Builder</li>
            <li>Hosting</li>
            <li>Data Center</li>
            <li>Robotic-Automation</li>
        </ul>
        <ul>
            <li className={classes.container_head}>CONTACT</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li> Terms Of Service</li>
            <li>Categories</li>
            <li>About</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
