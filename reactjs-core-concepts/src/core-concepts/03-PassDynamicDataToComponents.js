import './App.css';

function App() {
  return (
    <div className="App">
      <h3 style={{textAlign:"center"}}>Pass dynamic data to components, props in react</h3>
      <hr />
      <Person name="Jibon Ahmed"></Person>
      <Person name="Sakib"></Person>
    </div>
  );
}

function Person(props){
  // console.log(props)
  return(
    <div>
      <h2>Hello, {props.name}</h2>
    </div>
  )
}

export default App;
