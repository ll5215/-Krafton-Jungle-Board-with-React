import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    try {
      // 사용자 검색
      const user = await prisma.user.findUnique({ where: { username } });

      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: '아이디나 비밀번호가 잘못되었습니다.' });
      }

      // 쿠키 설정 (사용자 ID를 저장)
      res.setHeader('Set-Cookie', `user=${user.id}; HttpOnly; Path=/; Max-Age=3600;`);

      return res.status(200).json({ message: '로그인 성공!' });
    } catch {
      // 오류 발생 시 처리
      return res.status(500).json({ error: '서버 오류입니다.' });
    }
  } else {
    return res.status(405).json({ error: '지원하지 않는 메서드입니다.' });
  }
}
