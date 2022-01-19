import './App.css';
import React, {useState} from 'react';
import Form from './components/form';
import Box from './components/box';

function App() {

  const [boxColors, setBoxColors] = useState([
    {color: "red"},
    {color: "blue"},
    {color: "purple"}
  ])

  const addBox = (newBoxColor) =>{
    setBoxColors([
      ...boxColors, newBoxColor
    ])
  };

  return (
    <div className="App">

      <Form addBox = {addBox} />

      <Box boxColors = {boxColors}/>

    </div>
  );
}

export default App;
