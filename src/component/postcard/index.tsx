// component/postcard.tsx

import { Card, CategoryTag, Title, Description, CommentCount } from "./styled";

interface PostCardProps {
    category: string;
    title: string;
    content: string;
    commentCount: number; // 댓글 수는 지금은 0으로 설정
  }
  
  export default function PostCard({ category, title, content, commentCount }: PostCardProps) {
    return (
      <Card>
        <CategoryTag>{category}</CategoryTag>
        <Title>{title}</Title>
        <Description>{content}</Description>
        <CommentCount>{commentCount} Comments</CommentCount>
      </Card>
    );
  }
  