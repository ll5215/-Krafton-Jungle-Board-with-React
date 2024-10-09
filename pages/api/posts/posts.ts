// /pages/api/posts.ts
import { NextApiRequest, NextApiResponse } from "next";
import { getCookie } from "cookies-next"; 
import { prisma } from "@/app/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const posts = await prisma.post.findMany({
        include: {
          user: true,  // 작성자 정보도 포함
          _count: {
            select: { comments: true },  // 댓글 수를 가져옴
          },
        },
      });

      return res.status(200).json(posts);
    } catch (error) {
      console.error("서버 오류:", error);  // 오류 로그 출력
      return res.status(500).json({ error: '서버 오류입니다.' });
    }
  }

  if (req.method === 'POST') {
    const { title, content, category } = req.body;

    const userId = getCookie("user", { req, res });
    if (!userId) {
      return res.status(401).json({ error: "로그인 필요" });
    }

    if (!title || !content || !category) {
      return res.status(400).json({ error: "제목, 내용, 카테고리는 필수 입력 항목입니다." });
    }

    try {
      const post = await prisma.post.create({
        data: {
          title,
          content,
          category,
          userId: Number(userId),
        },
      });

      return res.status(201).json(post);
    } catch (error) {
      console.error("게시글 저장 중 오류:", error);  // 오류 로그 출력
      return res.status(500).json({ error: "서버 오류" });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
