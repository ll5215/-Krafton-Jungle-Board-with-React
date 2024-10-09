"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getCookie } from "cookies-next"; // 쿠키에서 유저 정보를 가져오기 위함
import BackgroundImageComponent from "@/component/background";
import HeaderComponent from "@/component/header";
import { MainContainer, TitleSection } from "../../main/styled";
import {
  BoardDetailComment,
  BoardDetailCommentDate,
  BoardDetailCommentText,
  BoardDetailCommentTop,
  BoardDetailCommentWriter,
  BoardDetailContent,
  BoardDetailContentBottom,
  BoardDetailContentCategory,
  BoardDetailContentCommentCount,
  BoardDetailContentDate,
  BoardDetailContentText,
  BoardDetailContentTitle,
  BoardDetailContentTop,
  BoardDetailContentTopWrap,
  BoardDetailContentWriter,
  BoardDetailPostComment,
  BoardDetailPostCommentButton,
  BoardDetailPostCommentButtonText,
  BoardDetailPostCommentForm,
  BoardDetailPostCommentInput
} from "./styled";
import { SubmitHandler, useForm } from "react-hook-form";
import { formatDate } from "@/app/lib/utils/formatDate";
import useAuth from "@/hooks/useAuth";

interface Params {
  id: number;
}

interface Post {
  id: number;
  category: string;
  title: string;
  content: string;
  createdAt: string;
  user: {
    id: number;
    username: string;
  }
  _count: {
    comments: number;
  }
}

interface Comment {
  id: number;
  content: string;
  createdAt: string;
  user: {
    username: string;
  };
}

interface CommentForm {
  content: string;
}

export default function BoardDetailTemplate() {
  const params = useParams() as unknown as Params;
  const id = params.id;
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, reset } = useForm<CommentForm>();

  useAuth();

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const response = await fetch(`/api/posts/id/${id}`);
          if (!response.ok) {
            throw new Error(`Error fetching post: ${response.status}`);
          }
          const data = await response.json();
          setPost(data);
        } catch (error) {
          console.error("게시글 조회 중 오류:", error);
          setError("게시글을 불러오는 중 오류가 발생했습니다.");
        } finally {
          setIsLoading(false); // 로딩 완료
        }
      };

      fetchPost();

      // 댓글 가져오기
      const fetchComments = async () => {
        try {
          const response = await fetch(`/api/posts/id/comments?id=${id}`);
          const data = await response.json();
          setComments(data); // 댓글 데이터 설정
        } catch (error) {
          console.error("댓글 조회 오류:", error);
        }
      };

      fetchComments();
    }
  }, [id]);

  const onSubmit: SubmitHandler<CommentForm> = async (data) => {
    const userId = getCookie("user"); // 쿠키에서 userId 가져오기
    if (!userId) {
      console.error("로그인이 필요합니다.");
      return;
    }

    try {
      const response = await fetch("/api/post-comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: data.content,
          postId: id, // 게시글 ID
          userId: Number(userId), // 쿠키에서 가져온 사용자 ID
        }),
      });

      if (response.ok) {
        const newComment = await response.json();
        setComments((prevComments) => [...prevComments, newComment]); // 새로운 댓글 추가
        reset(); // 입력 폼 초기화
      } else {
        console.error("댓글 등록 실패");
      }
    } catch (error) {
      console.error("댓글 등록 오류:", error);
    }
  };

  return (
    <MainContainer>
      <HeaderComponent />
      <BackgroundImageComponent />
      <TitleSection>
        <h1>게시글 구경하기</h1>
        <p>여기도 뭔가 글씨를 쓰면 이쁠 것 같은데 뭐라고 써야할지 잘 모르겠어요.</p>
      </TitleSection>
      
      {isLoading ? (
        <div>로딩 중...</div> // 로딩 중일 때 보여줄 내용
      ) : error ? (
        <div>{error}</div> // 오류 발생 시 보여줄 내용
      ) : post ? (
        <>
          <BoardDetailContent>
            <BoardDetailContentTop>
              <BoardDetailContentTopWrap>
                <BoardDetailContentCategory>{post.category}</BoardDetailContentCategory>
                <BoardDetailContentDate>{formatDate(post.createdAt)}</BoardDetailContentDate>
              </BoardDetailContentTopWrap>
              <BoardDetailContentTitle>{post.title}</BoardDetailContentTitle>
            </BoardDetailContentTop>
            <BoardDetailContentText>{post.content}</BoardDetailContentText>
            <BoardDetailContentBottom>
              <BoardDetailContentCommentCount>{post._count.comments} comments</BoardDetailContentCommentCount>
              <BoardDetailContentWriter>{post.user.username}</BoardDetailContentWriter>
            </BoardDetailContentBottom>
          </BoardDetailContent>

          <BoardDetailPostComment>
            <BoardDetailPostCommentForm onSubmit={handleSubmit(onSubmit)}>
              <BoardDetailPostCommentInput
                {...register("content", { required: true })}
                placeholder="댓글을 입력하세요"
              />
              <BoardDetailPostCommentButton type="submit">
                <BoardDetailPostCommentButtonText>댓글</BoardDetailPostCommentButtonText>
                <BoardDetailPostCommentButtonText>달기</BoardDetailPostCommentButtonText>
              </BoardDetailPostCommentButton>
            </BoardDetailPostCommentForm>
          </BoardDetailPostComment>

          {comments.map((comment) => (
            <BoardDetailComment key={comment.id}>
              <BoardDetailCommentTop>
                <BoardDetailCommentWriter>{comment.user ? comment.user.username : "익명"}</BoardDetailCommentWriter>
                <BoardDetailCommentDate>{formatDate(comment.createdAt)}</BoardDetailCommentDate>
              </BoardDetailCommentTop>
              <BoardDetailCommentText>{comment.content}</BoardDetailCommentText>
            </BoardDetailComment>
          ))}
        </>
      ) : (
        <div>게시글을 찾을 수 없습니다.</div> // 게시글이 없는 경우
      )}
    </MainContainer>
  );
}

