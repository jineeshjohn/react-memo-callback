import React, { useCallback, useState } from "react";
import HeaderC from "./HeaderC";
import FooterC from "./FooterC";
import "./styles.css";
import DisplayCounter from "./DisplayCounter";
import DisplayFlag from "./DisplayFlag";
import ChangeState from "./ChangeState";

export default function App() {
  const [cnt, setCount] = useState(0);
  const [mFlag, setFlag] = useState(true);

  const changeCOunter = () => {
    console.log("change counter function");

    setCount(cnt + 1);
  };
  const changeFlag = useCallback(() => {
    console.log("CF function");
    setFlag(!mFlag);
  }, [mFlag]);
  return (
    <div className="App">
      <HeaderC />
      <DisplayCounter counter={cnt} />
      <DisplayFlag flag={mFlag} />
      <ChangeState caption="Change conter " click={changeCOunter} />
      <ChangeState caption="Change flag " click={changeFlag} />
      <FooterC />
    </div>
  );
}
