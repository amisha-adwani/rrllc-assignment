import React from 'react'
import classes from "./Signup.module.scss";
const Signup = () => {
  return (
    <div className={classes.container}>
     <h3>Sign up and get exclusive special deals</h3> 
      <div className={classes.container_form}>
      <input type="text" />
      <button>Sign up</button>
      </div>
    </div>
  )
}

export default Signup
