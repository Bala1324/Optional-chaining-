import "./App.css";
import React, { useState } from 'react'
function App() {
  const [data, setData] = useState({
    name: 'bala',
    number: 9742478078,
    email: 'bala@gmail.com',
    address: {
      pin: 605009
    }
  })

  console.log(data.address?.pin)
  return (
    <div className="App">
      <h1>Name: {data.name}</h1>
      <h1>Number: {data.number}</h1>
      <h1>Email: {data.email}</h1>
      {
        data.address?.pin == undefined ? (
          <h1>Pin Code: Missing</h1>
        ) : (
          <h1>Pin Code: {data.address?.pin}</h1>
        )}


      <button type="button" onClick={() => setData({
        name: 'Anbu',
        number: 1234567891,
        email: 'anbu@gmail.com'
      })}>Click</button>
    </div>
  );
}

export default App;
