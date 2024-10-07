import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user } = req.cookies; // 쿠키에서 사용자 정보 읽기

  if (!user) {
    return res.status(401).json({ message: '인증되지 않은 사용자입니다.' });
  }

  return res.status(200).json({ message: '인증된 사용자입니다.' });
}
