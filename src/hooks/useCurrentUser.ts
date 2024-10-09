import { useEffect, useState } from "react";

interface User {
    id: number;
    username: string;
}

const useCurrentUser = () => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try{
                const response = await fetch("/api/user", {
                    method: "GET",
                    credentials: "include",
                });
                if (!response.ok) {
                    throw new Error("사용자 정보를 가져오는 데 실패했습니다");
                }

                const data = await response.json();
                setCurrentUser(data);
            } catch (error) {
                console.error("알 수 없는 오류 발생", error)
                setError(error instanceof Error ? error.message : "알 수 없는 오류가 발생했습니다")
            } finally {
                setLoading(false);
            }
        };
        fetchCurrentUser();
    }, []);

    return { currentUser, loading, error};
};

export default useCurrentUser;