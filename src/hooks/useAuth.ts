// src/hooks/useAuth.ts
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch("/api/check-auth", {
        method: "GET",
        credentials: "include", // 쿠키 포함
      });

      if (!response.ok) {
        // 인증 실패 시 로그인 페이지로 리다이렉트
        router.push("/");
      }
    };

    checkAuth();
  }, [router]);
};

export default useAuth;
