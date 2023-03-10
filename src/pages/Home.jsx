import { Nav } from '../components/Nav'
import React, { useEffect, useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
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
import selfImg from '../images/self/taylor shot.jpg'
import igIcon from '../icons/instagram (3).png'
import tikTokIcon from '../icons/tik-tok.png'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.compat.css'

export function Home() {
  const [navBG, setNavBG] = useState(false)

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
    <div className='main-container h-screen'>
      <section id='landing' className='landing border-b-black'>
        <Nav navBG={navBG} />
        <div className='h-[100%] w-[100%] flex justify-center text-xl'>
          <button
            onClick={() => {
              window.location.href = 'https://www.vagaro.com/estheticsbytay'
            }}
            className='text-white h-max w-max border-[1px] my-auto py-5 px-8 rounded-full bg-bg-transparent font-medium bg-black bg-opacity-20 hover:bg-white hover:bg-opacity-80 hover:text-black'>
            Book Your Appointment
          </button>
        </div>
      </section>

      <section
        id='services'
        className='services pt-24 flex flex-col gap-12 w-full'>
        <div className='flex justify-center'>
          <h1 className='text-6xl border-b-black border-b-[2px] mb-12 font-semibold'>
            My Services
          </h1>
        </div>
        <div className='flex gap-12 justify-center flex-wrap pb-24 px-7 md:px-14 md:w-3/4 mx-auto'>
          <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
            <div className='service-box flex flex-col gap-4 px-8 pt-2 pb-6 border-2 border-black rounded-md'>
              <h1 className='text-4xl mb-2 leading-[75px] border-b-[2px] font-bold'>
                Facials
              </h1>
              <div className='text-2xl flex flex-col gap-4 my-auto'>
                <div className='flex flex-col gap-2'>
                  <h2 className='font-semibold'>Skin Consulation</h2>
                  <p className='font-normal text-xl'>$60.00</p>
                  <p className='text-base'>
                    Learn more about your own skin and how I can help you in the
                    best way possible!
                  </p>
                </div>
                <div className='flex flex-col gap-2'>
                  <h2 className='font-semibold'>Signature Facial</h2>
                  <p className='font-normal text-xl'>$85.00</p>
                  <p className='text-base'>
                    Customizable to your skin’s needs! Increased hydration,
                    exfoliation and brightening. Reduced redness and irritation.
                  </p>
                </div>
                <div className='flex flex-col gap-2'>
                  <h2 className='font-semibold'>DMK Enzyme</h2>
                  <p className='font-normal text-xl'>$200.00</p>
                  <p className='text-base'>
                    Restores skin to its peak condition. Reduces redness and
                    irritation, resets the skin’s cellular function, naturally
                    creates a more lifted appearance for the skin.
                  </p>
                </div>
                <div className='flex flex-col gap-2'>
                  <h2 className='font-semibold'>Custom Peel</h2>
                  <p className='font-normal text-xl'>$140.00</p>
                  <p className='text-base'>
                    Speeds up the natural exfoliation process of the skin, helps
                    regulate oil production to control acne breakouts, reduces
                    the appearance of acne scarring, hyperpigmentation (dark
                    spots) and post-inflammatory hyperpigmentation (post
                    breakout red spots). <br />
                    <span className='text-sm'>
                      For approved existing clients **
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
            <div className='service-box flex flex-col gap-4 px-8 pt-2 pb-6 border-2 border-black rounded-md'>
              <h1 className='text-4xl mb-2 leading-[75px] border-b-[2px] font-bold'>
                Beauty
              </h1>
              <div className='text-2xl flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                  <h2 className='font-semibold'>Waxing</h2>
                  <h4 className='text-lg'>Lip Wax - $5.00</h4>
                  <h4 className='text-lg'>Nose Wax - $5.00</h4>
                  <h4 className='text-lg'>Underarm Wax - $30.00</h4>
                  <h4 className='text-lg'>Full Leg Wax - $55.00</h4>
                  <p className='font-normal text-xl'></p>
                </div>
                <div className='flex flex-col gap-2'>
                  <h2 className='font-semibold'>Brows</h2>
                  <h4 className='text-lg'>Brow Shape - $20.00</h4>
                  <h4 className='text-lg'>Brow Tint - $70.00</h4>
                  <h4 className='text-lg'>Brow Lamination - $70.00</h4>
                  <h4 className='text-lg'>Brow Lamination + Tint - $115.00</h4>
                </div>
                <div className='flex flex-col gap-2'>
                  <h2 className='font-semibold'>Lashes</h2>
                  <p className='font-normal text-lg'>
                    Lash Lift + Tint - $115.00
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
            <div className='service-box flex flex-col gap-4 px-8 pt-2 pb-6 border-2 border-black rounded-md'>
              <h1 className='text-4xl mb-2 leading-[75px] border-b-[2px] font-bold'>
                Add-ons
              </h1>
              <div className='text-2xl flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                  <h2 className='font-semibold'>Face Massage</h2>
                  <p className='font-normal text-xl'>$25.00</p>
                  <p className='text-base'>
                    A 20 minute face, neck and shoulder massage for added
                    relaxation hydration and stress relief
                  </p>
                </div>
                <div className='flex flex-col gap-2'>
                  <h2 className='font-semibold'>LED Light Therapy</h2>
                  <p className='font-normal text-xl'>$35.00</p>
                  <p className='text-base'>
                    30 minutes of uninterrupted time under the Celluma LED light
                    therapy.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      <section className='carousel overflow-hidden'>
        <div className='carousel-items'>
          <img src={image} alt='' className='carousel-img' />
          <img src={image2} alt='' className='carousel-img' />
          <img src={image3} alt='' className='carousel-img' />
          <img src={image4} alt='' className='carousel-img' />
          <img src={image5} alt='' className='carousel-img' />
          <img src={image6} alt='' className='carousel-img' />
          <img src={image7} alt='' className='carousel-img' />
          <img src={image8} alt='' className='carousel-img' />
          <img src={image9} alt='' className='carousel-img' />
          <img src={image10} alt='' className='carousel-img' />
          <img src={image11} alt='' className='carousel-img' />
          <img src={image12} alt='' className='carousel-img' />
          <img src={image13} alt='' className='carousel-img' />
          <img src={image} alt='' className='carousel-img' />
          <img src={image2} alt='' className='carousel-img' />
          <img src={image3} alt='' className='carousel-img' />
          <img src={image4} alt='' className='carousel-img' />
          <img src={image5} alt='' className='carousel-img' />
          <img src={image6} alt='' className='carousel-img' />
          <img src={image7} alt='' className='carousel-img' />
          <img src={image8} alt='' className='carousel-img' />
          <img src={image9} alt='' className='carousel-img' />
          <img src={image10} alt='' className='carousel-img' />
          <img src={image11} alt='' className='carousel-img' />
          <img src={image12} alt='' className='carousel-img' />
          <img src={image13} alt='' className='carousel-img' />
        </div>
      </section>
      <section
        id='about'
        className='about flex flex-col gap-12 w-full py-[150px]'>
        <div className='text-center flex flex-col gap-4 w-3/4 lg:w-1/2 mx-auto text-lg tracking-wider my-auto'>
          <ScrollAnimation animateIn='fadeInLeft' animateOnce={true}>
            <h1 className='text-6xl border-b-black border-b-[2px] font-semibold text-center mb-12 w-max mx-auto'>
              Who am I?
            </h1>
          </ScrollAnimation>
          {/* <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
            <div className=' flex flex-col justify-center mx-auto mb-12'>
              <img
                src={selfImg}
                alt=''
                className='portrait w-[250px] md:w-[500px] h-[250px] md:h-[500px] mt-auto rounded-full  border-2 border-black mx-auto'
              />
            </div>
          </ScrollAnimation> */}
          <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
            <p>
              Dual licensed Esthetican & Massage Therapist focusing on results
              driven treatments, relaxation & natural beauty enhancing services.
            </p>
            <br />
            <p>
              My skin journey started many years ago because I struggled with
              inflamed cystic acne. I struggled to feel comfortable in my own
              skin & I didn't know how to change it, no matter what I tried.
              Through that journey I found my esthetician, she helped heal my
              skin & explain what was happening to form these breakouts & what
              to do to prevent them.
            </p>
            <br />
            <p>
              Seeing those changes in my skin, understanding what was going on,
              & knowing I have the ability to prevent them made me feel
              empowered & proud of my skin. This is what inspired me to become
              an Esthetician - to help you fall in love with your own skin again
            </p>
          </ScrollAnimation>
        </div>
      </section>
      <footer className='flex  flex-col justify-center items-center py-12 gap-4 border-t-[1px] border-black'>
        <h1 className='text-lg'>
          © 2022 Esthetics by Tay. All rights reserved.
        </h1>
        <div className='flex gap-6'>
          <img
            src={tikTokIcon}
            alt=''
            className='w-[33px] h-[33px] rounded-lg cursor-pointer'
            onClick={() => {
              window.location.href = 'https://www.tiktok.com/@taylorcolette_'
            }}
          />
          <img
            src={igIcon}
            alt=''
            className='w-[33px] h-[33px] rounded-lg cursor-pointer'
            onClick={() => {
              window.location.href = 'https://www.instagram.com/estheticsbytay_'
            }}
          />
        </div>
      </footer>
      {/* <section
       id='contact'
       className='about py-24 flex flex-col gap-12 w-max bg-gray-100'>
       <div className='flex justify-center'>
         <h1 className='text-6xl border-b-black border-b-[2px] font-semibold'>
           Contact
         </h1>
       </div>
       <div className='text-center flex flex-col gap-4 w-3/4 lg:w-1/2 mx-auto text-lg tracking-wider'>
         <h1>Send me an email:</h1>
         <h1>Instagram:</h1>
         <h1>Book an Appointment:</h1>
       </div>
      </section> */}
    </div>
  )
}

export default Home
