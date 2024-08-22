import { useState } from 'react';
import './App.css';


function App() {

  // let age=20;
let [score,setscore]=useState(0);
let [balls,setBalls]=useState(0);
console.log("creating UI");
  return (
    <div className="App">
<h1 className='h1'>Score:{score}</h1> 🏏
<h1>Overs:{parseInt(balls/6)}.{balls % 6} <img className="img" src="https://westernsportscentre.com.au/cdn/shop/articles/cricket-ball.jpg?v=1684930757"></img></h1>
  
    <button className='button1'
    onClick={()=>{
      // console.log(age++)
     setscore(score +1);
     setBalls(balls +1);
    }}>Single</button>
    <button className='button2' 
    onClick={()=>{
      // console.log(age--)
      setscore(score +2);
      setBalls(balls +1);
    }}>Double</button>
      
    <button className='button2' 
    onClick={()=>{
      // console.log(age--)
      setscore(score +3);
      setBalls(balls +1);
    }}>Triple</button>
        
    <button className='button2' 
    onClick={()=>{
      // console.log(age--)
      setscore(score +4);
      setBalls(balls +1);
    }}>Four</button>
        
    <button className='button2' 
    onClick={()=>{
      // console.log(age--)
      setscore(score +6);
      setBalls(balls +1);
    }}>Sixer</button>
        
    <button className='button2' 
    onClick={()=>{
      // console.log(age--)
      setscore(score +1);
      setBalls(balls +0);
    }}>Wide</button>
        
    <button className='button2' 
    onClick={()=>{
      // console.log(age--)
      setscore(score +1);
      setBalls(balls +0);
    }}>No Ball</button>
    </div>
  );
}

export default App;
