
import './App.css';

function App() {
  const friends = ["Jibon","Payel", "Sakib", "Shampa", "Atiya", "Mim"]
  const singers = [
    {name:"Payel Ahmed", job:"singer"},
    {name:"Eva", job:"singer"},
    {name:"Agun", job:"singer"},
  ]
  return (
    <div className="App">
  
      {/* {
        singers.map(singer=><li>{singer.name}</li>)
      } */}

      {
        singers.map(singer=><Person name={singer.name} job={singer.job}></Person>)
      }
      
      <h5>New Component. YAY</h5>
      {
        friends.map(friend => <Friend name={friend}></Friend>)
      }
      {/* <Friend name="Shakib Al Hasan"  profession="Cricket"></Friend> */}
     
    </div>
  );
}

function Person (props){
  // console.log(props)
  return(
    <div className="person">
      <h1>{props.name}</h1>
      <p>Profession : {props.job}</p>
    </div>
  )
}
function Friend(props){
  // console.log(props)
  return(
    <div className="friend">
      <h2>{props.name}</h2>
    </div>
  )
}

export default App;
