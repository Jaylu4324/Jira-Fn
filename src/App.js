import Login from "./Login/Login";
import Register from "./Register/Register"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './HomePage/Home'
import Drawer from "./Drawer/Drawer"

function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Register' element={<Register/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Dashboard' element={<Drawer/>} />
      <Route path='/emp' element={'jkhgfhjkl;'} />


    </Routes>
    </BrowserRouter>
   </div>
   
  );
}

export default App;
