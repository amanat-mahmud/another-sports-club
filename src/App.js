import { useState } from 'react';
import './App.css';
import Blog from './components/Blog/Blog';
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
        <div className="blog-container">
        <Blog 
        ques="How does react work?"
        ans="React allows us to effectively re-construct our DOM in JavaScript and push only those changes to the DOM which have actually occurred.React uses
        JSX,React Renderer,React Reconciliation,React Keys."
        ></Blog>
        </div>
        
      </div>
    </div>
  );
}

export default App
