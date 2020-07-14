import { NextApiRequest, NextApiResponse } from 'next'

// req = リクエストデータ, res = レスポンスデータ
export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: 'Hello', "url": req.url })
}
