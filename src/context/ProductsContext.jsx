import { useEffect, useState } from 'react';
import axios from 'axios';
import {createContext} from 'react';

export let ProductContext = createContext('')

const ProductContextProvider = (props) => {
    
    
    const [products, setProducts] = useState([]);
    
    const [data, setDatax] = useState(null);
    
    const getData = async (type, x, y = "arr") => {
    
        const {data} = await axios.get(`https://63189f2cf6b281877c71eab0.mockapi.io/${type}`);        
        y === "obj" ?  x({...data}) : x([...data]);
    }
    return (
        <>
            <ProductContext.Provider value={{data,setDatax, products, setProducts, getData}}>
                {props.children}
            </ProductContext.Provider>
        </>
    )
}

export default ProductContextProvider;