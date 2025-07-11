import React, { useState } from "react";
import Navbar from "./components/navbar";

function Practicum() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };
  return (
    <div>
      <Navbar toggle={toggle} />
    </div>
  );
}

export default Practicum;
