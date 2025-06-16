import { createStore } from 'redux';

// Load cart from localStorage
const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem('cartItems');
    return data ? JSON.parse(data) : [];
  } catch (err) {
    return [];
  }
};

// Save cart to localStorage
const saveToLocalStorage = (cartItems) => {
  try {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  } catch (err) {
    console.error("Error saving to localStorage", err);
  }
};

// Initial State
const initialState = {
  item: loadFromLocalStorage(),
};

// Action Types
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const INCREASE_ITEM = 'INCREASE_ITEM';
const DECREASE_ITEM = 'DECREASE_ITEM';

// Reducer
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const existingItem = state.item.find(i => i.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          item: state.item.map(i =>
            i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return {
        ...state,
        item: [...state.item, { ...action.payload, quantity: 1 }],
      };

    case REMOVE_ITEM:
      return {
        ...state,
        item: state.item.filter((i) => i.id !== action.payload),
      };

    case INCREASE_ITEM:
      return {
        ...state,
        item: state.item.map(i =>
          i.id === action.payload
            ? { ...i, quantity: i.quantity + 1 }
            : i
        ),
      };

    case DECREASE_ITEM:
      return {
        ...state,
        item: state.item.map(i =>
          i.id === action.payload && i.quantity > 1
            ? { ...i, quantity: i.quantity - 1 }
            : i
        ),
      };

    default:
      return state;
  }
};

// Create Store
const store = createStore(cartReducer);

// Save to localStorage on every state change
store.subscribe(() => {
  saveToLocalStorage(store.getState().item);
});

export default store;

// Action Creators
export const addItems = (product) => ({ type: ADD_ITEM, payload: product });
export const removeItems = (id) => ({ type: REMOVE_ITEM, payload: id });
export const increaseItems = (id) => ({ type: INCREASE_ITEM, payload: id });
export const decreaseItems = (id) => ({ type: DECREASE_ITEM, payload: id });
