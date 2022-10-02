import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
// import blogReducer from './blogReducer';




function ThemeProvider(props) {
    // 
    const [totalTitlePhone,setTotalTitlePhone] = useState(0)
    return (
        <ThemeContext.Provider
        value={{totalTitlePhone,setTotalTitlePhone}}
    >
        {props.children}
    </ThemeContext.Provider>
    );
}

export default ThemeProvider;