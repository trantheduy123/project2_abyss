import React from 'react'
import css from '../hero/Hero.module.css'
import HeroImg from '../../assets/hero.png'
import {RiLuggageCartLine} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'
const Hero = () => {
  return (
    <div className={css.container}>


          {/* Left side */}
        <div className={css.h_sides}>
          <span className={css.text1}>skin protection cream</span>

          <div className={css.text2}>
            <span>Trendy Collection</span>
            <span>{" "}Trendy CollecTrendy CollectionTrendy CollectionTrendy CollectionTrendy CollectionTrendy CollectionTrendy Collectiontion</span>
          </div>
        </div>

          {/* Middle side */}
        <div className={css.wrapper}>
          <div className={css.blueCircle}></div>
          <img src={HeroImg} alt="" width={600}/>
              <div className={css.cart2}>
                <RiLuggageCartLine/>
                <div className={css.signup}>
                    <span>Best signup offers</span>
                    <div>
                      <BsArrowRight/>
                    </div>
                </div>
              </div>
        </div>

         {/* Right side */}
         <div className={css.h_sides}>
            <div className={css.traffic}>
              <span>1.5m</span>
              <span>Monly Traffic</span>
            </div>

            <div className={css.customers}>
              <span>100k</span>
              <span>Happy Customers</span>
            </div>
         </div>

        
    </div>
    
  )
}

export default Hero