import { useState } from 'react';
import './App.css';
import data from './data';
import Tours from './component/Tours';
function App() {
  const [tours, setTours] = useState(data);
  function removeTour(id)
  {
    const newTours = tours.filter(tour=> tour.id!==id);
    setTours(newTours);
  }
  if(tours.length===0)
  {
    return (
      <div className='refresh'>
        <h2>
          No tours left
        </h2>
        <button className='btn' onClick={()=>setTours(data)}> 
              refresh
        </button>
      </div>
    );
  }
  return (
       <div className='full-container'>
        <Tours tours = {tours} removeTour = {removeTour}/>
       </div>
  );
}

export default App;
