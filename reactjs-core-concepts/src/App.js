import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      
  }, [])

  return (
    <div className="App">
      <h3 style={{textAlign:"center"}}>
        Load dynamic data, API call useEffect integrate state
      </h3>
      <hr />
      {
        users.map(user=><User name={user.name} email={user.email}></User>)
      }
    </div>
  );
}

function User (props){
  const {name, email} = props;
  return(
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}

export default App;
