
import './App.css';
import Device from './components/Device/Device';
import Watch from './components/Watch/Watch';

function App() {
  return (
    <div className="App">
      <Device name="uphone" price="1300"></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;
