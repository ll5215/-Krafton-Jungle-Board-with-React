import { Card, CategoryTag, Title, Description, CommentCount } from "./styled";

export default function PostCard() {
    return (
        <Card>
            <CategoryTag>무슨 종류인가</CategoryTag>
            <Title>이건 이 게시물의 제목 이건 첫줄이고 이건 둘쨰줄입니다.</Title>
            <Description>
            이건 이 게시물의 내용이다. 내용도 마찬가지로 첫줄과 둘쨰줄이 있다. 필요하다면 셋째줄까지도 있다. 하지만 여기가 끝이여서.
            </Description>
            <CommentCount>3 Comments</CommentCount>
        </Card>
    );
}
