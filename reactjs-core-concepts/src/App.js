
import './App.css';

function App() {
  return (
    <div className="App">
      <Person name="Jibon" profession="Software Engineer"></Person>
      <Person name="Payel" profession="Nayika"></Person>
      <h5>New Component. YAY</h5>
      <Friend name="Shakib Al Hasan"  profession="Cricket"></Friend>
      <Friend></Friend>
    </div>
  );
}

function Person (props){
  // console.log(props)
  return(
    <div className="person">
      <h1>{props.name}</h1>
      <p>Profession : {props.profession}</p>
    </div>
  )
}
function Friend(props){
  // console.log(props)
  return(
    <div className="friend">
      <h2>{props.name}</h2>
      <p>Profession : {props.profession}</p>
    </div>
  )
}

export default App;
