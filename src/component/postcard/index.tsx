import { useRouter } from "next/navigation";
import { Card, CategoryTag, Title, Description, CommentCount, CardBottom, CardDate, CardTop, CardWriter } from "./styled";
import { formatDateWithoutTime } from "@/app/lib/utils/formatDate";

interface PostCardProps {
    id: number;
    category: string;
    title: string;
    content: string;
    commentCount: number;
    writer: string;
    createdAt: string;
}

export default function PostCard({ id, category, title, content, commentCount, writer, createdAt }: PostCardProps) {
  const router = useRouter();

  const goToDetail = () => {
    if (id) {
      router.push(`/board/${id}`);
    } else {
      console.error("ID가 없습니다.");
    }
  };

  return (
    <Card onClick={goToDetail}>
      <CardTop>
        <CategoryTag>{category}</CategoryTag>
        <CardDate>{formatDateWithoutTime(createdAt)}</CardDate>
      </CardTop>
      <Title>{title}</Title>
      <Description>{content}</Description>
      <CardBottom>
        <CommentCount>{commentCount} Comments</CommentCount>
        <CardWriter>{writer}</CardWriter>
      </CardBottom>
    </Card>
  );
}
