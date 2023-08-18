
import styled, { css } from 'styled-components';
import { Link, Route, Routes } from "react-router-dom"; // Import Link component
import React, { useState } from 'react';
import Notion from '../asset/Notion.png';
import github from '../asset/github.png';
import sparkles from '../asset/sparkles.png';
import Green from '../asset/Green.png';

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
  color: var(--grey-thickest, #626468);
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
  padding: 30px; /* Increase the padding for more space */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  width: 700px;
  height: 400px;
  overflow: hidden; /* Hide the scrollbars */
`;


const SmallPictureBox = styled.div`
  border-radius: 20px;
  border: 1px solid #EBEBEB;
  width: 300px;
  height: 177px;
  flex-shrink: 0;
  margin-left: 1rem;
`;

const SmallNameBox = styled.div`
  margin-left: 8rem;
  margin-top: 2rem;
  color: var(--black-point, #27292C);
  font-family: Inter;
  font-size: 27px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const SmallTextBox = styled.div`
  margin-left: 1rem;
  margin-top: 2rem;
  color: var(--black-point, #27292C);
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SmallIntroduceBox = styled.div`
  margin-left: 5rem;
  margin-top: 1rem;
  color: var(--blue-point, #0068FF);
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SmallButtonBox = styled.button`
  margin-left: 2rem;
  margin-top: 1rem;
  border-radius: 10px;
  background: var(--blue-point, #0068FF);
  color: White;
  width: 269px;
  height: 51px;
  flex-shrink: 0;
`;


const PopupBox = styled.div`
  display: flex;
`;

const LeftBox = styled.div`
  
`;

const RightBox = styled.div`
  
`;

const Delete = styled.button`
  border: none;
  margin-left: 20rem;
  background-color:transparent;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  

  color:grey;
  position: absolute;
`;



const IntroduceBox = styled.div`

  color: var(--black-point, #27292C);
  font-family: Inter;
  font-size: 27px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 1rem;
`;

const NotionBox = styled.div`

`;

const VerySmallBox = styled.div`
  margin-top: 1rem;
  margin-left: 1rem;
  border-radius: 15px;
  border: 1px solid var(--grey-light, #F4F6F9);
  background: #FFF;
  width: 33px;
  height: 33px;
  flex-shrink: 0;

  display: flex;
`;

const NotionTitle = styled.div`

  margin-left: 1rem;
  color: var(--black-point, #27292C);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const NotionLink = styled.div`

  margin-left: 1rem;
  color: var(--blue-point, #0068FF);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 600px;
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
          <Link to="/"  >홈</Link>
        </Home>
        <Register>
          <Link to="/Card"  >명함</Link>
        </Register>
        <Login>
          <Link to="/login"  >로그인</Link>
        </Login>
      </Header>
      <Border />
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
            <PopupBox>
              <LeftBox>
                <SmallPictureBox>사진자리</SmallPictureBox>
                <SmallNameBox>{selectedProfile.name}</SmallNameBox>
                <SmallIntroduceBox>{selectedProfile.school}</SmallIntroduceBox>
                <SmallTextBox>{selectedProfile.introduction}</SmallTextBox>
                <SmallButtonBox>카카오톡 연락하기</SmallButtonBox>

              </LeftBox>
              <RightBox>
                <Delete onClick={closeModal}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.96209 4.96209C5.3282 4.59597 5.9218 4.59597 6.28791 4.96209L15 13.6742L23.7121 4.96209C24.0782 4.59597 24.6718 4.59597 25.0379 4.96209C25.404 5.3282 25.404 5.9218 25.0379 6.28791L16.3258 15L25.0379 23.7121C25.404 24.0782 25.404 24.6718 25.0379 25.0379C24.6718 25.404 24.0782 25.404 23.7121 25.0379L15 16.3258L6.28791 25.0379C5.9218 25.404 5.3282 25.404 4.96209 25.0379C4.59597 24.6718 4.59597 24.0782 4.96209 23.7121L13.6742 15L4.96209 6.28791C4.59597 5.9218 4.59597 5.3282 4.96209 4.96209Z" fill="#A4A5A8" stroke="#A4A5A8" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </Delete>
                <IntroduceBox>
                  소개 링크
                  <VerySmallBox>
                    <img src={Notion} />
                    <NotionBox>
                      <NotionTitle>
                        내 노션 
                      </NotionTitle>
                      <NotionLink>
                        https://www.notion.so/jodandan
                      </NotionLink>
                    </NotionBox>
                  </VerySmallBox>

                  <VerySmallBox>
                    <img src={github} />
                    <NotionBox>
                      <NotionTitle>
                        내 깃허브 
                      </NotionTitle>
                      <NotionLink>
                        https://github.com/jodandan
                      </NotionLink>
                    </NotionBox>
                  </VerySmallBox>
                </IntroduceBox>

                <IntroduceBox>
                  프로젝트
                  <VerySmallBox>
                    <img src={sparkles} />
                    <NotionBox>
                      <NotionTitle>
                        심판다 
                      </NotionTitle>
                      <NotionLink>
                        모바일 개발자
                      </NotionLink>
                    </NotionBox>
                  </VerySmallBox>

                  <VerySmallBox>
                    <img src={Green} />
                    <NotionBox>
                      <NotionTitle>
                        모두의 정원 
                      </NotionTitle>
                      <NotionLink>
                        모바일 개발자
                      </NotionLink>
                    </NotionBox>
                  </VerySmallBox>

                  <VerySmallBox>
                    <img src={sparkles} />
                    <NotionBox>
                      <NotionTitle>
                        판다 
                      </NotionTitle>
                      <NotionLink>
                        모바일 개발자
                      </NotionLink>
                    </NotionBox>
                  </VerySmallBox>
                  
                </IntroduceBox>

              </RightBox>
            </PopupBox>
          </ModalContent>

        </ModalOverlay>
      )}
    </>
  );
};