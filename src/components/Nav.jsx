import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { slide as Menu } from 'react-burger-menu'

export function Nav({ navBG }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleIsOpen = () => {
    setMenuOpen(!menuOpen)
  }
  const closeMenu = () => {
    setMenuOpen(false)
  }
  return (
    <nav
      className={
        !navBG
          ? 'flex items-center justify-between py-8 px-12 text-white fixed w-full'
          : 'flex items-center justify-between py-8 px-12 fixed w-full bg-primary text-black'
      }>
      <Link
        to='/#landing'
        className={
          !navBG
            ? 'text-lg md:text-4xl font-semibold cursor-pointer hover:text-blue-200'
            : 'text-lg md:text-4xl font-semibold cursor-pointer hover:text-blue-700'
        }>
        Esthetics By Tay
      </Link>
      <Menu
        right
        isOpen={menuOpen}
        onOpen={handleIsOpen}
        onClose={handleIsOpen}
        burgerBarClassName={!navBG ? 'burger-bar-white' : 'burger-bar-black'}>
        <li>
          <a
            href='https://www.vagaro.com/estheticsbytay'
            className={'hover:text-blue-500'}>
            Book Now
          </a>
        </li>
        <li>
          <Link
            to='/#services'
            className={'hover:text-blue-500'}
            onClick={() => {
              closeMenu()
            }}>
            Services
          </Link>
        </li>
        <li>
          <Link
            to='/#about'
            className={'hover:text-blue-500'}
            onClick={() => {
              closeMenu()
            }}>
            About
          </Link>
        </li>
        <li>
          <Link
            to='portfolio'
            className={'hover:text-blue-500'}
            onClick={() => {
              closeMenu()
            }}>
            Portfolio
          </Link>
        </li>
      </Menu>
      <div></div>
      <ul className='hidden gap-5 text-2xl md:flex'>
        <li>
          <a
            href='https://www.vagaro.com/estheticsbytay'
            className={!navBG ? 'hover:text-blue-200' : 'hover:text-blue-500'}>
            Book Now
          </a>
        </li>
        <li>
          <Link
            to='/#services'
            className={!navBG ? 'hover:text-blue-200' : 'hover:text-blue-500'}>
            Services
          </Link>
        </li>
        <li>
          <Link
            to='/#about'
            className={!navBG ? 'hover:text-blue-200' : 'hover:text-blue-500'}>
            About
          </Link>
        </li>
        <li>
          <Link
            to='portfolio'
            className={!navBG ? 'hover:text-blue-200' : 'hover:text-blue-500'}>
            Portfolio
          </Link>
        </li>
      </ul>
    </nav>
  )
}
