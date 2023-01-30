import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/home')
      .then(response => {
        console.log(response)
        setClothes(response.data)
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {clothes.map((clothes: any) => (
            <li key={clothes.id}>{clothes.name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
