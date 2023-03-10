import React, { useEffect, useState } from 'react'
import { Nav } from '../components/Nav'
import { HashLink as Link } from 'react-router-hash-link'
import '../portfolio.css'
import image from '../images/portfolio/image0.jpeg'
import image1 from '../images/portfolio/image1.jpeg'
import image2 from '../images/portfolio/image2.jpeg'
import image3 from '../images/portfolio/image3.jpeg'
import image4 from '../images/portfolio/image4.jpeg'
import image5 from '../images/portfolio/image5.jpeg'
import image6 from '../images/portfolio/image6.jpeg'
import image7 from '../images/portfolio/image7.jpeg'
import image8 from '../images/portfolio/image8.jpeg'
import image9 from '../images/portfolio/image9.jpeg'
import image10 from '../images/portfolio/image10.png'
import image11 from '../images/portfolio/image11.png'
import image12 from '../images/portfolio/image12.jpeg'
import image13 from '../images/portfolio/image13.jpeg'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.compat.css'
import { slide as Menu } from 'react-burger-menu'

const Portfolio = () => {
  const [navBG, setNavBG] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleIsOpen = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 90) {
      setNavBG(true)
    } else {
      setNavBG(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change Logo
    window.addEventListener('scroll', changeBackground)
  })
  return (
    <div className='overflow-x-hidden'>
      <nav
        className={
          !navBG
            ? 'flex items-center justify-between py-8 px-5 md:px-12 text-white fixed w-full'
            : 'flex items-center justify-between py-8 px-5 md:px-12 fixed w-full bg-primary text-black'
        }>
        <h1>
          <Link
            to={'/#landing'}
            className={
              !navBG
                ? 'text-md md:text-4xl font-semibold cursor-pointer hover:text-blue-200'
                : 'text-md md:text-4xl font-semibold cursor-pointer hover:text-blue-700'
            }>
            Esthetics By Tay
          </Link>
        </h1>
        <Menu
          right
          isOpen={menuOpen}
          onOpen={handleIsOpen}
          onClose={handleIsOpen}
          burgerBarClassName={!navBG ? 'burger-bar-white' : 'burger-bar-black'}>
          <li>
            <a
              href='https://www.vagaro.com/estheticsbytay'
              className={
                !navBG ? 'hover:text-blue-200' : 'hover:text-blue-500'
              }>
              Book Now
            </a>
          </li>
          <li>
            <Link
              to={'/#services'}
              className={!navBG ? 'hover:text-blue-200' : 'hover:text-blue-500'}
              onClick={() => {
                closeMenu()
              }}>
              Services
            </Link>
          </li>
          <li>
            <Link
              to={'/#about'}
              className={!navBG ? 'hover:text-blue-200' : 'hover:text-blue-500'}
              onClick={() => {
                closeMenu()
              }}>
              About
            </Link>
          </li>
          <li>
            <Link
              to={'#portfolio-landing'}
              className={!navBG ? 'hover:text-blue-200' : 'hover:text-blue-500'}
              onClick={() => {
                closeMenu()
              }}>
              Portfolio
            </Link>
          </li>
        </Menu>
        <ul className=' gap-2 md:gap-5 text-base md:text-2xl hidden md:flex'>
          <li>
            <a
              href='https://www.vagaro.com/estheticsbytay'
              className={
                !navBG ? 'hover:text-blue-200' : 'hover:text-blue-500'
              }>
              Book Now
            </a>
          </li>
          <li>
            <Link
              to={'/#services'}
              className={
                !navBG ? 'hover:text-blue-200' : 'hover:text-blue-500'
              }>
              Services
            </Link>
          </li>
          <li>
            <Link
              to={'/#about'}
              className={
                !navBG ? 'hover:text-blue-200' : 'hover:text-blue-500'
              }>
              About
            </Link>
          </li>
          <li>
            <Link
              to={'#portfolio-landing'}
              className={
                !navBG ? 'hover:text-blue-200' : 'hover:text-blue-500'
              }>
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
      <section id='portfolio-landing' className='portfolio-landing h-[70vh]'>
        <div className='h-[100%] w-[100%] flex justify-center text-xl'>
          <h1 className='text-white h-max my-auto font-medium text-6xl border-b-2'>
            Portfolio
          </h1>
        </div>
      </section>
      {/* GALLERY */}
      <div className='services py-24 flex flex-col gap-12 min-h-[3300px]'>
        <section className='gallery flex flex-col gap-14 px-24'>
          <ScrollAnimation animateIn='fadeInRight' animateOnce={true}>
            <h1 className='text-2xl md:text-4xl mx-auto w-max -mb-8 md:pb-4 border-b-2'>
              Brow Waxing
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
            <div className='waxing-imgs mx-auto flex flex-wrap gap-12 justify-center items-center p-12'>
              <img
                src={image}
                alt=''
                className='min-w-[275px] rounded-lg max-h-[400px] transition-transform w-[400px]'
              />
              <img
                src={image1}
                alt=''
                className='min-w-[275px] rounded-lg max-h-[400px] transition-transform w-[400px]'
              />
              <img
                src={image2}
                alt=''
                className='min-w-[275px] rounded-lg max-h-[400px] transition-transform w-[400px]'
              />
            </div>
          </ScrollAnimation>
        </section>

        <section className='gallery flex flex-col gap-14 px-24'>
          <ScrollAnimation animateIn='fadeInLeft' animateOnce={true}>
            <h1 className='text-2xl md:text-4xl mx-auto w-max -mb-8 md:pb-4 border-b-2'>
              Brow Laminations
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
            <div className='waxing-imgs mx-auto flex flex-wrap gap-12 justify-center items-center p-12'>
              <img
                src={image3}
                alt=''
                className='min-w-[275px] rounded-lg max-h-[400px] transition-transform w-[400px]'
              />
              <img
                src={image4}
                alt=''
                className='min-w-[275px] rounded-lg max-h-[400px] transition-transform w-[400px]'
              />
              <img
                src={image5}
                alt=''
                className='min-w-[275px] rounded-lg max-h-[400px] transition-transform w-[400px]'
              />
              <img
                src={image6}
                alt=''
                className='min-w-[275px] rounded-lg max-h-[400px] transition-transform w-[400px]'
              />
            </div>
          </ScrollAnimation>
        </section>

        <section className='gallery flex flex-col gap-14 px-24'>
          <ScrollAnimation animateIn='fadeInRight' animateOnce={true}>
            <h1 className='text-2xl md:text-4xl mx-auto w-max -mb-8 md:pb-4 border-b-2'>
              Facial Treatments
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
            <div className='waxing-imgs mx-auto flex flex-wrap gap-12 justify-center items-center p-12'>
              <img
                src={image7}
                alt=''
                className='min-w-[275px] rounded-lg max-h-[400px] transition-transform w-[400px]'
              />
              <img
                src={image8}
                alt=''
                className='min-w-[275px] rounded-lg max-h-[400px] transition-transform w-[400px]'
              />
              <img
                src={image9}
                alt=''
                className='min-w-[275px] rounded-lg max-h-[400px] transition-transform w-[400px]'
              />
            </div>
          </ScrollAnimation>
        </section>

        <section className='gallery flex flex-col gap-14 px-24'>
          <ScrollAnimation animateIn='fadeInLeft' animateOnce={true}>
            <h1 className='text-2xl md:text-4xl mx-auto w-max -mb-8 md:pb-4 border-b-2'>
              Acne Program
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
            <div className='waxing-imgs mx-auto flex flex-wrap gap-12 justify-center items-center p-12'>
              <img
                src={image10}
                alt=''
                className='min-w-[275px] rounded-lg max-h-[400px] transition-transform w-[500px]'
              />
              <img
                src={image11}
                alt=''
                className='min-w-[275px] rounded-lg max-h-[400px] transition-transform w-[500px]'
              />
            </div>
          </ScrollAnimation>
        </section>
        <section className='gallery flex flex-col gap-14 px-24'>
          <ScrollAnimation animateIn='fadeInRight' animateOnce={true}>
            <h1 className='text-2xl md:text-4xl mx-auto w-max -mb-8 md:pb-4 border-b-2'>
              LED Treatments
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
            <div className='waxing-imgs mx-auto flex flex-wrap gap-12 justify-center items-center p-12'>
              <img
                src={image12}
                alt=''
                className='min-w-[275px] rounded-lg max-h-[400px] transition-transform w-[400px]'
              />
              <img
                src={image13}
                alt=''
                className='min-w-[275px] rounded-lg max-h-[400px] transition-transform w-[400px]'
              />
            </div>
          </ScrollAnimation>
        </section>
      </div>
    </div>
  )
}

export default Portfolio
