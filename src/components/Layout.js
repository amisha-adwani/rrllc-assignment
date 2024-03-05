import React from 'react'
import classes from './Layout.module.scss'
import Card from './Card'
import RelatedCard from './RelatedCard'
import Signup from './Signup'
import Info from './Info'
const Layout = () => {
  return (
    <div className={classes.container}>
     <h1 className={classes.container_head}>
        Best Website builders in the US
        </h1> 
        <div className={classes.container_info}>
        <Info/>

        </div>
        
        <div className={classes.container_card}>
        <Card/>
        <Card/>
        <Card/>
        </div>
        <h1 className={classes.container_head2}>Related deals you might like for</h1>
        <div className={classes.container_related}>
        <RelatedCard/>
        <RelatedCard/>
        <RelatedCard/>
        </div>
        <div className={classes.container_signup}>
          <Signup/>
        </div>
    </div>
  )
}

export default Layout
