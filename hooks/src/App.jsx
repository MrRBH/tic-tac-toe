import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Event from './components/Event';  // Importing Event component
import Component1 from './components/component1';

function App() {
  const [detData, setDetData] = useState([]);

  useEffect(() => {
    async function getData() {
      const url = "https://jsonplaceholder.typicode.com/posts";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        setDetData(json);
        console.log(json);
      } catch (error) {
        console.error(error.message);
      }
    }

    getData();
  }, []);

  return (
    <>
    {/* <Component1 count={count}/>/ */}
      <Event />  {/* Using Event component */}
      <div className="row items-center justify-center min-h-screen bg-gray-100 p-4">
        {detData.map((item) => (
          <div key={item.id} className="max-w-sm m-4 bg-white border border-gray-200 rounded-lg shadow-lg">
            <img className="w-full h-48 rounded-t-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVGHL9r9OucwArH8yO3rEDPryG4V3tSCBw-w&s" alt="Card image cap" />
            <div className="p-6">
              <h5 className="text-2xl font-bold mb-2 text-gray-900">{item.title.slice(0,30)}</h5>
              <p className="text-gray-700 mb-4">{item.body.slice(0,90)}...</p>
              <a href="#" className="inline-block px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">Go somewhere</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
