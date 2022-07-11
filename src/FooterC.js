import React from "react";
function FooterC() {
  console.log("Footer rendered");
  const fStyle = {
    border: "1px dotted grey",
    width: "100%",
    color: "grey"
  };
  return (
    <div className="App">
      <h6 style={fStyle}>Displaying the Footer section</h6>
    </div>
  );
}
export default React.memo(FooterC);
