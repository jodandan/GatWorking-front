import React from "react";
import styled from 'styled-components';
import { Route, Routes } from "react-router-dom"; // Import Link component

import MainPage from "./Page/MainPage";
import CardComponent from "./Page/CardComponent";
import LoginComponent from "./Page/LoginComponent";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Card" element={<CardComponent />} />
        <Route path="/login" element={<LoginComponent />} />
      </Routes> 
   
    </>
  );
}

export default App;
