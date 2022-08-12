import { useRef, useState } from "react";

function UseRefExample() {
  const [val, setVal] = useState(0);
  const inputOne = useRef();
  const inputTwo = useRef();

  function getData() {
    console.log((inputOne.current.style.width = "10px"));
    console.log(inputTwo.current);
  }

  return (
    <>
      <input
        type="text"
        ref={inputOne}
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <br />
      <input
        type="number"
        ref={inputTwo}
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <button onClick={getData}>onClick</button>
    </>
  );
}

export default UseRefExample;
