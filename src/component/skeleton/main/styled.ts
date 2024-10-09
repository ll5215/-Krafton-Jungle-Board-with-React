import { defaultAnimation } from "@/app/css";
import styled from "styled-components";


export const SkeletonMainWrap = styled.div`
    border: 1px solid #ddd;
    padding: 32px 24px;
    background-color: white;
    width: 300px;
    height: 250px;
    cursor: pointer;
`;

export const SkeletonMainTop = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SkeletonMainTitle = styled.div`
    width: 250px;
    height: 22px;
    ${defaultAnimation};
    margin-bottom: 36px;
`;

export const SkeletonMainContent = styled.div`
    width: 250px;
    height: 60px;
    ${defaultAnimation};
    margin-bottom: 16px;
`;

export const SkeletonMainBottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SkeletonMainCategory = styled.div`
    ${defaultAnimation};
    width: 60px;
    height: 20px;
    margin-bottom: 8px;
`;

export const SkeletonMainDate = styled.div`
    ${defaultAnimation};
    width: 90px;
    height: 20px;
    margin-bottom: 8px;
`;

export const SkeletonMainCommentCount = styled.div`
    ${defaultAnimation};
    width: 90px;
    height: 20px;
`;

export const SkeletonMainWriter = styled.div`
    ${defaultAnimation};
    width: 50px;
    height: 20px;
`;