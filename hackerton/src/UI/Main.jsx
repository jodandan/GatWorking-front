import React from "react";
import styled from 'styled-components';
import { Link ,Route, Routes } from "react-router-dom"; // Import Link component


import CardComponent from "../Page/CardComponent";
import LoginComponent from "../Page/LoginComponent";

import FisrtAppleWatchUI from "./FisrtAppleWatchUI";
import SecondAppleWatchUI from "./SecondAppleWatchUI";
import ThirdAppleWatchUI from "./ThirdAppleWatchUI";
import FourAppleWatchUI from "./FourAppleWatchUI";
import FiveAppleWatchUI from "./FiveAppleWatchUI";

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
  margin-left: 23rem;

  a:link { color: black; text-decoration: none;}
  a:visited { color: black; text-decoration: none;}
  a:hover { color: black; text-decoration: underline;}
`;

const Register = styled.div`
  color: var(--grey-point, #D2D5D9);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 15rem;

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
  margin-left: 15rem;

  a:link { color: grey; text-decoration: none;}
  a:visited { color: grey; text-decoration: none;}
  a:hover { color: grey; text-decoration: underline;}

`;
const Border = styled.div`
  margin-top: 1rem;
  border-bottom:2px solid gray;
  margin-bottom: 2rem;
`;

const AppleWatch = styled.div`
  margin-right: 6rem;
  margin-left: 4rem;
`;

const Card = styled.div`
  border: 1px solid black;
  box-shadow: 5px 5px 5px 5px gray;
  border: none;
  width: 500px;
  border-radius: 30px;
  border: 1px solid #EBEBEB;
  background: #FFF;
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.05);
`;

const Body = styled.div`
  display: flex;
`;

const TextinCard = styled.div`
  text-align: center;
  
`;

const Name = styled.div`
  margin-top: 15rem;
  margin-right: 15rem;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Text = styled.div`
  margin-top: 5rem;
  color: var(--black-point, #27292C);
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Introduce = styled.div`
  margin-top: 1rem;
  margin-right: 8rem; 
  color: var(--blue-point, #0068FF);
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Address = styled.div`
  margin-top: 1rem;
  margin-left: 6rem;
  color: grey-thickest;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Click = styled.div`
  margin-top: 5rem;
  width:  20;
  height: 6rem;
  flex-shrink: 0;
  border-radius: 0px 0px 30px 30px;
  border: 1px solid #EBEBEB;
  background: var(--grey-light, #F4F6F9);
`;

const BCard = styled.div`
  margin-top: 2rem;
  margin-left: 5rem;
  color: var(--blue-point, #0068FF);
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const SecondBody = styled.div`
  width: 94.8rem;
  height: 32rem;
  border: 1px solid #EBEBEB;
  
`;

const Title = styled.div`
  border: 1px solid #EBEBEB;
  color: var(--black-point, #27292C);
  font-family: Inter;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 4rem;
  margin-left: 3rem;
`;

const Picture = styled.div`
  border: 1px solid #EBEBEB;
  width: 240px;
  height: 177px;
  flex-shrink: 0;
  margin-left: 1rem;
`;

const PictureBox = styled.div`
  margin-left: 3rem;
  margin-top: 3rem;
`;

const SecondName = styled.div`

  margin-left:  1rem;
  margin-top: 2rem;
`;

const SecondText = styled.div`
  margin-left: 1rem;
  margin-top: 2rem;
  colo  r: var(--grey-thickest, #626468);
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SecondIntroduce = styled.div`
  margin-left: 1rem;
  margin-top: 1rem;
  color: var(--blue-point, #0068FF);
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SecondBox = styled.div`
  display: flex;
`;

function Main() {
    return (
      <>
        <Routes>
          <Route path="/Card" element={<CardComponent />} />
          <Route path="/login" element={<LoginComponent />} />
        </Routes>
        <Header>
          <Logo>
            대충 로고자리
          </Logo>
          <Home>
            <Link to="/">홈</Link>
          </Home>
          <Register>
            <Link to="/Card">명함등록</Link>
          </Register>
          <LoginCss>
            <Link to="/login">로그인</Link>
          </LoginCss>
        </Header>
        <Border/>
  
        <Body>
          <AppleWatch>
            <FisrtAppleWatchUI/>
            <SecondAppleWatchUI/>
            <ThirdAppleWatchUI/>
            <FourAppleWatchUI/>
            <FiveAppleWatchUI/>
          </AppleWatch>
          <Card>
            <TextinCard>
              <Name>
                김성섭
              </Name>
              <Introduce>
                22학번 / 모바일개발자
              </Introduce>
              <Text>
                새로운 것을 즐기는 개발자 김성섭입니다.
              </Text>
            </TextinCard>
            <Address>
              https://github.com/wakathon-dont-worry-team-name/
            </Address>
            <Address>
              https://notion.com/wakathon-dont-worry-team-name/
            </Address>
            <Click>
              <BCard>
                명함보기
              </BCard>
            </Click>
          </Card>
        </Body>
        <SecondBody>
          <Title>
            컴퓨터 공학과 학생들을 추천해주세요~
          </Title>
        <SecondBox>
          <PictureBox>
            <Picture>
              사진자리
            </Picture>
            <SecondName>
              김성섭
            </SecondName>
            <SecondText>
              새로운 것을 즐기는 개발자 김성섭입니다.
            </SecondText>
            <SecondIntroduce>
              22학번 / 모바일개발자
            </SecondIntroduce>
          </PictureBox>
          <PictureBox>
            <Picture>
              사진자리
            </Picture>
            <SecondName>
              김성섭
            </SecondName>
            <SecondText>
              새로운 것을 즐기는 개발자 김성섭입니다.
            </SecondText>
            <SecondIntroduce>
              22학번 / 모바일개발자
            </SecondIntroduce>
          </PictureBox>
          <PictureBox>
            <Picture>
              사진자리
            </Picture>
            <SecondName>
              김성섭
            </SecondName>
            <SecondText>
              새로운 것을 즐기는 개발자 김성섭입니다.
            </SecondText>
            <SecondIntroduce>
              22학번 / 모바일개발자
            </SecondIntroduce>
          </PictureBox>
          <PictureBox>
            <Picture>
              사진자리
            </Picture>
            <SecondName>
              김성섭
            </SecondName>
            <SecondText>
              새로운 것을 즐기는 개발자 김성섭입니다.
            </SecondText>
            <SecondIntroduce>
              22학번 / 모바일개발자
            </SecondIntroduce>
          </PictureBox>
        </SecondBox>
      </SecondBody>
      </>
    );
  }
  
  export default Main;