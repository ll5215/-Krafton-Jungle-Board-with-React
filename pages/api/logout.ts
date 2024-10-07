import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // 쿠키를 삭제하여 로그아웃 처리
  res.setHeader('Set-Cookie', 'user=; Path=/; Max-Age=0');
  res.status(200).json({ message: '로그아웃 성공!' });
}
