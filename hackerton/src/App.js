import React from "react";
import styled from 'styled-components';
import { Route, Routes } from "react-router-dom"; // Import Link component

import MainPage from "./Page/MainPage";
import CardComponent from "./Page/CardComponent";
import SelcetComponent from "./Page/SelcetComponent";
import LoginComponent from "./Page/LoginComponent";
import SignupComponent from "./Page/SignupComponent";




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Card" element={<CardComponent />} />
        <Route path="/Selcet" element={<SelcetComponent />} />
        <Route path="/Login" element={<LoginComponent />} />
        <Route path="/Signup" element={<SignupComponent />} />
      </Routes> 
   
    </>
  );
}

export default App;
