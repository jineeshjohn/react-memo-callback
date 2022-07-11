import React from "react";
function DisplayFlag(props) {
  console.log("DF rendered");
  return (
    <div className="App">
      <h2>Flag : {props.flag.toString()}</h2>
    </div>
  );
}

export default React.memo(DisplayFlag);
