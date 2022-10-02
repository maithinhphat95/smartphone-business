import React from "react";

function Title(props) {
  const { content } = props;
  return (
    <h3
      style={{
        fontStyle: "italic",
        fontWeight: "bold",
        textTransform: "capitalize",
        margin: "8px 0",
        fontSize: "16px",
      }}
    >
      {content}
    </h3>
  );
}

export default Title;
