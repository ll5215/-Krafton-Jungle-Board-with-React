import { defaultTransition } from "@/app/css";
import styled from "styled-components";

export const WritingPageBottom = styled.form`
    background-color: white;
    padding: 40px 60px;
    margin-top: 56px;
    display: flex;
    flex-direction: column;
    gap: 36px;
`;

export const WritingForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

`;

export const WritingFormCategorySection = styled.div`
    display: flex;
    gap: 16px;

`;

export const WritingFormCCategoryButton = styled.button<{ selected: boolean }>`
  padding: 8px 18px;
  color: ${(props) => (props.selected ? "#fff" : "#000")};
  background-color: ${(props) => (props.selected ? "#696E82" : "#fff")};
  outline: none;
  border: 1px solid #A8B1CE;
  border-radius: 4px;
  font-weight: 800;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.selected ? "#9DA2B8" : "#e2e2e2")};
    color: ${(props) => (props.selected ? "#fff" : "#000")};
  }
`;


export const FormLabel = styled.div`
    font-size: 24px;
    font-weight: 800;
    color: #696E82;

`;

export const FormInput = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #5f72ff;
  }
`;

export const FormTextArea = styled.textarea`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  outline: none;
  height: 400px;
  width: 800px;

  &:focus {
    border-color: #5f72ff;
  }
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 16px;
    justify-content: end;
`;

export const CancelButton = styled.button`
    padding: 10px 18px;
    color: #696E82;
    background-color: white;
    outline: none;
    border: 1px solid #A8B1CE;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;

  &:hover {
    background-color: #e2e2e2;
    ${defaultTransition}
  }
`;

export const SubmitButton = styled.button`
    padding: 10px 18px;
    color: white;
    background-color: #5A81FA;
    outline: none;
    border: 1px solid #A8B1CE;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;

  &:hover {
    background-color: #4e61e8;
    ${defaultTransition}
  }
`;
