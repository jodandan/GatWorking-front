import React from "react";
import styled from 'styled-components';
import { Link ,Route, Routes } from "react-router-dom"; // Import Link component


import CardComponent from "../Page/CardComponent";
import SelcetComponent from "../Page/SelcetComponent";
import HakertonCategoryComponent from "../Page/HakertonCategoryComponent"

import FisrtAppleWatchUI from "./FisrtAppleWatchUI";
import SecondAppleWatchUI from "./SecondAppleWatchUI";
import ThirdAppleWatchUI from "./ThirdAppleWatchUI";
import FourAppleWatchUI from "./FourAppleWatchUI";
import FiveAppleWatchUI from "./FiveAppleWatchUI";

import Green from "../asset/Green.png";
import "./HakertonCategory.css";

const Header = styled.div`
  display: flex;
  margin-top: 2rem;

`;

const Logo = styled.div`
  margin-left: 3rem;
  width: 18.969px;
  height: 27.5px;
  position: absolute;
`;

const Home = styled.div`
  color: var(--grey-point, #D2D5D9);
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 35rem;

  a:link { color: black; text-decoration: none;}
  a:visited { color: black; text-decoration: none;}
  a:hover { color: black; text-decoration: underline;}
`;

const Register = styled.div`
  color: var(--grey-point, #D2D5D9);
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 50px;

  a:link { color: grey; text-decoration: none;}
  a:visited { color: grey; text-decoration: none;}
  a:hover { color: grey; text-decoration: underline;}
   
`;

const LoginCss = styled.div`
  color: var(--grey-point, #D2D5D9);
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 50px;

  a:link { color: grey; text-decoration: none;}
  a:visited { color: grey; text-decoration: none;}
  a:hover { color: grey; text-decoration: underline;}

`;
const Border = styled.div`
  margin-top: 1rem;
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
  
`;

const Title = styled.div`
  color: var(--black-point, #27292C);
  font-family: Inter;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 30px;
  margin-top: 4rem;
`;

const Picture = styled.div`
  width: 240px;
  height: 177px;
  flex-shrink: 0;
  margin-left: 1rem;
`;

const PictureBox = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 50px;
`;

const SpaceContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 100%;
`



const SecondName = styled.div`

  margin-left:  1rem;
  margin-top: 2rem;
  font-weight: bold;
  font-size: 20px;
`;

const SecondText = styled.div`
  margin-left: 1rem;
  margin-top: 20px;
  color: var(--grey-thickest, #626468);
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SecondIntroduce = styled.div`
  margin-left: 1rem;
  margin-top: 20px;
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

const Category = styled.div`
display: flex;
margin-left: 35rem;
`;

const CategoryBox = styled.div`
  flex-shrink: 0;
  border-radius: 15px;
  background: var(--grey-light, #F4F6F9);
  padding: 15px;
  margin-left: 10px;
  margin-right: 10px;
`;

const CategotyText = styled.div`
  color: var(--black-point, #27292C);
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;

  a:link { color: black; text-decoration: none;}
  a:visited { color: black; text-decoration: none;}
  a:hover { color: black; text-decoration: underline;}

`;


export default function HakertonCategory() {
    return (
      <>
        <Routes>
          <Route path="/Card" element={<CardComponent />} />
          <Route path="/Selcet" element={<SelcetComponent />} />
          <Route path="/HakertonCategory" element={<HakertonCategoryComponent />} />
        </Routes>
        <Header>
          <Logo>
             <img src={Green}/>
          </Logo>
          <Home>
            <Link to="/main">홈</Link>
          </Home>
          <Register>
            <Link to="/Card">명함</Link>
          </Register>
          <LoginCss>
            <Link to="/Selcet">선택의 시간</Link>
          </LoginCss>
        </Header>
        <Border/>
        <Category>
          <CategoryBox style={{
                backgroundColor: "black",
                color:"white",
            }}>
            <CategotyText style={{
                color:"white",
            }}>
              해커톤
            </CategotyText> 
          </CategoryBox>
          <CategoryBox>
            <CategotyText>
            <Link to="/ProjectCategory">프로젝트</Link>
            </CategotyText> 
          </CategoryBox>
          <CategoryBox>
            <CategotyText>
                <Link to="/ContestCategory">공모전</Link>
            </CategotyText> 
          </CategoryBox>
        </Category>
      <SecondBody>
        <GridBox>
          <SpaceContainer></SpaceContainer>
          <ContentBox>
            <Title>
                  해커톤에 참여해 본 사람들을 데려왔어요 🔍
              </Title>
            <SecondBox>
                <PictureBox>
                  <div className="person1"/>
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
                  <div className="person2"/>  
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
                  <div className="person3"/>
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
                  <div className="person4"/>
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
          </ContentBox>
          <SpaceContainer></SpaceContainer>
        </GridBox>
      </SecondBody>
    </>
    );
}