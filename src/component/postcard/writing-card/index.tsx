import { WritingButton, WritingCardDescription, WritingCardTitle, WritingCardWrap } from "./styled";
import Link from "next/link";


export default function WritingCard() {

    return (
        <WritingCardWrap>
            <WritingCardTitle>무슨 글을 적고 싶으신가요?</WritingCardTitle>
            <WritingCardDescription>오늘의 이야기를 들려주새요!</WritingCardDescription>
            <Link href="/board/writing">
              <WritingButton>+</WritingButton>
            </Link>
        </WritingCardWrap>
    );
}
