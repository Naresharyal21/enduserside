import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router";
import { RiSubtractFill } from 'react-icons/ri';
import { IoIosAdd } from 'react-icons/io';
import { MdAddShoppingCart } from "react-icons/md";

import { useDispatch, useSelector } from 'react-redux';
import { addItems, increaseItems, decreaseItems } from '../appstore/Store';
import Cartdisplay from '../components/Cartdisplay';
import MyCart from './MyCart';

import withAuthorization from '../hoc/withAuthorization';
import withLoader from '../hoc/withLoader';

const Home = ({products}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const cartItems = useSelector(state => state.item);
  const [showCart, setShowCart] = useState(false);

  const handleViewProduct = (productID) => {
    navigate(`/product/${productID}`);
  };

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    dispatch(addItems(product));
  };

  const handleInc = (id, e) => {
    e.stopPropagation();
    dispatch(increaseItems(id));
  };

  const handleDec = (id, e) => {
    e.stopPropagation();
    dispatch(decreaseItems(id));
  };

  const getProductQty = (id) => {
    const item = cartItems.find(i => i.id === id);
    return item?.quantity || 0;
  };

  return (
    <div className="home-container">
      <div className="home-header flex justify-between align-items-center">
        <h1>Products</h1>
        <button onClick={() => setShowCart(true)}>MY Cart</button>
      </div>

     
        <div className="product-grid">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => handleViewProduct(product.id)}
              className="product-card"
            >
              <div className="btn">
                <button onClick={(e) => handleAddToCart(product, e)}>
                  <MdAddShoppingCart size={25} />
                </button>
              </div>

              <img
                src={product.thumbnail}
                alt={product.title}
                className="product-image"
              />
              <h3>{product.title}</h3>
              <p>{product.category}</p>
              <p>Brand: {product.brand}</p>
              <div className="product-info">
                <span className="price">${product.price}</span>
                <span className="rating">{product.rating}</span>

                <div className="quantity">
                  <button onClick={(e) => handleDec(product.id, e)}>
                    <RiSubtractFill />
                  </button>

                  <div className="count flex">
                    <h2>{getProductQty(product.id)}</h2>
                  </div>

                  <button onClick={(e) => handleInc(product.id, e)}>
                    <IoIosAdd />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
     

      {showCart && (
        <Cartdisplay onClose={() => setShowCart(false)}>
          <MyCart />
        </Cartdisplay>
      )}
    </div>
  );
};

export default withAuthorization(withLoader (Home) ,["ADMIN","SUPER_ADMIN" ,"USER"]);
