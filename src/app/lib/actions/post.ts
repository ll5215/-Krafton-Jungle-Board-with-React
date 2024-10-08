export const createPost = async (title: string, content: string, category: string) => {
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
          category,
        }),
      });
  
      if (response.ok) {
        return { success: true, message: "글쓰기 성공!" };
      } else {
        const errorData = await response.json();
        return { success: false, message: errorData.error || "글쓰기 실패!" };
      }
    } catch (error) {
      console.error("서버 오류:", error);
      return { success: false, message: "서버 오류!" };
    }
  };
  