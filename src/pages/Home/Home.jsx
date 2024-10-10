import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/Explore/ExploreMenu'
import Fooddetails from '../../components/Fooddetails/Fooddetails'

const Home = () => {
  const [type , setType] =useState("All");
  return (
    <div>
      <Header/>
      <ExploreMenu listType = {type}  listSetType = {setType}/>
      <Fooddetails listType = {type}/>
    </div>
  )
}

export default Home;