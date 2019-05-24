import React from 'react'
import Hero from '../component/Hero';
import Banner from '../component/Banner';
import {Link} from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <Hero>
          <Banner title = 'luxuary Rooms' subtitle = 'deblux rooms starts at 300$' >
            <Link to ='/rooms' className = 'btn-primary'>
              Our Rooms
            </Link> 
          </Banner>
      </Hero>
    </div>
  )
}

export default Home ;
