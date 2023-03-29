
import './App.css';

const styleSheet = {
  backgroundColor:"red",
  margin:"20px",
  borderRadius:"10px",
  padding:"10px"
}

function App() {
 
  return (
    <div className="App">
      <h2 style={styleSheet}>Hello Dude !</h2>
      <p style={{color:"red"}}>Lorem ipsum dolor sit amet.</p>
      <div className="container">
        <h3>Hello World</h3>
      </div>
    </div>
  );
}

export default App;
