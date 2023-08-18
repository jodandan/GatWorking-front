import { Link, useNavigate} from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

import LoginLogo from "../asset/LoginLogo.png";




const LoginBox = styled.div`
  /* Add your styling here */
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Add your styling here */
`;

const Title = styled.form`
    display: flex;
    margin-top: 4rem;
    color: var(--black-point, #27292C);
    font-family: Inter;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

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
    a:link { color: #0068FF; text-decoration: none;}
    a:visited { color: #0068FF; text-decoration: none;}
    a:hover { color: #0068FF; text-decoration: underline;}
    display: inline;
    margin-left: 1rem;

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
        navigate('/select');
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