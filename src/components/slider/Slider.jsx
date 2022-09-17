
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState} from 'react';
import './slider.scss';
import axios from 'axios';
import Spiner from '../spiner/Spiner';

const Slider = () => {

    const [sliderItem, setSliderItem] = useState([]);

    const getData = async () => {
        // we can don't reapeat (getData) function by send (setSliderItem) as a callback function
        // and send (slider) as a parameter to getData in productContext
        // but it will take more time because the two component slider and Products
        // in the same page and the same function will get two thing and it will take more time  
    
        const {data} = await axios.get(`https://63189f2cf6b281877c71eab0.mockapi.io/slider`);
                               
        setSliderItem([...data])
    }
    
    useEffect(() => {
        getData();
    },[])


    return (
        <>
        {sliderItem.length > 0 ? (
            <section className='position-relative slider'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={{
                    nextEl: ".image-swiper-button-next",
                    prevEl: ".image-swiper-button-prev",
                    disabledClass: "swiper-button-disabled"
                }}
                pagination={{ clickable: true }}
            >
                {sliderItem.map(item => <SwiperSlide key={item.id}>
                    <img src={item.img} alt="slider-item" className='w-100 h-100'/>
                </SwiperSlide>)}
            </Swiper>
            <div style={{zIndex:'99'}} className='arrows d-none d-lg-block w-75  position-absolute start-50 top-50 translate-middle'>
                <button className='image-swiper-button-prev rounded-circle position-absolute start-0'>
                    <FontAwesomeIcon className='fs-5'  icon={faChevronLeft}/>
                </button>
                <button className='image-swiper-button-next rounded-circle position-absolute end-0'>
                    <FontAwesomeIcon className='fs-5' icon={faChevronRight}/>
                </button>
            </div>
            </section>    
        ) : (<>
            <Spiner />
        </>)}
        </>
    )
}

export default Slider;


