import './App.css';
import Header from './components/Header/Header';
import Person from './components/Person/Person';
import Sports from './components/Sports/Sports';
function App() {
  const addDuration =() =>{
    console.log('Clicked')
  }
  return (
    <div>
      <Header></Header>
      <h1 className='space'>Select what you want to play</h1>
      <div className='SportsAndCartContainer'>
        <Sports addDuration={addDuration}></Sports>
        <Person></Person>
      </div>
    </div>
  );
}

export default App
