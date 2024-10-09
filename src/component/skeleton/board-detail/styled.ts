import { defaultAnimation } from "@/app/css";
import styled from "styled-components";

export const SkeletonBoardDetailWrap = styled.div`
    background-color: white;
    padding: 40px 60px;
    margin-top: 56px;
    display: flex;
    flex-direction: column;
    width: 1100px;
`;

export const SkeletonBoardDetailTop = styled.div` 
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
`;

export const SkeletonBoardDetailCategory = styled.div`
    width: 250px;
    height: 24px;
    ${defaultAnimation};
`;

export const SkeletonBoardDetailDate = styled.div`
    width: 250px;
    height: 22px;
    ${defaultAnimation};
`;

export const SkeletonBoardDetailTitle = styled.div`
    width: 980px;
    height: 29px;
    ${defaultAnimation};
    margin-bottom: 65px;
`;

export const SkeletonBoardDetailContent = styled.div`
    width: 980px;
    height: 400px;
    ${defaultAnimation};
    margin-bottom: 36px;
`;

export const SkeletonBoardDetailBottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SkeletonBoardDetailCommentCount = styled.div`
    width: 200px;
    height: 20px;
    ${defaultAnimation};
    margin-bottom: 36px;
`;

export const SkeletonBoardDetailWriter = styled.div`
    width: 200px;
    height: 20px;
    ${defaultAnimation};
    margin-bottom: 36px;
`;