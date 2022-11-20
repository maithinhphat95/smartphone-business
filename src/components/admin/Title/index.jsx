import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { adminColorDark, adminColorLight } from "../../../constant/admin";

function Title(props) {
  const { content } = props;
  const [theme, setTheme] = useState(adminColorLight);
  const themeSeleted = useSelector((state) => state.admin.theme);
  // Update themse color
  useEffect(() => {
    switch (themeSeleted) {
      case "light":
        setTheme(adminColorLight);
        break;
      case "dark":
        setTheme(adminColorDark);
        break;
      default:
        setTheme(theme);
        break;
    }
  }, [themeSeleted]);
  return (
    <h3
      style={{
        fontStyle: "italic",
        fontWeight: "bold",
        textTransform: "capitalize",
        margin: "8px 0",
        fontSize: "16px",
        color: `${theme.color}`,
      }}
    >
      {content}
    </h3>
  );
}

export default Title;
