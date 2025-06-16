import { useDispatch, useSelector } from "react-redux";
import { decreaseItems, increaseItems, removeItems } from "../appstore/Store";


const MyCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.item); // Not `state.task` if your reducer is directly in store

  return (
    <div className="cart-container flex margin-top ">
      <h1>My Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={item.id} className="cart-item flex">
            <div className="myimage "> <img src={item.thumbnail} alt={item.title} width={80} /></div>
            <div className="mydetails "><h3>{item.title}</h3>
              <p>Price: ${item.price}</p>

              <button onClick={() => dispatch(decreaseItems(item.id))}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(increaseItems(item.id))}>+</button></div>
            <div className="removebtn ">


              <button onClick={() => dispatch(removeItems(item.id))}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyCart;
