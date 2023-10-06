import React from 'react'
import AboutUs from '../../components/AboutUs'
import Landing from '../../components/Landing'
import ContactBtn from '../../components/ContactBtn'
import Services from '../../components/Services'
import Clients from '../../components/Clients'

function Home () {
  return (
    <>
      <Landing />
      <ContactBtn />
      <AboutUs />
      <Services />
      <Clients />
      
    </>
  )
}

export default Home
