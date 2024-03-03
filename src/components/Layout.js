import React from 'react'
import classes from './Layout.module.scss'
import Card from './Card'
import RelatedCard from './RelatedCard'
const Layout = () => {
  return (
    <div className={classes.container}>
     <h1>
        Best Website builders in the US
        </h1> 
        <hr/>
        <Card/>
        {/* <Card/> */}
        <RelatedCard/>
    </div>
  )
}

export default Layout
