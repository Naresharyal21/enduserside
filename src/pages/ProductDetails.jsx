import { useNavigate, useParams } from "react-router";
import { IoIosAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { toast } from 'react-toastify';

import { deleteProduct } from "../myapi/productApi";
import useProductDetails from "../hooks/useProductDetails";
import { useState } from "react";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { productID } = useParams();

  const { product, loading ,error  } = useProductDetails(productID);
  const [count, setCount] = useState(1);

  const notify = () => toast("Product Deleted Successfully");

  const handleInc = () => setCount(count + 1);
  const handleDec = () => setCount(Math.max(1, count - 1)); // prevent count < 1

  const handleBuy = () => {
    navigate('/underConstruction');
  };

  const handleDeleteProduct = async () => {
    notify();
    await deleteProduct(productID);
    navigate('/products');
  };

  const handleEditProduct = () => {
    navigate(`/editproduct/${productID}`);
  };

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>Error loading product: {error}</p>;

  return (
    <div className="flex margintop">
      <div className="myProductImages flex">
        <div className="viewImage">
          {product.images && product.images.length > 0 && (
            <img src={product.images[0]} alt={`${product.title} image 1`} />
          )}
        </div>
        <div className="flex gallaryImage">
          {product.images?.map((imgUrl, index) => (
            <div className="images" key={index}>
              <img src={imgUrl} alt={`${product.title} image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="myproductsdetails">
        <h1>{product.title}</h1>
        <h4>{product.description}</h4>
        <div className="rating">Product Rating - {product.rating}</div>
        <div className="myBarnd">
          <p>Brand - {product.brand}</p>
          <p>Category - {product.category}</p>
          <p>Availability - {product.availabilityStatus}</p>
          <p>Warranty Information - {product.warrantyInformation}</p>
          <p>Shipment - {product.shippingInformation}</p>
        </div>
        <div className="price">Price ${product.price}</div>
        <div className="returnPolicy">
          <p>Return Policy - {product.returnPolicy}</p>
        </div>
        <div className="quantity">
          <button onClick={handleDec}><RiSubtractFill /></button>
          <div className="count flex"><h2>{count}</h2></div>
          <button onClick={handleInc}><IoIosAdd /></button>
        </div>
        
      </div>
    </div>
  );
};

export default ProductDetail;
