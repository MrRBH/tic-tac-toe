import React from 'react';

function Background(props) {
  function backgroundChanger() {
    // Update the body background color
    document.body.style.backgroundColor = props.name;
    console.log('clicked');
  }

  return (
    <div>
      <button 
        onClick={backgroundChanger} 
        style={{ color: props.name }}
      >
        {props.name}
      </button>
    </div>
  );
}

export default Background;
