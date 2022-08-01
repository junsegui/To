
import './App.css';
import { GlobalStyle } from './components/GlobalStyle';
import { Home } from './components/Home/Home';
import {Routes, Route} from  "react-router-dom"
import { Navbar } from './components/navbar/Navbar';
import { To_do } from './components/To-do/To_do';

function App() {
  

  return (
    <>
    <GlobalStyle/>
    <Navbar/>
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"To-Do"} element={<To_do/>}/>
    </Routes>
 
   
    
    </>
  );
}

export default App;
