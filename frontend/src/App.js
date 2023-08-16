import Home from './Home';
import Road from './Road';
import Lakes from './Lake';
import { Input } from './Collection/Input/Input';
import Calculator from './Calculator';
import { Signup } from './register/Login/Signup';
import './App.css';
import Login from './register/Login/Login';
import Adminlogin from './register/Login/Adminlogin';
import Update from './register/Login/password';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Createpost from './createpost';
import { Problem } from './User'; 

function App() {
  return (
    <> 

      
    <BrowserRouter>
      <Routes>
        
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/Road' element={<Road/>}></Route>
        <Route path='/Lakes' element={<Lakes/>}></Route>
        <Route path='/Calculator' element={<Calculator/>}></Route>
        <Route path='/Input' element={<Input/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Admin' element={<Adminlogin/>}></Route>
        <Route path='/password' element={<Update/>}></Route>
        <Route path='/createpost' element={<Createpost/>}></Route>
        <Route path='User' element={<Problem/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;