import React from 'react'
import Wrapper from '../Layouts/Wrapper'
import Nav from '../components/Nav/Nav'
import Banner from '../components/Banner/Banner'
import KeyFeatures from '../components/KeyFeatures/KeyFeatures'


const Home = () => {
  return (
   <>
     <Wrapper>
      <Nav />
      <Banner />
    </Wrapper>
     <KeyFeatures />
   </>
  )
}

export default Home