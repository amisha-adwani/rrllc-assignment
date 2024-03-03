import React from 'react'
import classes from "./RelatedCard.module.scss";
import image from "./../assets/download 1.svg";
import rating from "./../assets/rating.svg";
const RelatedCard = () => {
  return (
    <div>
          <div className={classes.container}>
      <img src={image} style={{paddingBottom:'20px'}}/>
         <div className={classes.container_badge}>
          <div className={classes.container_badge_1}>
            20% Off
          </div>
          <div className={classes.container_badge_2}>
            Limited time
          </div>
          </div>
          <h3> Webbuilder 1</h3>
          <p>Computer  Modern clasic with wix support</p>
         <div className={classes.container_prices}>
          <p1>$39.95</p1>
          <p2>$49.96</p2>
          <p3>(20% Off)</p3>
         </div>
        <button> View Deal</button>
      </div>
    </div> 
    
  )
}

export default RelatedCard
