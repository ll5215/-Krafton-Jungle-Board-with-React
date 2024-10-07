import Image from "next/image";
import { WritingForm, FormLabel, WritingFormCategorySection, FormInput, FormTextArea, ButtonContainer, CancelButton, SubmitButton, WritingFormCCategoryButton, WritingPageBottom } from "./styled";
import { MainContainer, BackgroundImageContainer, TitleSection } from "../../main/styled";
import Link from "next/link";
import HeaderComponent from "@/component/header";
import useAuth from "@/hooks/useAuth";


export default function BoardWritingTemplate() {

    useAuth();

    return (
        <MainContainer>
            <HeaderComponent />
            <BackgroundImageContainer>
                <Image
                    src="/images/main_image.png" 
                    alt="Main background image"
                    layout="fill"
                    objectFit="cover"
                />
            </BackgroundImageContainer>

            <TitleSection>
                <h1>게시판 작성하기</h1>
                <p>여기도 뭔가 글씨를 쓰면 이쁠것 같은데 뭐라고 써야할지 잘 <br></br>모르겠어요 그래서 아무말이나 일단 적는중입니다</p>
            </TitleSection>
            <WritingPageBottom>
                <WritingForm>
                    <FormLabel>구분</FormLabel>
                    <WritingFormCategorySection>
                        <WritingFormCCategoryButton>종류 1</WritingFormCCategoryButton>
                        <WritingFormCCategoryButton>종류 2</WritingFormCCategoryButton>
                        <WritingFormCCategoryButton>종류 3</WritingFormCCategoryButton>
                        <WritingFormCCategoryButton>종류 4</WritingFormCCategoryButton>
                        <WritingFormCCategoryButton>종류 5</WritingFormCCategoryButton>
                        <WritingFormCCategoryButton>종류 6</WritingFormCCategoryButton>
                    </WritingFormCategorySection>
                </WritingForm>
                <WritingForm>
                    <FormLabel>제목</FormLabel>
                    <FormInput placeholder="제목을 입력해주세요"></FormInput>
                </WritingForm>
                <WritingForm>
                    <FormLabel>내용</FormLabel>
                    <FormTextArea placeholder="내용을 입력해주세요" />
                </WritingForm>
                <ButtonContainer>
                    <Link href="/main">
                        <CancelButton>취소하기</CancelButton>
                    </Link>
                    <SubmitButton>글쓰기</SubmitButton>
                </ButtonContainer>

            </WritingPageBottom>
        </MainContainer>
    );
}