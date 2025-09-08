import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import logo from '../../public/osascolor-01.png'
import './Navbar.css'

function Navbar() {
  return (
    <div className='flex justify-between items-center w-full h-[10vh] !px-4'>
      <div className="left-nav">
        <Link href={'/'}><Image src={logo} alt={''} width={50} height={50}/></Link>
      </div>
      <div className="right-nav flex gap-2">
        <Link className='nav-link' href={'/about'}>About</Link>
        <Link className='nav-link' href=''>Training</Link>
        <Link className='nav-link' href=''>Services</Link>
        <Link className='nav-link' href=''>Contact</Link>
        <Link className='nav-link' href=''>FAQ's</Link>
      </div>
    </div>
  )
}

export default Navbar
