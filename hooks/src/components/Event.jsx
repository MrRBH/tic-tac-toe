import React, { useState } from 'react';

function clickMe() {
  alert("I am clicked");
}

function mouseOver() {
  alert("I am mouseOver");
}

function Event() {
const [name, setName] = useState("hassan")
const [count, setCount] = useState(0)
function HandleChange(e) {
    setName(e.target.value)
    }
 function counter (){
  setCount(()=>count+1)
 }

  return (
    <>
    <button className='btn btn-primary my-2' onClick={counter} >count {count} </button>
    <div className="button">
      <button onClick={clickMe} className="btn btn-primary">Click me</button>
    </div>
    {/* <div className="hover h-5 w-5 bg-black text-white " onMouseOver={mouseOver}> i am hover </div> */}
    <input type="text" value={name}  onChange={HandleChange} />
    </>
  );
}

export default Event;
