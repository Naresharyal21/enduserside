import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../myapi/productApi';

const useProduct = () => {
    const [error, setError] = useState(null);
const [products , setProducts] = useState([]);
const [loading , setloading] = useState(true);


const getProduct =  async ()=>{
    setloading(true);
    const {data , error} =   await fetchProducts();
    setloading(false);

    if (error){
        setError(error);
        return
        
    }
    setProducts(data?.products || []);
    
    
    
}
useEffect(()=>{
    getProduct();
},[])


return{
    
    
    error,
    loading,
    products
};
};


export default useProduct
