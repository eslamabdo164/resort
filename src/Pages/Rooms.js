import React from 'react'
import Hero from '../component/Hero';
import Banner from '../component/Banner';
import {Link} from 'react-router-dom';
export default function Rooms() {
  return (
    <div>
     <Hero hero={'roomsHero'}>
      <Banner title ='Rooms' subtitle ='Resrver Now' >
        <Link to ='/' className='btn-primary' >
          Back Home
        </Link>
      </Banner>
    </Hero>
    </div>
  )
}
