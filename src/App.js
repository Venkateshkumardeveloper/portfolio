import React, { useState } from 'react'

import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {

  const [selectedTab, setSelectedTab] = useState()

  return (
    <>
      <Navbar selectedTab={selectedTab} />
      <Header setSelectedTab={setSelectedTab} />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default App