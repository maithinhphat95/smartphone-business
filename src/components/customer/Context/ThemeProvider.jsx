import React, { useReducer, useState } from 'react';
import ThemeContext from './ThemeContext';
import ThemeReducer from './ThemeReducer';


function ThemeProvider(props) {
    const initialState = {
        currentBlogPost: null,
  };
    const [state, dispatch] = useReducer(ThemeReducer, initialState);
      // Get all Posts
      const getPosts = async () => {
        try {
            dispatch({ type: 'SENDING_REQUEST' });
            const res = await fetch('http://localhost:3008/productitem');
            const data = await res.json();
            dispatch({ type: 'REQUEST_FINISHED' });
            dispatch({ type: 'SET_POSTS', payload: data });
        } catch (err) {
            console.log(err);
        }
    };
    // Get Post by id
const getPostById = async id => {
    try {
        dispatch({ type: 'SENDING_REQUEST' });
        const res = await fetch(`http://localhost:3006/productitem/${id}`);
        const data = await res.json();
        dispatch({ type: 'REQUEST_FINISHED' });
        dispatch({ type: 'SET_POST', payload: data });
    } catch (err) {
        console.log(err);
    }
};
    // 
    const [totalTitlePhone,setTotalTitlePhone] = useState(0);
    const [myCart,setMycart] = useState([{}]);
    return (
        <ThemeContext.Provider
        value={{myCart,setMycart
        
            }}
    >
        {props.children}
    </ThemeContext.Provider>
    );
}

export default ThemeProvider;