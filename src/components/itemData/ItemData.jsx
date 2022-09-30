import {useEffect, useState, useContext} from 'react';
import {ProductContext} from '../../context/ProductsContext';
import {useParams} from 'react-router-dom';
import Star from '../star/Star';
import {Row, Col, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {faTruck} from '@fortawesome/free-solid-svg-icons';
import TextComponent from '../textComponent/TextComponent';
import Spiner from '../spiner/Spiner';


const ItemData = () => {

    const params = useParams ();
    
    const {getData, data, setDatax} = useContext(ProductContext);

    
    useEffect(() => {
        let x = params.itmId;
        getData(`products/${x}`,setDatax, "obj");
    },[params])
    
    return (
        <>
            {data ? (
                <section className='d-flex'>
                    <Container>
                        <Row>
                            <Col lg={6}>
                                <div className='d-flex p-4'>
                                    <div className='w-25'>
                                        <img className='w-100' src={data.img[0]}/>
                                        <img className='w-100' src={data.img[1]}/> 
                                        <img className='w-100' src={data.img[2]}/> 
                                        <img className='w-100' src={data.img[3]}/> 
                                        <img className='w-100' src={data.img[3]}/> 
                                    </div>  
                                    <div className='w-75 ps-5'>
                                        <img className='w-100' src={data.img[4]}/> 
                                    </div>             
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className='p-4'>
                                    <div className='d-flex justify-content-between'>
                                        <p style={{color:'#888'}}>Apple</p>
                                        <FontAwesomeIcon icon={faHeart}/>
                                    </div>
                                    <h5>{data.name}</h5>
                                    <div className='d-flex mt-3'>
                                        <Star num = {data.numberOfStars}/>
                                        <span style={{color:'#888'}}
                                             className='ms-3'>({data.numberOfReviews}) Review</span>
                                    </div>
                                    <p className='mt-2 mb-0 fs-2 text-primary fw-bold'>${data.priceAfterdiscount}</p>
                                    {
                                        data.inStock > 0 ? <p style={{color:'green'}}>In Stock</p> :
                                        <p style={{color:'red'}}>Out Of Stock</p>
                                    }
                                    <div className='w-25 text-center d-flex justify-content-between'>
                                        <p style={{width:'40px',height:'40px',lineHeight:'35px',cursor:'pointer'}} className='fs-5 rounded-circle border border-secondary'>+</p>
                                        <p style={{width:'40px',height:'40px',lineHeight:'35px'}} className='fs-5'>1</p>
                                        <p style={{width:'40px',height:'40px',lineHeight:'35px',cursor:'pointer'}} className='fs-5 rounded-circle border border-secondary'>-</p>
                                    </div>
                                    <div className='d-flex mb-1'>
                                        <TextComponent it1= 'Full Price'  it2= '' clr = '#c3c3c3' brClr = '#c3c3c3'/>
                                        <TextComponent it1= 'Installments'  it2= '' clr = '#000' brClr = '#c3c3c3'/>
                                    </div>
                                    <div className='d-flex'>
                                        <TextComponent  brClr = '#c3c3c3' img='/imgs/2.jpg'/>
                                        <TextComponent  brClr = '#c3c3c3' img='/imgs/2.jpg'/>
                                        <TextComponent  brClr = '#c3c3c3' img='/imgs/2.jpg'/>
                                        <TextComponent  brClr = '#c3c3c3' img='/imgs/2.jpg'/>
                                    </div>
                                    
                                    <h6 className='mt-2'>Memory</h6>
                                    <div className='d-flex'>
                                        <TextComponent it1= '128GB'  it2= '$999.00' clr = '#000' brClr = '#000'/>
                                        <TextComponent it1= '256GB'  it2= '$999.00' clr = '#c3c3c3' brClr = '#c3c3c3'/>
                                        <TextComponent it1= '512GB'  it2= '$999.00' clr = '#c3c3c3' brClr = '#c3c3c3'/>
                                        <TextComponent it1= '1TB'  it2= '$999.00' clr = '#c3c3c3' brClr = '#c3c3c3'/>
                                    </div>
                                    <h6 className='mt-2'>Color</h6>
                                    <div className='d-flex'>
                                        <TextComponent it1= 'silver' clr = '#c3c3c3' brClr = '#c3c3c3' colo='#EDEDED'/>
                                        <TextComponent it1= 'Sierra Blue' clr = '#000' brClr = '#000' colo='#90BAD1'/>
                                    </div>
                                    <h6 className='mt-2'>Insurance</h6>
                                    <div className='d-flex'>
                                        <TextComponent it1= '1 year'  it2= '$99.00' clr = '#000' brClr = '#c3c3c3'/>
                                        <TextComponent it1= '2 year'  it2= '$159.00' clr = '#000' brClr = '#000'/>
                                    </div>
                                    <button style={{background: data.inStock > 0 ? 'blue': '#000'}}
                                     className='w-100 btn mt-3 text-white'>
                                        Add to cart
                                    </button>
                                    <div style={{color:'#6F6F6F'}} className='border-top py-4 mt-4'>
                                        <div className='d-flex'>
                                           <FontAwesomeIcon icon={faTruck}/>
                                           <p className='ms-3'>Free shipping, arrives by Tue, Nov 23</p>
                                        </div>
                                        <div className='d-flex'>
                                           <img src='/imgs/cub.png' alt='cub' style={{width:'20px', height:'20px'}}/>
                                           <p className='ms-3'>Free 10-day return window starts Dec 26th Details</p>
                                        </div>
                                       
                                    </div>
                                    
                                </div>
                            </Col>
                        </Row>
                    </Container>  
                    
                </section>
            ): (
                <>
                 <Spiner />
                </>
            )}
        </>
    )
}

export default ItemData;

