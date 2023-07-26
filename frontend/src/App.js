import Home from './Home';
import Road from './Road';
import Lakes from './Lake';
import Calculator from './Calculator';
import './App.css';

import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
    <> 

      
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Road' element={<Road/>}></Route>
        <Route path='/Lakes' element={<Lakes/>}></Route>
        <Route path='/Calculator' element={<Calculator/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;