import axios from "axios";
import { data } from "react-router";

export const fetchProducts = async () => {
  try {
    const response = await axios({
      method: "get",
      url: "https://dummyjson.com/products?sortBy=title&order=asc",
    });

    return {
      data: response.data,
      error: null,
    };
  } catch (error) {
    return {
      data: response.data,
      error: null,
    };
  }
};



export const fetchProductById = async (productId) => {
 try{ const response = await axios({
    method: "get",
    url: `https://dummyjson.com/products/${productId}`,
  });
   return {
      data: response.data,
      error: null,
    };
  } catch (error) {
    return {
      data: response.data,
      error: null,
    };
  }
  };



export const deleteProduct = async (productId) => {
  const response = await axios({
    method: "DELETE",
    url: `https://dummyjson.com/products/${productId}`,
  });
  return response.data;
};

// export const searchProduct =  async (queryParam) =>{
//   const response =   await axios ({
//     url:`https://dummyjson.com/products/search?q=${queryParam}`
//   })
//   return response.data.products

// };

// export const updateProduct = async (productId, data) => {
//   const response = await axios({
//     method: 'PUT',
//     url: `https://dummyjson.com/products/${productId}`,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     data: data,
//   });
//   return response.data;
// };

//   export const sortProduct = async() =>{
//  const response = await axios ({
// url:'https://dummyjson.com/products?sortBy=title&order=asc'
//  })
//   return response.data;
//   }

//    export const filterProduct = async() =>{
// const response = await axios({
//   url:`https://dummyjson.com/products/${categorylist}`
// })
// return response.data;
//    }
 export const  fetchUsers = async() =>{
  try{
const response = await axios({
  method:"get",
  url:"https://dummyjson.com/users",
  headers: {
        "Content-Type": "application/json",
  },
})
return{
  data:response.data,
  error:null,

};
  }catch(error){
    return{
      data:null,
      error:error.message||"Failed to fetch users"
    }

  }



 }
 export const fetchUserById = async (userId) => {
  try {
    const response = await axios({
      method: "get",
      url: `https://dummyjson.com/users/${userId}`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return {
      data: response.data,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: error.message || "Failed to fetch user",
    };
  }
};