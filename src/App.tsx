import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import List from 'semantic-ui-react/dist/commonjs/elements/List';

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
      <Header as='h2' icon='users' content='Nordic Clothing' />
        <List>
          {clothes.map((clothes: any) => (
            <List.Item key={clothes.id}>{clothes.name}</List.Item>
          ))}
        </List>
      
    </div>
  );
}

export default App;
