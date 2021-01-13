import React, { useState } from 'react';
import {Title, Form, TextField} from './Components/Form';
import {Table} from './Components/Table';
import './App.css';

function App() {
  return (
    <div className="App" key = "outerDiv">
      <header className="App-header" key="header">
        <p>
          <Title/>
        </p>
      </header>
      <body key= "body">
        <Form/>
        <br></br>
        <Table/>
      </body>
    </div>
  );
}

export default App;
