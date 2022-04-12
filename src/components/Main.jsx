import React from "react";
import MiddlePart from "./middlePart";
import TopPart from "./topPart";
import BottomPart from "./bottomPart";

const styles = {
  display: "grid",
  grid: "auto-flow min-content / repeat (12,1fr)",
  marginBottom: "50px"
};

export default function Main() {
  return (
    <div id="main" style={styles}>
      <TopPart />
      <MiddlePart />
      <BottomPart />
    </div>
  );
}
