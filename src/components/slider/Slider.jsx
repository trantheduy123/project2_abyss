import React from 'react'
import '../slider/Slider.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
// import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


import { SliderProducts } from '../../data/products'

const Slider = () => {
    return (
        <div className="s-container">
            <Swiper
                slidesPerView={3}
                spaceBetween={40}
                slidesPerGroup={1}
                loop={true}
                className='mySwiper'
                modules={[Pagination, Navigation]}
                loopFillGroupWithBlank={true}
                navigation={true}

            >
                {SliderProducts.map((slide, i) => (
                    <SwiperSlide>
                        <div className="left-s">
                            <div className="name">
                                <span>{slide.name}</span>
                                <span>{slide.detail}</span>
                            </div>

                            <span>{slide.price}$</span>
                            <div>Shop Now</div>
                        </div>
                        <img src={slide.img} alt="" className='img-p'/>

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider
