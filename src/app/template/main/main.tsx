import { useEffect, useState } from 'react';
import Pagination from "@/component/pagination";
import PostCard from "@/component/postcard";
import { MainContainer, TitleSection, CategorySection, CategoryButton, PostSection, MainBottom } from "./styled";
import WritingCard from "@/component/postcard/writing-card";
import HeaderComponent from "@/component/header";
import useAuth from "@/hooks/useAuth";
import BackgroundImageComponent from '@/component/background';
import SkeletonMain from '@/component/skeleton/main';
import EmptyMain from '@/component/empty';

interface Post {
  id: number;
  title: string;
  content: string;
  category: string;
  createdAt: string;
  user: {
    id: number;
    username: string;
  }
  _count: {
    comments: number; 
  } 
}

export default function MainTemplate() {
  useAuth();
  
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1); // 현재 페이지
  const [selectedCategory, setSelectedCategory] = useState<string>("전체");
  const [loading, setLoading] = useState(true); 
  const postsPerPage = 5; // 한 페이지에 표시할 게시물 수

  // 클라이언트에서 데이터 불러오기
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/posts/posts");  // API 엔드포인트 수정 필요
      const data = await response.json();
      setPosts(data);
      setLoading(false); // 로딩 완료 시 상태 변경
    };
    
    fetchPosts();
  }, []);

  const filteredPosts = selectedCategory === "전체"
  ? posts
  : posts.filter(post => post.category === selectedCategory);

  // 페이지당 표시할 게시물 계산
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // 페이지 변경 함수
  const paginate = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // 카테고리 변경 함수
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  }

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
            {["전체", "일상", "취미", "공부","문화", "여행", "기타"].map((category) => (
              <CategoryButton
                key={category}
                onClick={() => handleCategoryChange(category)}
                selected={selectedCategory === category}
              >
                {category}
              </CategoryButton>
            ))}
    </CategorySection>
        <PostSection>
          {loading ? (
            <SkeletonMain />
          ) : (
            currentPosts.length > 0 ? (
              currentPosts.map((post) => (
                <PostCard
                  key={post.id}
                  id={post.id}
                  category={post.category}
                  title={post.title}
                  content={post.content}
                  commentCount={post._count.comments}
                  writer={post.user.username}
                  createdAt={post.createdAt}
                />
              ))
            ) : (
              <EmptyMain />
            )
          )}
          {!loading && <WritingCard />}
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
