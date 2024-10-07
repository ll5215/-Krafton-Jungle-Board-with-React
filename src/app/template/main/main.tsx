import Pagination from "@/component/pagination";
import PostCard from "@/component/postcard";
import Image from "next/image";
import { MainContainer, Header, Logo, Nav, NavButton, TitleSection, CategorySection, CategoryButton, PostSection, BackgroundImageContainer, MainBottom } from "./styled";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function MainTemplate() {
    const router = useRouter();
    
    useEffect(() => {
        const checkAuth = async () => {
          const response = await fetch('/api/check-auth', {
            method: 'GET',
            credentials: 'include', // 쿠키를 포함시킴
          });
    
          if (!response.ok) {
            // 로그인이 안 되어 있으면 로그인 페이지로 리다이렉트
            router.push('/');
          }
        };
    
        checkAuth();
      }, [router]);

    const handleLogout = async () => {
        // 서버에 로그아웃 요청 보내기
        const response = await fetch("/api/logout", {
            method: "POST",
            credentials: "include", // 쿠키를 포함시킴
        });

        if (response.ok) {
            // 로그아웃 성공 시 로그인 페이지로 리다이렉트
            router.push("/");
        } else {
            alert("로그아웃에 실패했습니다.");
        }
    };

    return (
        <MainContainer>
            <Header>
                <Logo>LOGO</Logo>
                <Nav>
                    <NavButton>MY PAGE</NavButton>
                    <NavButton onClick={handleLogout}>LOGOUT</NavButton>
                </Nav>
            </Header>

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
                    <PostCard />
                </PostSection>
                <Pagination />
            </MainBottom>
        </MainContainer>
    );
}