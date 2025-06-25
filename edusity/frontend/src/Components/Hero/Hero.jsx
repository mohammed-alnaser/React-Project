import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
      <div className='hero container'>
          <div className="hero-text">
              <h1>we ensure better education for a better world</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Facere, mollitia, optio nostrum quasi quo repellendus eum tenetur
                  cum reprehenderit, et aliquid!</p>
              <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
          </div>
      
    </div>
  )
}

export default Hero
