import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import {ProductContext} from '../../context/ProductsContext'
import { useEffect, useContext } from 'react';
import './products.scss';
import {Container} from 'react-bootstrap';
import "swiper/css/grid";
import Spiner from '../spiner/Spiner';
import {Link} from 'react-router-dom';

const Products = () => {


    const {products, setProducts, getData} = useContext(ProductContext);

    useEffect(() => {
        getData('products', setProducts);
    },[])

    return (
        <section className='position-relative products'>
            {products.length > 0 ? (
                <Container>
                    <h2 className='text-center my-5'>Explore Products</h2>
                    <div className='swiper-fixed-height'>
                    <Swiper
                        grid={{
                            rows:2
                        }}
                        modules={[Grid, Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={0}
                        slidesPerView={4}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                            disabledClass: "swiper-button-disabled"
                        }}
                        pagination={{
                            el: '.my-custom-pagination-div',
                            clickable: true,
                            renderBullet: (index, className) => {
                            return '<span class="' + className + '">' + '' + "</span>";
                            },
                        }}
                        breakpoints={{
                            300: {
                              slidesPerView: 2,
                              grid:{rows:2}
                            },
                            767: {
                              slidesPerView: 3,
                              grid:{rows:1}
                            },
                            992: {
                                slidesPerView: 4,
                                grid:{rows:1}
                            }
                        }}
                    >
                    {products.map(item => <SwiperSlide key={item.id}>
                        <div className='p-3 border'>
                            <Link to={`/item/${item.id}`}><img src={item.img[2]} className='w-100'/></Link>
                            <h5>{item.name}</h5>
                            <div className='d-flex justify-content-between'>
                                <p style={item.price === item.priceAfterdiscount ? {color : '#000'} : {color : 'red'}}>{item.priceAfterdiscount}</p>
                                <p className='price'>{item.price === item.priceAfterdiscount ? '' :item.price}</p>
                            </div>
                            <p className='text-start' style={item.inStock > 0 ? {color : 'green'} : {color:'red'}}>
                                {item.inStock > 0 ? 'In stock' : 'Out of stock'}
                            </p>
                        </div>
                    </SwiperSlide>)}
                    
                    </Swiper>
                    </div>
                    <div className='arrows d-none d-md-flex'>
                        <button className='swiper-button-prev'>
                            <FontAwesomeIcon className='fs-5'  icon={faChevronLeft}/>
                        </button>
                        <button className='swiper-button-next'>
                            <FontAwesomeIcon className='fs-5' icon={faChevronRight}/>
                        </button>
                    </div>
                    <div className="my-custom-pagination-div"/>
                </Container>
            ) : (
               <Spiner />
            )}
            
        </section>
    )
}

export default Products;