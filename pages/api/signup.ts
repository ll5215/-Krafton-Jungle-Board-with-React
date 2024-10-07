import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, password, username } = req.body;

    // 비밀번호 암호화
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      // 유저 정보 데이터베이스에 저장
      const user = await prisma.user.create({
        data: {
          name,
          email,
          username,  // username 필드 추가
          password: hashedPassword,
        },
      });

      return res.status(201).json({ user });
    } catch (error: unknown) {
      console.error("유저 생성 오류:", error);

      if (error instanceof Error) {
        return res.status(400).json({
          error: "유저 생성에 실패했습니다.",
          message: error.message,
        });
      }

      return res.status(400).json({
        error: "유저 생성에 실패했습니다.",
        message: "알 수 없는 오류가 발생했습니다.",
      });
    }
  } else {
    return res.status(405).json({ error: "지원하지 않는 메서드입니다." });
  }
}
