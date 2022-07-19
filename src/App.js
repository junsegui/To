
import './App.css';
import { GlobalStyle } from './components/GlobalStyle';
import { Box } from './components/Box';
import { BoxContainer } from './components/BoxContainer';
import { List } from './components/List';
import { useState } from 'react';

function App() {
  const [inputText,setInputText]=useState("")
  const [todos,setTodos]=useState([]);

  return (
    <>
    <GlobalStyle/>
    <Box>
      <BoxContainer setInputText={setInputText} todos={todos} setTodos={setTodos} inputText={inputText}/>
      <List todos={todos} setTodos={setTodos}/>
    </Box>
    
    </>
  );
}

export default App;
