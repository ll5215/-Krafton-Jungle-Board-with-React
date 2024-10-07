import { defaultTransition } from "@/app/css";
import styled from "styled-components";

export const MainContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin-bottom: 80px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const Logo = styled.h1`
    color: white;
    font-size: 24px;
`;

export const Nav = styled.div`
    display: flex;
    gap: 20px;
`;

export const NavButton = styled.button`
    background-color: white;
    color: #696E82;
    font-size: 13px;
    font-weight: 600;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px 20px;
    cursor: pointer;

    &:hover{
        background-color: #e2e2e2;
    }
    ${defaultTransition}
`;

export const BackgroundImageContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;
    z-index: -1;
`;

export const TitleSection = styled.div`
    text-align: center;
    margin-top: 40px;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 12px;

    h1 {
        font-size: 36px;
    }

    p {
        font-size: 14px;
    }
`;

export const MainBottom =  styled.div`
    background-color: white;
    padding: 10px 60px 30px;
    margin-top: 56px;
`;

export const CategorySection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 40px;
    margin-bottom: 30px;
`;

export const CategoryButton = styled.button`
    color: #C2C2C2;
    font-weight: 500;
    font-size: 16px;
    background-color: transparent;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
`;

export const PostSection = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
`;