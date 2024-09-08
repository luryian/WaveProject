// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Virtual } from 'swiper/modules';
import CarouselData from './CarouselData'
// Import Swiper styles
import 'swiper/css';

export default function Corousel() {
  return (
    <div className="Carousel">
        {CarouselData.map((elem) => (
            <Swiper
                key={elem.id}
                modules={[Virtual]} 
                spaceBetween={50} 
                slidesPerView={3} 
                virtual
                >
                <SwiperSlide>{elem.image}</SwiperSlide>
            </Swiper>
        ))}
    </div>
  );
};