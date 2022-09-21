import "./App.css";
import { useState } from "react";
import Header from "./layouts/admin/Header";
import Main from "./layouts/admin/Main";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const handelShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="App">
      <Header handle={handelShowMenu} />
      <Main showMenu={showMenu} />
    </div>
  );
}

export default App;
