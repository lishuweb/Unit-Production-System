import React from "react";
import Login from "./components/Login";
import Signin from "./components/Signin";
import Create from "./components/Create";
import ManageProduct from "./components/ManageProduct";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/signin' element = {<Signin />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/create' element = {<Create />} />
        <Route path='/manage' element = {<ManageProduct />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
