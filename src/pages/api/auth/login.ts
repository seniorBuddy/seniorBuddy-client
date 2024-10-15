import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    console.log('Login request received: ', req.body);

    const { userId, password } = req.body;

    if (userId === 'test' && password === 'password123') {
      console.log('User login successful: ', userId);
      res.status(200).json({ message: '로그인 성공' });
    } else {
      console.log('Login failed for user: ', userId);
      res.status(401).json({ message: '로그인 실패' });
    }
  } else {
    console.log('Invalid request method: ', req.method);
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}