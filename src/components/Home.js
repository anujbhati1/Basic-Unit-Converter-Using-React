import React, { useState } from 'react';
// import './Style.scss'

function FavoriteColor() {
  const [color, setColor] = useState('danger');
  const [text, setText] = useState('Red');

  return (
    <>
      <div className="text-center my-5 ">
        <h1 className="my-5">
          My favorite color is <span className={`text-${color}`}>{text}</span>
        </h1>
        <button
          className="btn btn-lg btn-primary mx-3"
          type="button"
          onClick={() => {
            setColor('primary');
            setText('Blue');
          }}
        >
          Blue
        </button>
        <button
          className="btn btn-lg btn-danger mx-3 text-"
          type="button"
          onClick={() => {
            setColor('danger');
            setText('Red');
          }}
        >
          Red
        </button>
        <button
          className="btn btn-lg btn-info mx-3 text-"
          type="button"
          onClick={() => {
            setColor('info');
            setText('Skyblue');
          }}
        >
          Skyblue
        </button>
        <button
          className="btn btn-lg btn-success mx-3 text-"
          type="button"
          onClick={() => {
            setColor('success');
            setText('Green');
          }}
        >
          Green
        </button>
      </div>
    </>
  );
}

export default FavoriteColor;

// import { useState, useEffect, useRef } from "react";
// import ReactDOM from "react-dom/client";

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const count = useRef(0);

//   useEffect(() => {
//     count.current = count.current + 1;
//   });

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h1>Render Count: {count.current}</h1>
//     </>
//   );
// }

// export default App;
