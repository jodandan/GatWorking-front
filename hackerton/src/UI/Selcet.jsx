import React from "react";
import styled from 'styled-components';
import { Link ,Route, Routes } from "react-router-dom"; // Import Link component

const Header = styled.div`
  display: flex;
  margin-top: 2rem;

`;

const Logo = styled.div`
  margin-left: 3rem;
`;

const Home = styled.div`
  color: var(--grey-point, #D2D5D9);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 35rem;

  a:link { color: grey; text-decoration: none;}
  a:visited { color: grey; text-decoration: none;}
  a:hover { color: grey; text-decoration: underline;}
`;

const Register = styled.div`
  color: var(--grey-point, #D2D5D9);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 8rem;

  a:link { color: grey; text-decoration: none;}
  a:visited { color: grey; text-decoration: none;}
  a:hover { color: grey; text-decoration: underline;}
   
`;

const LoginCss = styled.div`
  color: var(--grey-point, #D2D5D9);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 8rem;

  a:link { color: black; text-decoration: none;}
  a:visited { color: black; text-decoration: none;}
  a:hover { color: black; text-decoration: underline;}

`;
const Border = styled.div`
  margin-top: 1rem;
  border-bottom:2px solid gray;
  margin-bottom: 2rem;
`;



export default function Selcet() {
    return (
      <>
        <Header>
          <Logo>
            선택페이지
          </Logo>
          <Home>
            <Link to="/">홈</Link>
          </Home>
          <Register>
            <Link to="/Card">명함</Link>
          </Register>
          <LoginCss>
            <Link to="/Login">선택의 시간</Link>
          </LoginCss>
        </Header>
        <Border/>
    </>

    );
}