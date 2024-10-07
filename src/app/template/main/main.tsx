import Pagination from "@/component/pagination";
import PostCard from "@/component/postcard";
import Image from "next/image";
import { MainContainer, TitleSection, CategorySection, CategoryButton, PostSection, BackgroundImageContainer, MainBottom } from "./styled";
import WritingCard from "@/component/postcard/writing-card";
import HeaderComponent from "@/component/header";
import useAuth from "@/hooks/useAuth";


export default function MainTemplate() {

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
                <h1>게시판 둘러보기</h1>
                <p>여기도 뭔가 글씨를 쓰면 이쁠것 같은데 뭐라고 써야할지 잘 <br></br>모르겠어요 그래서 아무말이나 일단 적는중입니다</p>
            </TitleSection>
            <MainBottom>
                <CategorySection>
                    <CategoryButton>전체</CategoryButton>
                    <CategoryButton>종류 1</CategoryButton>
                    <CategoryButton>종류 2</CategoryButton>
                    <CategoryButton>종류 3</CategoryButton>
                    <CategoryButton>종류 4</CategoryButton>
                    <CategoryButton>종류 5</CategoryButton>
                </CategorySection>
                <PostSection>
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <WritingCard />
                </PostSection>
                <Pagination />
            </MainBottom>
        </MainContainer>
    );
}