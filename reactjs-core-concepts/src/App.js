
import './App.css';

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h5>New Component. YAY</h5>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

function Person (){
  return(
    <div className="person">
      <h1>Jibon Ahmed</h1>
      <p>Profession : Software Engineer</p>
    </div>
  )
}
function Friend(){
  return(
    <div className="friend">
      <h2>Sakib Al Hasan</h2>
      <p>Profession : Cricket</p>
    </div>
  )
}

export default App;
