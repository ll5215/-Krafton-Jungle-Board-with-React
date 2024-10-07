import { Header, Logo, Nav, NavButton } from "@/app/template/main/styled";
import { useRouter } from "next/navigation";

export default function HeaderComponent() {
    const router = useRouter();

    const handleLogout = async () => {
        // 서버에 로그아웃 요청 보내기
        const response = await fetch("/api/logout", {
            method: "POST",
            credentials: "include", // 쿠키를 포함시킴
        });

        if (response.ok) {
            // 로그아웃 성공 시 로그인 페이지로 리다이렉트
            router.push("/");
        } else {
            alert("로그아웃에 실패했습니다.");
        }
    };

    
    return (
        <Header>
        <Logo>LOGO</Logo>
        <Nav>
            <NavButton>MY PAGE</NavButton>
            <NavButton onClick={handleLogout}>LOGOUT</NavButton>
        </Nav>
    </Header>
    )
}