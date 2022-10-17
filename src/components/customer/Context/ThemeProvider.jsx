import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

function ThemeProvider(props) {
  // const initialState = {
  //   currentBlogPost: null,
  // };
  // const [state, dispatch] = useReducer(ThemeReducer, initialState);
  //   // Get all Posts
  //   const getPosts = async () => {
  //     try {
  //         dispatch({ type: 'SENDING_REQUEST' });
  //         const res = await fetch('http://localhost:3008/productitem');
  //         const data = await res.json();
  //         dispatch({ type: 'REQUEST_FINISHED' });
  //         dispatch({ type: 'SET_POSTS', payload: data });
  //     } catch (err) {
  //         console.log(err);
  //     }
  // };
  // Get Post by id
  // const getPostById = async id => {
  //     try {
  //         dispatch({ type: 'SENDING_REQUEST' });
  //         const res = await fetch(`http://localhost:3006/productitem/${id}`);
  //         const data = await res.json();
  //         dispatch({ type: 'REQUEST_FINISHED' });
  //         dispatch({ type: 'SET_POST', payload: data });
  //     } catch (err) {
  //         console.log(err);
  //     }
  // };
  //
  // const [totalTitlePhone,setTotalTitlePhone] = useState(0);
  const [myCart, setMycart] = useState([]);
  const [mylogin, setMylogin] = useState(false);
  const [myAccount, setMyAccount] = useState([{}]);
  const [myRegister, setMyRegister] = useState([{}]);
  const [searchTerm, setSearchTerm] =  useState("");
  const [resultTitle, setResultTitle] = useState("");
  const [totalCart,setTotalCart] = useState(0);
  const [countCart,setCountCart] = useState(0);

   
  return (
    <ThemeContext.Provider
      value={{
        myCart,
        setMycart,
        mylogin,
        setMylogin,
        myAccount,
        setMyAccount,
        myRegister,
        setMyRegister,
        searchTerm, setSearchTerm,
       resultTitle, setResultTitle,
       totalCart,setTotalCart,
       countCart,setCountCart
      
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
