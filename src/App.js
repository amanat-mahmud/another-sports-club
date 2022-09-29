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
          <Blog
            ques="Difference between props and state"
            ans="In props data is passed from one component to another.It is Immutable (cannot be modified).Read only.
            In state data is passed within the component only.It is Mutable ( can be modified).Can do read and write." 
          ></Blog>
          <Blog
            ques="use of useEffect apart from loading data"
            ans="It can be used to get and show data from the local storage to the front-end.By using dependencies useEffect loads from local storage."
          ></Blog>
        </div>
        
      </div>
    </div>
  );
}

export default App
