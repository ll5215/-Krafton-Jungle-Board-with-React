import { defaultTransition } from "@/app/css";
import styled from "styled-components";

export const BoardDetailContent = styled.div`
    background-color: white;
    padding: 40px 60px;
    margin-top: 56px;
    display: flex;
    flex-direction: column;
    gap: 36px;
    width: 1100px;
`;

export const BoardDetailContentTop = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

`;

export const BoardDetailContentTopWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const BoardDetailContentDate = styled.div`
    color: #A8B1CE;
`;

export const BoardDetailContentCategory = styled.div`
    font-size: 20px;
    font-weight: 700;
    color: #5A81FA;
`;

export const BoardDetailContentTitle = styled.div`
    font-size: 24px;
    font-weight: 700;
    color: #444444;
`;

export const BoardDetailContentText = styled.div`
    font-size: 18px;
    color: #696E82;
    line-height: 36px;
`;

export const BoardDetailContentBottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const BoardDetailContentCommentCount = styled.div`
    color: #A8B1CE;
`;

export const BoardDetailContentBottomRight = styled.div`
    display: flex;
    gap: 24px;
`;

export const BoardDetailContentDelete = styled.div`
    color: #D93F39;
    font-weight: 700;
    cursor: pointer;
`;

export const BoardDetailContentWriter = styled.div`
    color: #A8B1CE;
`;

export const BoardDetailPostCommentForm = styled.form`
    display: flex;
    gap: 24px;
`;

export const BoardDetailPostCommentInput = styled.input`
    flex: 1;
    padding: 20px;
    font-size: 16px;
    border: 1px solid #A8B1CE;

    &::placeholder{
        color: #A8B1CE;
    }
`;

export const BoardDetailPostCommentButton = styled.button`
    background-color: #5A81FA;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 14px;
    font-weight: 600;
    line-height: 20px;
    cursor: pointer;

    &:hover {
    background-color: #4e61e8;
    ${defaultTransition}
    }
`;

export const BoardDetailPostCommentButtonText = styled.div`

`;

export const BoardDetailCommentTop = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const BoardDetailCommentWriter = styled.div`
    color: #A8B1CE;
    font-size: 14px;
`;

export const BoardDetailCommentText = styled.div`
    color: #444444;
    line-height: 24px;
`;

export const BoardDetailCommentBottomRight = styled.div`
    display: flex;
    gap: 24px;
`;

export const BoardDetailCommentDelete = styled.div`
    color: #D93F39;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
`;

export const BoardDetailCommentDate = styled.div`
    color: #A8B1CE;
    font-size: 14px;
`;

export const BoardDetailPostComment = styled.div`
    background-color: white;
    padding: 40px 60px;
    margin-top: 40px;
    margin-bottom: 24px;
    width: 1100px;
`;

export const BoardDetailComment = styled.div`
    background-color: white;
    padding: 24px 60px;
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 1100px;
`