import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const nayoks= ['Shakil', 'Sumon', 'Sinbad', 'Abdul Halim', 'Shohag','Selim'];
  const products=[
    {  name:'Photoshop', price:'$99.99' },
    { name:'Illustrator', price:'$110.99'},
    {name:'Adobe Reader', price:'$5.88'},
    {name:'After Effects', price:'$999.88'}
  ];

  

  return (
    <div className="App">
      <header className="App-header">
        <p>I am ready to learn react</p>  
        <Counter></Counter>

        <Users></Users>

       <ul>
          {
            nayoks.map(nayok=><li>{nayok}</li>)
            
          }
          {
            products.map(product =><li>{product.name +" "+product.price}</li>)
          }
        </ul> 

        <Product name="Photoshop" price="$999.65"></Product>

        {
          products.map(product => <Product name={product.name} price={product.price}></Product>)
        }
      
      </header>
    </div>
  );

  function Users(){
    const [users, setUsers] = useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
    .then(json => setUsers(json))
    })

    return(
      <div>
        <h3>Dynamic Users: {users.length}</h3>
      
        <ul>
          {
            users.map(user=><li>{user.name+" "+user.phone+" "+user.username}</li>)
          }
        </ul>

      </div>
    )
  }

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>

  )
}



  function Product(props){
    const divStyle={
      backgroundColor:'gray',
      border:'2px solid green',
      height:'200px',
      width:'200px',
      padding:'20px',
      float:'left'
    }
    return(
      <div style={divStyle}>
        <h2 style={{margin:'4px'}}>{props.name}</h2>
       <h3 style={{margin:'4px'}}>{props.price}</h3>
        <button style={{margin:'4px'}}>Buy Now</button>
      </div>
    )
  }

}

export default App;
