import React, { useEffect, useState } from "react";
import { fetchProductById } from "../myapi/productApi";
import { useParams } from "react-router-dom";

const useProductDetails = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);

  const getProduct = async () => {
    setloading(true);
    const { data } = await fetchProductById(productId);
    setloading(false);
  

    setProduct(data?.product||[]);
  };
  useEffect(() => {
    getProduct();
  }, [productId]);
   

  return {
    error,
    loading,
    product,
  };
};

export default useProductDetails;
