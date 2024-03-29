import React from 'react'
import classes from "./RelatedCard.module.scss";
import image from "./../assets/main.svg";
const RelatedCard = () => {
  return (
    <div>
          <div className={classes.container}>
      <img src={image} alt="main"/>
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
          <p className={classes.container_prices_p1}>$39.95</p>
          <p className={classes.container_prices_p2}>$49.96</p>
          <p className={classes.container_prices_p3}>(20% Off)</p>
         </div>
        <button> View Deal</button>
      </div>
    </div> 
    
  )
}

export default RelatedCard
