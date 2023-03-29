import './App.css';
import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0)

  const increaseNumber = () =>{
    const newValue = count + 1;
    setCount(newValue)
  }

  const decreaseNumber = () =>{
    const newValue = count - 1;
      setCount(newValue)
  }

  return (
    <div className="App">
      <h3 style={{textAlign:"center"}}>
        State, component state hook and set state method
      </h3>
      <hr />
      <h1>Count : {count}</h1>
      <button onClick={increaseNumber}>Increase</button>
      <button onClick={decreaseNumber}>Decrease</button>
    </div>
  );
}

export default App;
