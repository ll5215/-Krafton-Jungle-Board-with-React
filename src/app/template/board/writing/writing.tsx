import { useForm, SubmitHandler } from "react-hook-form";
import { useState, MouseEvent } from "react";
import {
  WritingForm,
  FormLabel,
  WritingFormCategorySection,
  FormInput,
  FormTextArea,
  ButtonContainer,
  CancelButton,
  SubmitButton,
  WritingFormCCategoryButton,
  WritingPageBottom,
} from "./styled";
import { MainContainer, TitleSection } from "../../main/styled";
import Link from "next/link";
import HeaderComponent from "@/component/header";
import useAuth from "@/hooks/useAuth";
import { createPost } from "@/app/lib/actions/post";
import BackgroundImageComponent from "@/component/background";
import { useAlert } from "@/component/comfirm-popup";

interface FormData {
  title: string;
  content: string;
}

export default function BoardWritingTemplate() {
  useAuth();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // 카테고리를 하나만 선택하도록 변경
  const [categoryError, setCategoryError] = useState<string | null>(null);
  const categories = ["일상", "취미", "공부", "문화", "여행", "기타"];
  const customAlert = useAlert();

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const selectCategory = (e: MouseEvent, category: string) => {
    e.preventDefault(); // 카테고리 클릭 시 폼이 제출되지 않도록 기본 동작 방지
    if (selectedCategory === category) {
      setSelectedCategory(null); // 같은 카테고리 클릭 시 선택 해제
    } else {
      setSelectedCategory(category); // 새로운 카테고리 선택
      setCategoryError(null);
    }
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (!selectedCategory) {
      customAlert("카테고리를 선택해주세요")
      return;
    }

    const result = await createPost(data.title, data.content, selectedCategory);
    if (result.success) {
      window.location.href = "/main";
    } else {
      customAlert("글쓰기를 실패했습니다");
    }
  };

  return (
    <MainContainer>
      <HeaderComponent />
      <BackgroundImageComponent />

      <TitleSection>
        <h1>게시글 작성하기</h1>
        <p>여기도 뭔가 글씨를 쓰면 이쁠 것 같은데 뭐라고 써야할지 잘 모르겠어요.</p>
      </TitleSection>

      <WritingPageBottom onSubmit={handleSubmit(onSubmit)}>
          <WritingForm>
            <FormLabel>구분</FormLabel>
            <WritingFormCategorySection>
              {categories.map((category) => (
                <WritingFormCCategoryButton
                    key={category}
                    onClick={(e) => selectCategory(e, category)}
                    selected={selectedCategory === category} // 선택된 카테고리 스타일 적용
                >
                    {category}
                </WritingFormCCategoryButton>
              ))}
            </WritingFormCategorySection>
            {categoryError && <p style={{ color: "red" }}>{categoryError}</p>}
          </WritingForm>

          <WritingForm>
            <FormLabel>제목</FormLabel>
            <FormInput
              placeholder="제목을 입력해주세요"
              {...register("title")}
              required
            />
            {errors.title && <p>{errors.title.message}</p>}
          </WritingForm>

          <WritingForm>
            <FormLabel>내용</FormLabel>
            <FormTextArea
              placeholder="내용을 입력해주세요"
              {...register("content", { required: "내용을 입력해주세요" })}
            />
            {errors.content && <p>{errors.content.message}</p>}
          </WritingForm>

          <ButtonContainer>
            <Link href="/main">
              <CancelButton>취소하기</CancelButton>
            </Link>
            <SubmitButton type="submit">글쓰기</SubmitButton>
          </ButtonContainer>
      </WritingPageBottom>
    </MainContainer>
  );
}
