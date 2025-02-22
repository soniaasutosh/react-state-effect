import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { MyInput } from "./MyInput";

let abc = 10;

const Newr = () => {
  console.log("rendering...");
  const [a, setA] = useState("aa");
  const xyz = useRef(100);
  const myInput = useRef();
  const handleChange = useCallback((e) => {
    // console.log(e.target.value);
    // console.log("---a", a);
    setB(e.target.value);
  }, []);

  const [b, setB] = useState("bb");

  useEffect(() => {
    console.log("1 function executed...");
    return () => {
      console.log("1 function cleanedUp...");
    };
  }, [a]);

  useEffect(() => {
    console.log("2 function executed...");
    return () => {
      console.log("2 function cleanedUp...");
    };
  }, []);
  // const handleChange = (e) => {
  //   console.log(e.target.value);
  //   console.log("---a", a);
  //   setB(e.target.value);
  // };

  return (
    <div>
      <h1>
        <marque>
          Shivashi
          <br></br>
          {a}
          <br></br>
          {b}
          <br></br>
          Let--{abc}
          <br></br>
          Ref--{xyz.current}
        </marque>
        <br></br>

        <MyInput
          ref={myInput}
          type="text"
          value={b}
          onChange={handleChange}
        ></MyInput>

        <br></br>
        <button
          onClick={() => {
            setA(a + "a");
            abc++;
            xyz.current++;
          }}
        >
          Click
        </button>
      </h1>
    </div>
  );
};

export default memo(Newr);
