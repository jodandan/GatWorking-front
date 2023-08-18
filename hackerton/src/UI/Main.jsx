import React from "react";
import styled from 'styled-components';
import { Link ,Route, Routes } from "react-router-dom"; // Import Link component


import CardComponent from "../Page/CardComponent";
import LoginComponent from "../Page/SelcetComponent";
import SelcetComponent from "../Page/SelcetComponent";
import HakertonCategoryComponent from "../Page/HakertonCategoryComponent";
import ProjectCategoryComponent from "../Page/ProjectCategoryComponent";
import ContestCategoryComponent from "../Page/ContestCategoryComponent";


import FisrtAppleWatchUI from "./FisrtAppleWatchUI";
import SecondAppleWatchUI from "./SecondAppleWatchUI";
import ThirdAppleWatchUI from "./ThirdAppleWatchUI";
import FourAppleWatchUI from "./FourAppleWatchUI";
import FiveAppleWatchUI from "./FiveAppleWatchUI";

import Green from "../asset/Green.png";

import './KimSelcet.css';

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

const Body = styled.div`
  display: flex;
`;

const SecondBody = styled.div`
  width: 94.8rem;
  height: 32rem;
  border: 1px solid #EBEBEB;
  
`;

const Title = styled.div`
  color: var(--black-point, #27292C);
  font-family: Inter;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 4rem;
  margin-left: 2rem;
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

const Card = styled.div`
  border: 1px solid black;
  box-shadow: 5px 5px 5px 5px gray;
  border: none;
  width: 100%;
  border-radius: 30px;
  border: 1px solid #EBEBEB;
  background: #FFF;
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.05);
`;

const CardImage = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 30px 30px 0px 0px;
`;

const TextinCard = styled.div`
  margin-left: 30px;
  padding: 30px 30px 0px 0px;
`;

const Name = styled.div`
  margin-right: 15rem;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Text = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  color: var(--black-point, #27292C);
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Introduce = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  color: var(--blue-point, #0068FF);
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Address = styled.div`
  margin-top: 10px;
  margin-left: 30px;
  color: grey-thickest;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  padding-right: 30px;
`;

const Click = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 30px;
  margin-right: 30px;
  width: 20;
  padding-top: 20px;
  padding-bottom: 20px;
  flex-shrink: 0;
  border-radius: 15px 15px 15px 15px;
  background: var(--grey-light, #F4F6F9);
`;

const BCard = styled.div`
  color: var(--blue-point, #0068FF);
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
`;

function Main() {
    return (
      <>
        <Routes>
          <Route path="/Card" element={<CardComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/Selcet" element={<SelcetComponent />} />
          <Route path="/HakertonCategory" element={<HakertonCategoryComponent />} />
          <Route path="/ProjectCategory" element={<ProjectCategoryComponent />} />
          <Route path="/ContestCategory" element={<ContestCategoryComponent />} />
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
          <CategoryBox>
            <CategotyText>
               <Link to="/HakertonCategory">해커톤</Link>
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
        <Body>
          <AppleWatch>
            <FisrtAppleWatchUI/>
            <SecondAppleWatchUI/>
            <ThirdAppleWatchUI/>
            <FourAppleWatchUI/>
            <FiveAppleWatchUI/>
          </AppleWatch>
          <Card>
              <div className="background-image"></div>
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
                  <div className="icon-github"></div>
                  <div className="address">https://github.com/wakathon-dont-worry-team-name/</div>
                </Address>
                <Address>
                  <div className="icon-notion"></div>
                  <div className="address">https://notion.com/wakathon-dont-worry-team-name/</div>
                </Address>
                <Click>
                  <BCard>
                    명함보기
                  </BCard>
                </Click>
              </Card>
        </Body>
        <SecondBody>
        <GridBox>
          <SpaceContainer></SpaceContainer>
          <ContentBox>
            <Title>
                  컴퓨터공학과 재학생을 추천해드릴게요 🖥️
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
  
  export default Main;