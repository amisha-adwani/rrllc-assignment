import React from 'react'
import classes from "./Info.module.scss";
const Info = () => {
  return (
    <div className={classes.container}>
      <hr />
        <div className={classes.container_info}>
      <p> Last Updated - February 22, 2020 </p>
      <p> Advertising Disclosure </p>
        </div>
      <hr/>
        <div className={classes.container_options}>
      <ul>
        <li>Tools</li>
        <li>AWS Builder</li>
        <li>Start Build</li>
        <li>Build Supplies</li>
        <li>Tooling</li>
        <li>BlueHosting</li>
      </ul>
        </div>
        <div className={classes.container_breadcrumbs}>
        <ul>
        <li>Home</li>
        <li>{'>'}</li>
        <li>Hosting for all</li>
        <li>{'>'}</li>
        <li>Hosting</li>
        <li>{'>'}</li>
        <li>Hosting6</li>
        <li>{'>'}</li>
        <li>Hosting5</li>
      </ul>
        </div>
    </div>
  )
}

export default Info
