import React, { useEffect, useMemo, useRef, useState } from "react";
import { nthPrime } from "../utils/helper";

const MemoCallbackUseRefHook = () => {
  const [number, setNumber] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  console.log("component render");

  const primeNumber = useMemo(() => nthPrime(number), [number]);
  console.log(useMemo(() => nthPrime(number), [number]));

  return (
    <div>
      <div
        className={`border-2 border-gray-800 w-[500px] h-[500px] ${
          isDarkTheme ? "bg-black text-white" : ""
        }`}
      >
        <button
          onClick={() => setIsDarkTheme(!isDarkTheme)}
          className="bg-gray-400 p-3"
        >
          toggle
        </button>
        <input
          type="number"
          alt=""
          className="border border-slate-800 m-2 px-2"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <p className="m-4 text-2xl font-bold">{primeNumber}</p>
      </div>
    </div>
  );
};

export default MemoCallbackUseRefHook;

// ////////////////////////////////////////////////////

export const Ref = () => {
  const [y, setY] = useState(0);

  let x = 0;

  const ref = useRef(0);

  //!use case of useRef()
  let i = useRef(null);
  useEffect(() => {
    i.current = setInterval(() => {
      console.log("Nmaste react", Math.random());
    }, 2000);
  }, []);

  return (
    <div className="border-2 border-gray-800 w-[500px] h-[500px] flex flex-col justify-center items-center gap-5">
      <div className=" flex gap-2 justify-center items-center">
        <button
          className="bg-gray-500 p-3"
          onClick={() => {
            x = x + 1;
            console.log("x= ", x);
          }}
        >
          Increase X
        </button>
        <p className="text-xl font-bold">Let = {x}</p>
      </div>

      <div className=" flex gap-2 justify-center items-center">
        <button
          className="bg-gray-500 p-3"
          onClick={() => {
            setY(y + 1);
            console.log("Render....");
          }}
        >
          Increase Y
        </button>
        <p className="text-xl font-bold">State ={y}</p>
      </div>

      <div className=" flex gap-2 justify-center items-center">
        <button
          className="bg-gray-500 p-3"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("Ref = ", ref.current);
          }}
        >
          Increase ref
        </button>
        <p className="text-xl font-bold"> Ref ={ref.current}</p>
      </div>

      <button
        className="bg-red-800 text-white p-4"
        onClick={() => clearInterval(i.current)}
      >
        Stop Printing
      </button>
    </div>
  );
};
