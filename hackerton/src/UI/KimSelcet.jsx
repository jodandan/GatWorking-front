import React from "react";
import styled from 'styled-components';
import { Link ,Route, Routes } from "react-router-dom"; // Import Link component
import QuestionItem from "./KimQuestionItem";
import Person from "../asset/Person.png";
import "./KimSelcet.css";

import Green from "../asset/Green.png";

const Header = styled.div`
  display: flex;
  margin-top: 2rem;

`;

const Logo = styled.div`
  margin-left: 3rem;
  width: 18.969px;
  height: 27.5px;
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

const Space = styled.div`
  width: 100%;
  height: 100%;
`;

const ContentSpace = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  height: 100vh;
  font-family: Inter;
`;

const Question = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 400px 0.3fr 1fr;
`;

const Board = styled.div`
  width: 100%;
  height: 100%;
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

const SubmitButton = styled.div`
  padding: 20px;
  background-color: #0068FF;
  width: 100px;
  border-radius: 15px;
  text-align: center;
`;

const SubmitButtonText = styled.div`
  font-weight: bold;
  font-size: 17px;
  color: white;
`;

const SpaceHeight = styled.div`
  height: 40px;
`;

const BCardSpace = styled.div`

`;

export default function Selcet() {
    return (
      <>
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
        <ContentSpace>
          <Space></Space>
          <Question>
            <Board>
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
            </Board>
            <Space></Space>
            <Board>
              <QuestionItem title="1. 역량 관리"/>
              <QuestionItem title="2. 박애 관리"/>
              <QuestionItem title="3. 봉사 관리"/>
              <QuestionItem title="4. 애국 관리"/>
              <QuestionItem title="5. 인성 관리"/>
              <SpaceHeight/>
              <SubmitButton>
                <SubmitButtonText>제출하기</SubmitButtonText>
              </SubmitButton>   
            </Board>
          </Question>
          <Space></Space>
        </ContentSpace>
    </>

    );
}