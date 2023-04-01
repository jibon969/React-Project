
import './App.css';
import Mobile from './components/Mobile/Mobile';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <h2>ReactJs Core Concepts Recap</h2>
      <hr/>
      <Blog></Blog>
      <Mobile></Mobile>
      <TodoList></TodoList>
      <Footer></Footer>
    </div>
  );
}

export default App;
