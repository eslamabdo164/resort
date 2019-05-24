import React from 'react'
import Hero from '../component/Hero';
import Banner from '../component/Banner';
import {Link} from 'react-router-dom';

export default function Error() {
  return (
    <div>
      <Hero>
      <Banner title='hi' subtitle='Error Not Found' >
        <Link to='/rooms' className='btn-primary' >
          Back Home
        </Link>
      </Banner>
     </Hero> 
    </div>
  )
}
