// req = リクエストデータ, res = レスポンスデータ
export default (req, res) => {
  res.status(200).json({ text: 'Hello', "url": req.url })
}
