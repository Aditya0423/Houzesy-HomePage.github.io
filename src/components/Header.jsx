import React from "react";
const styles = {
  fontFamily: "Ubuntu",
  fontWeight: "700",
  border: "1px solid black",
  textAlign: "center"
};

export default function Header() {
  return (
    <div className="header" style={styles}>
      <h1>Header</h1>
    </div>
  );
}
