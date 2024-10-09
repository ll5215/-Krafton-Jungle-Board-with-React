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
  const [loading, setLoading] = useState(false); // 로딩 상태 관리
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true); // 로그인 시작 시 로딩 상태로 설정
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
    setLoading(false); // 로그인 완료 후 로딩 상태 해제
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
            <LoginButton
              onClick={handleLogin}
              disabled={loading} // 로딩 중이면 버튼 비활성화
              style={{
                backgroundColor: loading ? "#90ABFF" : "", // 로딩 중일 때 버튼 색상 변경
                color: loading ? "#C7D5FF" : "", // 로딩 중일 때 글자 색상 변경
                cursor: loading ? "not-allowed" : "pointer", // 로딩 중일 때 커서 변경
              }}
            >
              {loading ? "..." : "로그인"} {/* 로딩 중일 때 텍스트 변경 */}
            </LoginButton>
            <LoginLinkContainer>
              <LoginLink>회원이 아니신가요?</LoginLink>
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
