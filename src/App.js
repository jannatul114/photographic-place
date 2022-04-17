
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Registar from './Components/Registar/Registar';
import NotFound from './Components/NotFound/NotFound';
import Checkout from './Components/Checkout/Checkout';
import RequireAuth from './Components/RequreAuth/RequreAuth';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registar' element={<Registar></Registar>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
