import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { content, postId, userId } = req.body;

    try {
      const comment = await prisma.comment.create({
        data: {
          content,
          postId: Number(postId),
          userId: Number(userId),
        },
        include: {
          user: true,  // 댓글과 함께 작성자의 정보도 포함
        },
      });

      res.status(201).json(comment);
    } catch (error) {
      console.error("댓글 작성 오류", error);
      res.status(500).json({ error: "댓글 작성 중 오류가 발생했습니다." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
