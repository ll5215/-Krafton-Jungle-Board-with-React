import styled from "styled-components";

export const SignupContainer = styled.div`
  display: flex;
  gap: 60px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 840px;
  height: 500px;
  align-items: center;
`;


export const SignupTitle = styled.div`
  font-size: 50px;
  font-weight: bold;
  color: black;
`;

export const SignupRightSection = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

export const SignupInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 80%;
`;

export const SignupInputLabel = styled.label`
    font-size: 14px;
    font-weight: 600;
`;

export const SignupInput = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #5f72ff;
  }
`;