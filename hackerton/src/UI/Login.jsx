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
  background-color: #f4f6f9;
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
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();

    // 유효성 검사: 아이디와 비밀번호가 입력되었는지 확인
    if (!nickname || !password) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    
    try {
      const response = await axios.post("https://iki.digital:8080/api/v1/owner/login", {
        ownerName: nickname,
        password,
      });

      
      const { httpStatus, message, responseData } = response.data;

      if (httpStatus === 200) {
        // 로그인 성공

        console.log("로그인 성공:", message);
        localStorage.setItem('cartId', null);
        // responseData에서 userId를 확인하고 할당
        const userId = responseData.ownerId;
        console.log("유저 아이디는:", userId);
        localStorage.setItem('userId', userId);
        // 다른 컴포넌트에서
        // 로컬 스토리지에서 읽기 
        // const userId = localStorage.getItem('userId');

        const { ownerId, ownerName, shopName } = responseData;
    
        // 토큰 등의 처리를 추가할 수 있습니다.
        // localStorage.setItem("token", token);
    
        // 로그인 후 이동
        navigate('/main');
      } else {
        // 로그인 실패
        console.error("로그인 실패:", message);
        alert(message);
      }
    } catch (error) {
      console.error("로그인 오류:", error);
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
              name="nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
 
            />
            <Title>
                비밀번호
            </Title>
            <FormInput
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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