import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Person from './components/Person/Person';
import Sports from './components/Sports/Sports';
function App() {
  const [time, setTime] = useState(0);
  const addDuration =(selectedTime) =>{
    setTime(selectedTime);
  }
  return (
    <div>
      <Header></Header>
      <h1 className='space'>Select what you want to play</h1>
      <div className='SportsAndCartContainer'>
        <Sports addDuration={addDuration}></Sports>
        <Person time={time}></Person>
      </div>
    </div>
  );
}

export default App
