// pages/api/posts/[id]/comments.ts
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const { id } = req.query;

    try {
      const comments = await prisma.comment.findMany({
        where: { postId: Number(id) },
        include: {
          user: true, // 댓글 작성자의 정보도 포함
        },
      });

      res.status(200).json(comments);
    } catch (error) {
        console.error("댓글 불러오기 오류", error);
      res.status(500).json({ error: "댓글을 불러오는 중 오류가 발생했습니다." });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
