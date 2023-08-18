import React from "react";
import styled from 'styled-components';
import { Route, Routes } from "react-router-dom"; // Import Link component

import MainPage from "./Page/MainPage";
import CardComponent from "./Page/CardComponent";
import SelcetComponent from "./Page/SelcetComponent";
import LoginComponent from "./Page/LoginComponent";
import SignupComponent from "./Page/SignupComponent";
import HakertonCategoryComponent from "./Page/HakertonCategoryComponent";
import ProjectCategoryComponent from "./Page/ProjectCategoryComponent";
import ContestCategoryComponent from "./Page/ContestCategoryComponent";





function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/Card" element={<CardComponent />} />
        <Route path="/Selcet" element={<SelcetComponent />} />
        <Route path="/Signup" element={<SignupComponent />} />
        <Route path="/HakertonCategory" element={<HakertonCategoryComponent />} />
        <Route path="/ProjectCategory" element={<ProjectCategoryComponent />} />
        <Route path="/ContestCategory" element={<ContestCategoryComponent />} />
      </Routes> 
   
    </>
  );
}

export default App;
