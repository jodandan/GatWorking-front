import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Notion from '../asset/Notion.png';
import github from '../asset/github.png';

import sparkles from '../asset/sparkles.png';
import Green from '../asset/Green.png';
import BlueCheck from '../asset/BlueCheck.png';
import GreyCheck from '../asset/GreyCheck.png';



const LoginBox = styled.div`
  display: inline;
`;

const Title = styled.form`
  display: flex;
  margin-top: 2rem;
  color: var(--black-point, #27292C);
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  
`;


const LeftTitle = styled.form`
  display: flex;
  margin-top: 2rem;
  color: var(--black-point, #27292C);
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 2rem;
  margin-bottom: 2rem;

`;

const FormInput = styled.input`
  width: 377px;
  height: 54px;
  flex-shrink: 0;
  border-radius: 15px;
  background: var(--grey-light, #F4F6F9);
  border: none;
  padding-left: 20px;
`;

const SubmitBtn = styled.button`
  margin-top: 3rem;
  width: 377px;
  height: 51px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--blue-point, #0068FF);
  border: none;
`;

const Trash = styled.div`
  margin-top: 1rem;
  color: var(--blue-point, #0068FF);
  text-align: center;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  a:link { color: #0068FF; text-decoration: none; }
  a:visited { color: #0068FF; text-decoration: none; }
  a:hover { color: #0068FF; text-decoration: underline; }
  display: inline;
  margin-left: 1rem;
`;

const AddIntroductionLink = styled.button`
  /* Add your styling for the add link button here */
`;

const IntroductionLink = styled.div`
  /* Add your styling for the introduction link here */
`;

const DeleteIntroductionLink = styled.button`
  /* Add your styling for the delete link button here */
`;

const AddProject = styled.button`
  /* Add your styling for the add project button here */
`;

const Project = styled.div`
  /* Add your styling for the project here */
`;

const DeleteProject = styled.button`
  /* Add your styling for the delete project button here */
`;

const SignUpForm = styled.div`
  display: flex;
  justify-content: space-between; /* Adjust this value as needed */
  align-items: flex-start; /* Align items at the top */

`;



const RightBox = styled.div`
  margin-right: 20rem;
`;

const LeftBox = styled.div`
  margin-left: 25rem;
`;

const MainTitle = styled.div`
  margin-top: 1rem;
  color: var(--black-point, #27292C);
text-align: center;
font-family: Inter;
font-size: 40px;
font-style: normal;
font-weight: 700;
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
  margin-top: 3rem;
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

const UnderBox = styled.div`
 margin-left: 30rem;
 margin-top: 7rem;
`;

const PlusButton = styled.button`
  margin-left: 30rem;
  margin-top: 7rem;
  border-radius: 7px;
  background: var(--blue-lightest, #E9F2FF);
  border: none;
  width: 60px;
  height: 25px;
  flex-shrink: 0;
  color: var(--blue-point, #0068FF);
font-family: Inter;
font-size: 17px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

const DeleteButton = styled.div`
  margin-left: 34rem;
  font-size: 20px;
  margin-top: -2rem;
  position: absolute;
  
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  width: 400px;
  text-align: center;
`;

const ModalTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ModalInput = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 1rem;
  padding: 5px;
`;

const ModalButton = styled.button`
  padding: 10px 20px;
  background-color: var(--blue-point, #0068FF);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const CloseModalButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const CheckTitle = styled.div`
  color: var(--black-point, #27292C);
  text-align: center;
  font-family: Inter;
  font-size: 27px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 5rem;
  margin-right: 60rem;

`;

const Contents = styled.div`
  color: var(--grey-thick, #A4A5A8);
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 5rem;
  margin-left: 1rem;


`;

const SecondContents = styled.div`
  color: var(--black-point, #27292C);
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 1rem;
  margin-left: 1rem;


`;

const V = styled.div`
color: var(--black-point, #27292C);
font-family: Inter;
font-size: 17px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: 1rem;
margin-left: 30rem;

`;

const ContentBox = styled.div`
  display: flex;
  

`;

const LastSubmitBtn = styled.div`
  border-radius: 10px;
  background: ${props => props.disabled ? '#B0B0B0' : '#0068FF'};
  width: 269px;
  height: 51px;
  flex-shrink: 0;
  color: ${props => props.disabled ? '#A4A5A8' : '#FFF'};
  text-align: center;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  margin-left: 40rem;
  margin-top: 5rem;
  line-height : 50px;
`;


const SignUp = () => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [shopName, setShopName] = useState('');
  const [introductionLinks, setIntroductionLinks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [ShowProjectModal ,setShowProjectModal] = useState('');
  const [projectName, setProjectName] = useState('');
  const [personalRole, setPersonalRole] = useState('');
  const [documentLink, setDocumentLink] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignUp = async (e) => {
    e.preventDefault();
    // ... your sign-up logic
  };

  const handleAddIntroductionLink = () => {
    // Add a new introduction link to the list
    const newLink = prompt('Enter the introduction link:');
    if (newLink) {
      setIntroductionLinks([...introductionLinks, newLink]);
    }
  };

  const handleDeleteIntroductionLink = (index) => {
    // Delete the selected introduction link from the list
    const updatedLinks = introductionLinks.filter((_, i) => i !== index);
    setIntroductionLinks(updatedLinks);
  };

  const handleAddProject = () => {
    // Add a new project to the list
    const newProject = {
      name: projectName,
      role: personalRole,
      link: documentLink,
    };
    
    // 새 프로젝트를 목록에 추가
    if (newProject.name && newProject.role && newProject.link) {
      setProjects([...projects, newProject]);

      // 입력 필드 초기화
      setProjectName('');
      setPersonalRole('');
      setDocumentLink('');

      // 모달 닫기
      setShowProjectModal(false);
    }
  };

  const handleDeleteProject = (index) => {
    // Delete the selected project from the list
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  const areBothTermsAgreed = () => {
    return termsAgreed && privacyAgreed;
  };

  return (
    <>
      <LoginBox>
      <MainTitle>회원가입</MainTitle>
      <SignUpForm>
        <LeftBox>
            <LeftTitle>
              사용자정보
            </LeftTitle>
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="196" height="196" viewBox="0 0 196 196" fill="none">
              <circle cx="98" cy="98" r="98" fill="#F4F6F9"/>
              </svg>
            </>
        </LeftBox>
        <RightBox>
          <Title>
            아이디
          </Title>

          <FormInput
            type="text"
            name="nickname"
            onChange={(e) => setNickname(e.target.value)}
            required
          />

          <Title>
            관심분야
          </Title>
          <FormInput
            type="text"
            name="nickname"

            onChange={(e) => setNickname(e.target.value)}
            required
          />

          <Title>
            학번
          </Title>
          <FormInput
            type="text"
            name="nickname"

            onChange={(e) => setNickname(e.target.value)}
            required
          />

          <Title>
            아이디
          </Title>
          <FormInput
            type="text"
            name="nickname"

            onChange={(e) => setNickname(e.target.value)}
            required
          />

          <Title>
            비밀번호
          </Title>

          <FormInput
            type="text"
            name="nickname"

            onChange={(e) => setNickname(e.target.value)}
            required
          />
        </RightBox>
        {/* {/* <SubmitBtn onClick={handleSignUp} value="회원가입하기">
          회원가입하기
        </SubmitBtn>
        <Trash>
          <Link to={"/"}>로그인 페이지로 이동</Link>
        </Trash>*/}
        </SignUpForm> 
      </LoginBox> 

      <UnderBox>
        <IntroduceBox>
          소개 링크
        
          <PlusButton onClick={() => setShowProjectModal(true)}>
          추가
        </PlusButton>
          <VerySmallBox>
            <img src={Notion} />
            <NotionBox>
              <NotionTitle>
                내 노션 
              </NotionTitle>
              <NotionLink>
                https://notion.com/jodandan
                <DeleteButton>
                  X
                </DeleteButton>
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
                <DeleteButton>
                  X
                </DeleteButton>
              </NotionLink>
            </NotionBox>
          </VerySmallBox>
        </IntroduceBox>

        <IntroduceBox>
          프로젝트
          <PlusButton>
          추가
          </PlusButton>
                  <VerySmallBox>
                    <img src={sparkles} />
                    <NotionBox>
                      <NotionTitle>
                        심판다 
                      </NotionTitle>
                      <NotionLink>
                        모바일 개발자
                        <DeleteButton>
                          X
                        </DeleteButton>
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
                        <DeleteButton>
                          X
                        </DeleteButton>
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
                        <DeleteButton>
                          X
                        </DeleteButton>
                      </NotionLink>
                    </NotionBox>
                  </VerySmallBox>
                  
                </IntroduceBox>
      </UnderBox>

      <UnderBox>
        <CheckTitle>
          약관
        </CheckTitle>
        <ContentBox>
        <Contents>
          <label>
            <input
              type="checkbox"
              checked={termsAgreed}
              onChange={() => setTermsAgreed(!termsAgreed)}
              style={{
                backgroundImage: `url(${require('../asset/GreyCheck.png')})`,
                backgroundSize: 'cover',
                width: '20px',
                height: '20px',
                marginRight: '8px',
              }}
            />
            
              개인정보 약관을 모두 읽었고, 동의합니다.
            
          </label>
        </Contents>
        </ContentBox>
        <SecondContents>
          <label>
            <input
              type="checkbox"
              checked={privacyAgreed}
              onChange={() => setPrivacyAgreed(!privacyAgreed)}  
              style={{
                backgroundImage: `url(${require('../asset/GreyCheck.png')})`,
                backgroundSize: 'cover',
                width: '20px',
                height: '20px',
                marginRight: '8px',
              }}         
            />
            
            사용자 약관을 모두 읽었고, 동의합니다.
            </label>
        </SecondContents>
      </UnderBox> 
      <LastSubmitBtn onClick={handleSignUp} disabled={!areBothTermsAgreed()}>
        회원가입하기
      </LastSubmitBtn>
      <UnderBox>
        <PopupBox>
        {ShowProjectModal && (
            <ModalOverlay>
              <ModalContent>
                <ModalTitle>프로젝트 추가</ModalTitle>
                <ModalInput
                  type="text"
                  placeholder="프로젝트 이름"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
                <ModalInput
                  type="text"
                  placeholder="개인 역할"
                  value={personalRole}
                  onChange={(e) => setPersonalRole(e.target.value)}
                />
                <ModalInput
                  type="text"
                  placeholder="문서 링크"
                  value={documentLink}
                  onChange={(e) => setDocumentLink(e.target.value)}
                />
                <ModalButton onClick={handleAddProject}>추가</ModalButton>
                <CloseModalButton onClick={() => setShowProjectModal(false)}>
                  X
                </CloseModalButton>
              </ModalContent>
            </ModalOverlay>
          )}
        </PopupBox>
      </UnderBox>
    </>
  );
};

export default SignUp;
