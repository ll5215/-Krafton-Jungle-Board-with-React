import { PrismaClient } from "@prisma/client";
import { getCookie } from "cookies-next";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const userId = getCookie("userId", { req, res });
        if (!userId) {
            return res.status(401).json({error: "로그인이 필요합니다"});
        }
        const user = await prisma.user.findUnique({
            where: { id: Number(userId)},
            select: { id: true, username: true},
        });

        if (!user) {
            return res.status(404).json({error: "사용자를 찾을 수 없습니다"});
        }
        return res.status(200).json(user);
    } catch(error) {
        console.error("서버 오류", error);
        return res.status(500).json({error: "서버 오류가 발생했습니다"});
    }
}