import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === "DELETE") {
    try {
      await prisma.comment.delete({
        where: { id: Number(id) },
      });
      res.status(200).json({ message: "댓글이 삭제되었습니다." });
    } catch (error) {
        console.error("오류", error);
      res.status(500).json({ error: "댓글 삭제 실패" });
    }
  } else {
    res.status(405).json({ error: "지원하지 않는 메서드입니다." });
  }
}
