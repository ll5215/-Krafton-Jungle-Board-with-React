import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      // 게시물과 해당 게시물의 댓글 수를 함께 조회
      const post = await prisma.post.findUnique({
        where: { id: Number(id) },
        include: {
          user: true,
          _count: {
            select: { comments: true },  // 댓글 수를 가져옴
          },
        },
      });

      if (!post) {
        return res.status(404).json({ message: "게시글을 찾을 수 없습니다." });
      }

      return res.status(200).json(post);
    } catch (error) {
      console.error("서버 오류", error);
      return res.status(500).json({ message: "서버 오류입니다." });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
