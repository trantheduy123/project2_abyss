import React from 'react'
import Hero from '../../assets/testimonialHero.png'
import css from './Testimonials.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import {TestimonialsData} from '../../data/testimonials.js'
const Testimonials = () => {
    return (
        <div className={css.testimonials}>
            <div className={css.wrapper}>
                <div className={css.container}>
                    <span>
                        Top Rated
                    </span>
                    <span>
                        Top Rated Top RatedTop RatedTop RatedTop RatedTop RatedTop RatedTop RatedTop
                    </span>
                </div>
                    <img src={Hero} alt="" />
            </div>
            <div className={css.container}>
                <span>
                    100k
                </span>
                <span>
                    Happy Customers with us
                </span>
            </div>

            <div className={css.review}>
                review
            </div>
            <div className={css.carousel}>
                <Swiper
                slidesPerView={3}
                slidesPerGroup={1}
                spaceBetween={20}
                className={css.tCarousel}
                >
                    {
                    TestimonialsData.map((testimonial, i) =>
                    (<SwiperSlide>
                        <div className={css.testimonial}>
                            <img src={testimonial.image} alt="" />
                            <span>{testimonial.comment}</span>
                            <hr />
                            <span className={testimonial.name}>

                            </span>
                        </div>
                    </SwiperSlide>)) 
                     
                    }
                </Swiper>
            </div>
        </div>

    )
}

export default Testimonials