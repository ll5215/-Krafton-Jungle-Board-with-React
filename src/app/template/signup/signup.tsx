import { useForm, SubmitHandler } from "react-hook-form";
import {
  LoginPageBody,
  LoginLeftSection,
  LoginTitleWrap,
  LoginPoint,
  LoginDescription,
  LoginDivider,
  LoginButtonContainer,
  LoginButton,
} from "@/app/template/login/styled";
import {
  SignupContainer,
  SignupInput,
  SignupInputLabel,
  SignupInputWrap,
  SignupRightSection,
  SignupTitle,
} from "./styled";
import { useRouter } from "next/navigation";  // 클라이언트 측 라우터 사용
import { useAlert } from "@/component/comfirm-popup";

// 폼 데이터 타입 정의
interface SignupFormData {
  name: string;
  email: string;
  username: string;
  password: string;
}

export default function SignupTemplate() {
  const { register, handleSubmit, formState: { errors } } = useForm<SignupFormData>();
  const router = useRouter();  // useRouter 사용
  const customAlert = useAlert();

  // 폼 제출 함수
  const onSubmit: SubmitHandler<SignupFormData> = async (data) => {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      customAlert("회원가입 되었습니다!");
      router.push('/');  // 회원가입 성공 후 로그인 페이지로 이동
    } else {
      customAlert("이미 회원입니다")
    }
  };

  return (
    <LoginPageBody>
      <SignupContainer>
        <LoginLeftSection>
          <LoginTitleWrap>
            <SignupTitle>SIGNUP</SignupTitle>
            <LoginPoint />
          </LoginTitleWrap>
          <LoginDescription>
            무슨 말을 써야할까 아주 큰 고민이에요
          </LoginDescription>
        </LoginLeftSection>
        <LoginDivider />
        <SignupRightSection onSubmit={handleSubmit(onSubmit)}>
            <SignupInputWrap>
              <SignupInputLabel>이름</SignupInputLabel>
              <SignupInput
                placeholder="이름을 입력해주세요"
                {...register("name")}
                required
              />
              {errors.name && <p>{errors.name.message}</p>}
            </SignupInputWrap>

            <SignupInputWrap>
              <SignupInputLabel>이메일</SignupInputLabel>
              <SignupInput
                placeholder="이메일을 입력해주세요"
                {...register("email", {
                  pattern: {
                    value: /^\S+@\S+$/,
                    message: "유효한 이메일을 입력해주세요",
                  },
                })}
                required
              />
              {errors.email && <p>{errors.email.message}</p>}
            </SignupInputWrap>

            <SignupInputWrap>
              <SignupInputLabel>아이디</SignupInputLabel>
              <SignupInput
                placeholder="아이디를 입력해주세요"
                {...register("username")}
                required
              />
              {errors.username && <p>{errors.username.message}</p>}
            </SignupInputWrap>

            <SignupInputWrap>
              <SignupInputLabel>비밀번호</SignupInputLabel>
              <SignupInput
                type="password"
                placeholder="비밀번호를 입력해주세요"
                {...register("password")}
                required
              />
              {errors.password && <p>{errors.password.message}</p>}
            </SignupInputWrap>

            <LoginButtonContainer>
              <LoginButton type="submit">회원가입</LoginButton>
            </LoginButtonContainer>
        </SignupRightSection>
      </SignupContainer>
    </LoginPageBody>
  );
}
