import { LoginButton, LoginButtonContainer, LoginContainer, LoginDescription, LoginDivider, 
    LoginInput, LoginInputContainer, LoginLeftSection, LoginLink, LoginLinkContainer, 
    LoginLinkDivider, LoginPageBody, LoginPoint, LoginRightSection, LoginTitle, LoginTitleWrap 
} from "./styled";

export default function LoginTemplate() {

    return <LoginPageBody>
        <LoginContainer>
            <LoginLeftSection>
                <LoginTitleWrap>
                    <LoginTitle>LOGIN</LoginTitle>
                    <LoginPoint></LoginPoint>
                </LoginTitleWrap>
                <LoginDescription>
                    무슨 말을 써야할까 아주 큰 고민이에요
                </LoginDescription>
            </LoginLeftSection>
            <LoginDivider></LoginDivider>
            <LoginRightSection>
                <LoginInputContainer>
                    <LoginInput placeholder="아이디" />
                    <LoginInput placeholder="비밀번호"/>
                </LoginInputContainer>
                <LoginButtonContainer>
                    <LoginButton>로그인</LoginButton>
                    <LoginLinkContainer>
                        <LoginLink>비밀번호 찾기</LoginLink>
                        <LoginLinkDivider>|</LoginLinkDivider>
                        <LoginLink>회원가입</LoginLink>
                    </LoginLinkContainer>
                </LoginButtonContainer>
            </LoginRightSection>
        </LoginContainer>
    </LoginPageBody>;
  }