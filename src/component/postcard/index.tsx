// component/postcard.tsx

import { Card, CategoryTag, Title, Description, CommentCount } from "./styled";

interface PostCardProps {
    id: number;
    category: string;
    title: string;
    content: string;
    commentCount: number;
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
  