import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  LoginButton,
  LoginButtonContainer,
  LoginContainer,
  LoginDescription,
  LoginDivider,
  LoginInput,
  LoginInputContainer,
  LoginLeftSection,
  LoginLink,
  LoginLinkContainer,
  LoginLinkDivider,
  LoginPageBody,
  LoginPoint,
  LoginRightSection,
  LoginTitle,
  LoginTitleWrap,
} from "./styled";

export default function LoginTemplate() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
  
    if (response.ok) {
      // 로그인 성공 시 메인 페이지로 리다이렉트
      router.push("/main");
    } else {
      alert("로그인에 실패했습니다.");
    }
  };
  

  return (
    <LoginPageBody>
      <LoginContainer>
        <LoginLeftSection>
          <LoginTitleWrap>
            <LoginTitle>LOGIN</LoginTitle>
            <LoginPoint></LoginPoint>
          </LoginTitleWrap>
          <LoginDescription>무슨 말을 써야할까 아주 큰 고민이에요</LoginDescription>
        </LoginLeftSection>
        <LoginDivider></LoginDivider>
        <LoginRightSection>
          <LoginInputContainer>
            <LoginInput
              placeholder="아이디"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <LoginInput
              placeholder="비밀번호"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </LoginInputContainer>
          <LoginButtonContainer>
            <LoginButton onClick={handleLogin}>로그인</LoginButton>
            <LoginLinkContainer>
              <LoginLink>비밀번호 찾기</LoginLink>
              <LoginLinkDivider>|</LoginLinkDivider>
              <Link href="/signup">
                <LoginLink>회원가입</LoginLink>
              </Link>
            </LoginLinkContainer>
          </LoginButtonContainer>
        </LoginRightSection>
      </LoginContainer>
    </LoginPageBody>
  );
}
