import React from "react";
import classes from "./Card.module.scss";
import image from "./../assets/main.svg";
import rating from "./../assets/rating.svg";
const Card = () => {
  return (
    <div className={classes.container}>
      <div className={classes.container_badge}> 1 
      <div className={classes.container_badge_best}>
        Best Choice
      </div>
      </div>
         <div className={classes.container_main}> 
         <div className={classes.container_main_image}>
      <img src={image} alt="main"/>
         </div>
      <div className={classes.container_written}>
        <h3>WixPro 72-Inch Responsive Website Builder</h3>
        <p>
          Comprehensive Digital Platform Creation Tool, Streamlined Design
          Interface for Professional Websites and Online Stores (Black/Blue)
        </p>
        <h3 style={{color:'#2C384A'}}>Main highlights</h3>
        <p className={classes.container_written_p1}>
          What You Get: Receive the WixPro website builder suite, access to
          premium design templates, an extensive library of widgets and apps,
          and detailed step-by-step guides.
        </p>
        <div className={classes.container_written_show}>
        <a href="/">
          Show more
        </a>
        </div>
      </div>
      <div className={classes.container_right}>
        <div className={classes.container_right_rating}>
        <h2>9.5</h2>
        <div>
          Excellent 
          <img src={rating} alt="rating"/>
        </div>
        </div>
          <button>View</button>
      </div>
    </div>  
    </div>
  );
};

export default Card;
