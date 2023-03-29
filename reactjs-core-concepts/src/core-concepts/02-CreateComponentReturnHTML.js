import './App.css';

function App() {
  return (
    <div className="App">
      <h3 style={{textAlign:"center"}}>Create Component, return HTML from a component</h3>
      <hr />
      <Person></Person>
    </div>
  );
}

function Person(){
  return(
    <div>
      <h2>Hello, Dude</h2>
    </div>
  )
}

export default App;
