import React from 'react'
import css from '../hero/Hero.module.css'
import HeroImg from '../../assets/logo2.png'
import {RiLuggageCartLine} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'
import {motion} from 'framer-motion'

const Hero = () => {
  const transition ={duration: 2,type:"spring"}
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
          <motion.div
          innitial={{bottom:"2rem"}}
          whileInView={{bottom:"30rem"}}
          transition={transition}
           className={css.blueCircle}>

           </motion.div>
          <motion.img 
          innitial={{bottom:"2rem"}}
          whileInView={{bottom:"30rem"}}
          transition={transition}
          src={HeroImg} alt="" width={600}/>
              <motion.div
              innitial={{left:"4%"}}
              whileInView={{left:"2%"}}
              transition={transition}
               className={css.cart2}>
                <RiLuggageCartLine/>
                <div className={css.signup}>
                    <span>Best signup offers</span>
                    <div>
                      <BsArrowRight/>
                    </div>
                </div>
              </motion.div>
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