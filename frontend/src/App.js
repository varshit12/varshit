import logo from './logo.svg';
import './App.css';
import Sample from './sample';
import {Route,Routes,BrowserRouter} from "react-router-dom";
import Varshi from './test';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Varshi/>}/>
        </Routes>
      </BrowserRouter>
  </>
  )
}

export default App;
