import { defaultTransition } from "@/app/css";
import styled from "styled-components";

export const LoginPageBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f7fa; /* 배경 색상 */
`;

export const LoginContainer = styled.div`
  display: flex;
  gap: 60px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 840px;
  height: 400px;
  align-items: center;
`;

export const LoginLeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const LoginRightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const LoginDivider = styled.div`
  width: 1px;
  height: 80%;
  background-color: #e0e0e0; /* 중간 구분선 색상 */
`;

export const LoginTitleWrap = styled.div`
  display: flex;
  gap: 8px;
  align-items: baseline;
  margin-bottom: 8px;
`;

export const LoginTitle = styled.div`
  font-size: 62px;
  font-weight: bold;
  color: black;
`;

export const LoginPoint = styled.div`
  background-color: #5f72ff;
  width: 8px;
  height: 8px;
`;

export const LoginDescription = styled.div`
  font-size: 14px;
  color: #808080; /* 회색 설명 */
  text-align: center;
`;

export const LoginInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-bottom: 20px;
`;

export const LoginInput = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  margin-bottom: 10px;
  outline: none;

  &:focus {
    border-color: #5f72ff;
  }
`;

export const LoginButtonContainer = styled.div`
  width: 80%;
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #5f72ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #4e61e8;
  }
  ${defaultTransition}
`;

export const LoginLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 12px;
  color: #808080;
`;

export const LoginLink = styled.div`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const LoginLinkDivider = styled.div`
  margin: 0 10px;
  color: #d1d1d1;
`;
