import { Link, useNavigate} from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

import LoginLogo from "../asset/LoginLogo.png";


const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Add your styling here */
`;

const LoginBox = styled.div`
  margin: auto;
  max-width: 500px;
  padding: 2rem;
  background-color: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #27292c;
  font-family: Inter, sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const FormInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #d2d5d9;
  border-radius: 5px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  font-family: Inter, sans-serif;
  font-size: 1rem;
`;

const SubmitBtn = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: #0068ff;
  color: white;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  
  &:hover {
    background-color: #0052cc;
  }
`;

const Trash = styled.div`
  text-align: center;
  margin-top: 1rem;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  
  a {
    color: #0068ff;
    text-decoration: none;
    font-weight: 700;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Logo = styled.div`
    margin-top: 10rem;
`;

const LoginText = styled.div`
    color: white;
    
`;

const Text = styled.div`
    margin-top: 2rem;
    color: var(--grey-thick, #A4A5A8);
    text-align: center;
    font-family: Inter;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: inline;

    
`;

const Box = styled.div`
    display: inline-block;
    margin-top: 1rem;
    
    `;

export default function Login() {
  const [memberId, setMemberId] = useState("");
  const [pwd, setPwd] = useState("");

  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();

    // 유효성 검사: 아이디와 비밀번호가 입력되었는지 확인
    if (!memberId || !pwd) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    // 입력된 아이디와 비밀번호가 "qwe"와 "123"인지 확인
    if (memberId === "qwe" && pwd === "123") {
      // 로그인 성공
      console.log("로그인 성공 완료");

      // localStorage 설정 및 페이지 이동
      localStorage.setItem("userId", memberId);
      navigate('/main');
    } else {
      // 로그인 실패
      console.error("로그인 실패: 아이디와 비밀번호를 확인해주세요.");
      alert("아이디와 비밀번호를 확인해주세요.");
    }
  };
  
  return (
    <>
      <LoginBox>
        <SignUpForm onSubmit={handleLogin}>
            <Logo>
                <img src={LoginLogo} />
            </Logo>
            <Title>
                 아이디
            </Title>
            {/* <FormLabel htmlFor="nickname" /> */}
            <FormInput
              type="text"
              name="memberId"
              value={memberId}
              onChange={(e) => setMemberId(e.target.value)}
              required
 
            />
            <Title>
                비밀번호
            </Title>
            <FormInput
              type="password"
              name="pwd"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              required

            />
          
          <SubmitBtn type="submit" onClick={handleLogin}>
            <LoginText>
                로그인
            </LoginText>
          </SubmitBtn>
          <Box>
            <Text>
              아직도 회원이 아니신가요?
            </Text>
            <Trash>
              <Link to={"/signup"}>회원가입하기 </Link>
            </Trash>
          </Box>
        </SignUpForm>
      </LoginBox>
    </>
  );
}