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

export const PageNumber = styled.button`
    color: #696E82;
    font-size: 14px;
    background-color: transparent;
    border: 1px solid #D1D1D1;
    padding: 8px 12px;
    cursor: pointer;
    &:hover{
        background-color: #e2e2e2;
    }
    ${defaultTransition}
`;