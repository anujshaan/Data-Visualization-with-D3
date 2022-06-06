import React from 'react'
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <div className='home'>
            <Link to={`/theory`}><h2>Theory</h2></Link>
            <Link to={`/practical`}><h2>Practical</h2></Link>
        </div>
    </div>
  )
}

export default Home