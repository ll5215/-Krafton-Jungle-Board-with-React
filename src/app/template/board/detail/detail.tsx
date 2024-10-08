import BackgroundImageComponent from "@/component/background";
import HeaderComponent from "@/component/header";
import { MainContainer, TitleSection } from "../../main/styled";

export default function BoardDetailTemplate() {

    return (
        <MainContainer>
            <HeaderComponent />
            <BackgroundImageComponent />
    
            <TitleSection>
            <h1>게시글 작성하기</h1>
            <p>여기도 뭔가 글씨를 쓰면 이쁠 것 같은데 뭐라고 써야할지 잘 모르겠어요.</p>
            </TitleSection>
        </MainContainer>
    )
}