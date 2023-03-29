import './App.css';

function App() {
  const products = [
    {name:"laptop", price:57000},
    {name:"watch", price:7000},
    {name:"mobile", price:50000},
  ]
  return (
    <div className="App">
      <h3 style={{textAlign:"center"}}>
        Concept Recap, JSX, components, props, display array of objects
      </h3>
      <hr />

      {
        products.map(product=><Product name={product.name} price={product.price}></Product>)
      }
      
    </div>
  );
}

function Product(props){
  // console.log(props)
  return(
    <div className="container">
      <h2>{props.name} - {props.price}</h2>
    </div>
  )
}

export default App;
