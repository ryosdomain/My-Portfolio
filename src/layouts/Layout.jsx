import React from 'react'
import Header from '../components/Header'
import Hero from '../sections/Hero'
import Marquee from '../components/Marquee'
import MyWork from '../sections/MyWork'
import AboutMe from '../sections/AboutMe'
import Skill from '../sections/Skill'
import Process from '../sections/Process'
import Footer from '../components/Footer'
import DockMenu from '../components/DockMenu'

const Layout = () => {
  return (
    <div>
        <Header />
        <DockMenu />
        <main>

        <Hero />
        <Marquee />
        <MyWork />
        <AboutMe />
        <Skill />
        <Process />
        </main>
        <Footer />
    </div>
  )
}

export default Layout