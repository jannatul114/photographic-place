
import './App.css';
import Header from './Components/Pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/HomePage/Home/Home';
import Login from './Components/Authintications/Login/Login';
import Registar from './Components/Authintications/Registar/Registar';
import NotFound from './Components/Pages/NotFound/NotFound';
import Checkout from './Components/Pages/Checkout/Checkout';
import RequireAuth from './Components/Authintications/RequreAuth/RequreAuth';
import AboutMe from './Components/Pages/AboutMe/AboutMe';
import Blogs from './Components/Pages/Blogs/Blogs';

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
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/aboutme' element={<AboutMe></AboutMe>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
