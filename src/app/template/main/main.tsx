import { useEffect, useState } from 'react';
import Pagination from "@/component/pagination";
import PostCard from "@/component/postcard";
import { MainContainer, TitleSection, CategorySection, CategoryButton, PostSection, MainBottom } from "./styled";
import WritingCard from "@/component/postcard/writing-card";
import HeaderComponent from "@/component/header";
import useAuth from "@/hooks/useAuth";
import BackgroundImageComponent from '@/component/background';

interface Post {
  id: number;
  title: string;
  content: string;
  category: string;
}

export default function MainTemplate() {
  useAuth();
  
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1); // 현재 페이지
  const postsPerPage = 5; // 한 페이지에 표시할 게시물 수

  // 클라이언트에서 데이터 불러오기
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/posts");  // API 엔드포인트 수정 필요
      const data = await response.json();
      setPosts(data);
    };
    
    fetchPosts();
  }, []);

  // 페이지당 표시할 게시물 계산
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  // 페이지 변경 함수
  const paginate = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <MainContainer>
      <HeaderComponent />
    <BackgroundImageComponent />
      <TitleSection>
        <h1>게시판 둘러보기</h1>
        <p>여기도 뭔가 글씨를 쓰면 이쁠것 같은데 뭐라고 써야할지 잘 <br></br>모르겠어요 그래서 아무말이나 일단 적는중입니다</p>
      </TitleSection>
      <MainBottom>
        <CategorySection>
          <CategoryButton>전체</CategoryButton>
          <CategoryButton>일상</CategoryButton>
          <CategoryButton>취미</CategoryButton>
          <CategoryButton>공부</CategoryButton>
          <CategoryButton>문화</CategoryButton>
          <CategoryButton>여행</CategoryButton>
          <CategoryButton>기타</CategoryButton>
        </CategorySection>
        <PostSection>
          {currentPosts.length > 0 ? (
            currentPosts.map((post) => (
              <PostCard
                key={post.id}
                category={post.category}
                title={post.title}
                content={post.content}
                commentCount={0}
              />
            ))
          ) : (
            <p>게시물이 없습니다.</p>
          )}
          <WritingCard />
        </PostSection>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          paginate={paginate}
        />
      </MainBottom>
    </MainContainer>
  );
}
