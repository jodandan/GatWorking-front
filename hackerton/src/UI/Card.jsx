
import styled, { css } from 'styled-components';
import { Link ,Route, Routes } from "react-router-dom"; // Import Link component
import React, { useState } from 'react';


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
  margin-left: 15rem;

  a:link { color: black; text-decoration: none;}
  a:visited { color: black; text-decoration: none;}
  a:hover { color: black; text-decoration: underline;}
   
`;

const Login = styled.div`
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

const SecondBody = styled.div`
  width: 94.8rem;
  height: 32rem;
  border: 1px solid #EBEBEB;
  margin-left: 1rem;
  
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
  border-radius: 20px;
  border: 1px solid #EBEBEB;
  width: 330px;
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

const Address = styled.div`
  color: var(--grey-thickest, #626468);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 1rem;
  margin-top: 1rem;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  max-width: 80%;
`;


export default function Card() {

  const [selectedProfile, setSelectedProfile] = useState(null);
  
  const profiles = [
    {
      name: '김성섭',
      introduction: '새로운 것을 즐기는 개발자 김성섭입니다.',
      school: '22학번 / 모바일개발자',
      github: 'https://github.com/wakathon-dont-worry-team-name/',
      notion: 'https://notion.com/wakathon-dont-worry-team-name/',
    },
  ];

    // Modal open function
    const openModal = (profile) => {
      setSelectedProfile(profile);
    };
  
    // Modal close function
    const closeModal = () => {
      setSelectedProfile(null);
    };

    return (
      <>
        <Header>
          <Logo>
           여기카드페이지
          </Logo>
          <Home>
            <Link to="/" onfocus="this.blur()" >홈</Link>
          </Home>
          <Register>
            <Link to="/Card" onfocus="this.blur()" >명함</Link>
          </Register>
          <Login>
            <Link to="/login" onfocus="this.blur()" >로그인</Link>
          </Login>
        </Header>
        <Border/>
      <SecondBox>
        <SecondBody>
        {profiles.map((profile, index) => (
          <PictureBox key={index} onClick={() => openModal(profile)}>
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
            <Address>
              https://github.com/wakathon-dont-worry-team-name/
            </Address>
            <Address>
              https://notion.com/wakathon-dont-worry-team-name/
            </Address>
          </PictureBox>
          </PictureBox>
          ))}
        </SecondBody>

        <SecondBody>
        {profiles.map((profile, index) => (
          <PictureBox key={index} onClick={() => openModal(profile)}>
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
            <Address>
              https://github.com/wakathon-dont-worry-team-name/
            </Address>
            <Address>
              https://notion.com/wakathon-dont-worry-team-name/
            </Address>
          </PictureBox>
          </PictureBox>
          ))}
        </SecondBody>

        <SecondBody>
        {profiles.map((profile, index) => (
          <PictureBox key={index} onClick={() => openModal(profile)}>
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
            <Address>
              https://github.com/wakathon-dont-worry-team-name/
            </Address>
            <Address>
              https://notion.com/wakathon-dont-worry-team-name/
            </Address>
          </PictureBox>
          </PictureBox>
          ))}
        </SecondBody>
      </SecondBox>

      {/* Render the modal */}
      {selectedProfile && (
        <ModalOverlay>
          <ModalContent>
            {/* Render profile details */}
            <h2>{selectedProfile.name}</h2>
            <p>{selectedProfile.introduction}</p>
            <p>{selectedProfile.school}</p>
            {/* ... Add more profile details ... */}
            <button onClick={closeModal}>Close</button>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};