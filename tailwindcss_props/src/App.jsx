import React from 'react';
import './App.css';
import Background from './utils/background';
import PasswordGenerator from './utils/PasswordGenerator';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow"></div>
      <div className="root flex gap-2 text-white px-2 py-4 justify-center">
        {/* <Background name="red" />
        <Background name="white" />
        <Background name="brown" />
        <Background name="orange" />
        <Background name="Olive" />
        <Background name="Gray" />
        <Background name="purple" />
        <Background name="Pink" /> */}
        <PasswordGenerator/>
      </div>
    </div>
  );
}

export default App;
