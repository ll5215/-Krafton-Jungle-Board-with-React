import styled from "styled-components";

export const Card = styled.div`
    border: 1px solid #ddd;
    padding: 32px 24px;
    background-color: white;
    width: 300px;
    height: 250px;
`;

export const CategoryTag = styled.div`
    color: #0070f3;
    font-weight: bold;
`;

export const Title = styled.h3`
    font-size: 18px;
    margin-top: 8px;
    min-height: 44px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

export const Description = styled.p`
    color: #666;
    font-size: 14px;
    line-height: 20px;
    margin-top: 16px;
    min-height: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`;

export const CommentCount = styled.div`
    color: #999;
    font-size: 12px;
    margin-top: 16px;
`;