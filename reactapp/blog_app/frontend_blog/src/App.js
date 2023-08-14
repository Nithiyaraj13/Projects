// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Switch} from "react-router-dom"

//import Navbar from './Navbar';

import NavBar from './component/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Foodmain from './component/food';
import Travelmain from './component/Travel';
import Technomain from './component/Technology';
import Healthmain from './component/health';
import Naturemain from './component/nature';
import Artmain from './component/art';
import Register from './component/Register';
import Slide from './component/slides';
import Home from './component/Home';
import Footer from './component/footer';
import HomeSlider from './component/HomeSlider';
import Afternav from './component/AfterNav';

import Profile from './component/profile';
import Admin from './component/admin';
import Readblog from './component/readblog';
import Login from './login';
import UserList from './component/userlist';
import Myblogs from './component/myblogs';



const App = () => {
  return (
    <div>
      <BrowserRouter>
    <Routes>
    <Route  path='/' element={<Home/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path='/food' element={<Foodmain/>}/>
      <Route path='/travel' element={<Travelmain/>}/>
      <Route path='/technology' element={<Technomain/>}/>
      <Route path='/health' element={<Healthmain/>}/>
      <Route path='/nature' element={<Naturemain/>}/>
      <Route path='/art' element={<Artmain/>}/>
      <Route path='/userlist' element={<UserList/>}/>
      <Route path='/homeslider' element={<HomeSlider/>}/>
      <Route path="/register" element={<Register/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/Admin" element={<Admin/>} />
      <Route path="/readblog" element={<Readblog/>} />
      <Route path="/myblogs" element={<Myblogs/>} />
      </Routes>
    </BrowserRouter>


    </div>
    
  );
};

export default App;
