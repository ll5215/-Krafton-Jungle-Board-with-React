// Pagination.tsx

import { PaginationContainer, PageButton, PageNumber, PageNumberWrap } from "./styled";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}

export default function Pagination({ totalPages, currentPage, paginate }: PaginationProps) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <PaginationContainer>
      <PageButton
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        이전
      </PageButton>
      <PageNumberWrap>
        {pageNumbers.map((number) => (
          <PageNumber
            key={number}
            onClick={() => paginate(number)}
            isActive={number === currentPage}
          >
            {number}
          </PageNumber>
        ))}
      </PageNumberWrap>
      <PageButton
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        다음
      </PageButton>
    </PaginationContainer>
  );
}
