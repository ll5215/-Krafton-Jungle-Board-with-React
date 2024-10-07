import { PaginationContainer, PageButton, PageNumber, PageNumberWrap } from "./styled";

export default function Pagination() {
    return (
        <PaginationContainer>
            <PageButton>이전</PageButton>
            <PageNumberWrap>
                <PageNumber>1</PageNumber>
                <PageNumber>2</PageNumber>
            </PageNumberWrap>
            <PageButton>다음</PageButton>
        </PaginationContainer>
    );
}