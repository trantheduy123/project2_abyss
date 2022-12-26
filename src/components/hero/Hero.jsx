import React from 'react'
import css from '../hero/Hero.module.css'
import HeroImg from './assets/hero.png'
const Hero = () => {
  return (
    <div className={css.container}>


          {/* Left side */}
        <div className={css.h_sides}>
          <span>skin protection cream</span>

          <div className={css.text2}>
            <span>Trendy Collection</span>
            <span>Trendy Collection</span>
          </div>
        </div>

          {/* Middle side */}
        <div className={css.wrapper}>
          <div className={css.blueCircle}></div>
          <img src={HeroImg} alt="" width={600}/>
        </div>
    </div>
    
  )
}

export default Hero