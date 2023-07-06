import React, { useState } from "react";
import { Auth } from "./components/Auth";
import { Header } from "./components/Header";
import '../src/assets/css/main.css'

function App() {

  const [parameter, setParameter] = useState('');

  const [value, setValue] = useState('auth')

  return (
    <div id="wrapper">
      <Header/>
    </div>
  );
  }
  




export default App;
