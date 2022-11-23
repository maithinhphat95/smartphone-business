import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

function ThemeProvider(props) {
  const [myCart, setMycart] = useState([]);
  const [mylogin, setMylogin] = useState(false);
  const [myAccount, setMyAccount] = useState([{}]);
  const [myRegister, setMyRegister] = useState([{}]);
  const [searchTerm, setSearchTerm] = useState("");
  const [resultTitle, setResultTitle] = useState("");
  const [totalCart, setTotalCart] = useState(0);
  const [countCart, setCountCart] = useState(0);

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
        searchTerm,
        setSearchTerm,
        resultTitle,
        setResultTitle,
        totalCart,
        setTotalCart,
        countCart,
        setCountCart,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
