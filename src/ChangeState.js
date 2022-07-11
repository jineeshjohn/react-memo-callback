import React from "react";
const ChangeState = (props) => {
  console.log("CS renderd");
  return (
    <div>
      <button onClick={props.click}>{props.caption}</button>
    </div>
  );
};
export default React.memo(ChangeState);
