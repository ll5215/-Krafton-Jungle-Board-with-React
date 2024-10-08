import styled from "styled-components";

export const WritingCardWrap = styled.div`
    border: 1px solid #ddd;
    padding: 56px 24px;
    background-color: white;
    width: 300px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

export const WritingButton = styled.button`
    width: 40px;
    height: 40px;
    background-color: white;
    outline: none;
    border: 1px solid #2B308B;
    font-size: 24px;
    cursor: pointer;
    margin-top: 8px;

    &:hover{
        background-color: #2B308B;
        color: white;
    }
`;

export const WritingCardTitle = styled.h3`
    font-size: 18px;
    color: #2B308B;
`;

export const WritingCardDescription = styled.p`
    color: #666;
    font-size: 14px;
    line-height: 20px;
`;