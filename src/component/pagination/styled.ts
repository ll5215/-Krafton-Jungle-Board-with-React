import { defaultTransition } from "@/app/css";
import styled from "styled-components";

export const PaginationContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 36px;
`;

export const PageButton = styled.button`
    color: #696E82;
    font-size: 14px;
    background-color: transparent;
    border: 1px solid #D1D1D1;
    padding: 8px 16px;
    cursor: pointer;
    &:hover{
        background-color: #e2e2e2;
    }
    ${defaultTransition}
`;

export const PageNumberWrap = styled.div`
    display: flex;
    gap: 8px;
`;

export const PageNumber = styled.button<{ isActive: boolean }>`
  padding: 8px 12px;
  margin: 0 4px;
  font-size: 14px;
  background-color: ${({ isActive }) => (isActive ? "#696E82" : "#fff")};
  color: ${({ isActive }) => (isActive ? "#fff" : "#696E82")};
  border: 1px solid #D1D1D1;
  cursor: pointer;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? "#9DA2B8" : "#e2e2e2")};
    ${defaultTransition}
  }
`;