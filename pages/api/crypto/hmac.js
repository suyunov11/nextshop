import { computeHmac } from '../../../utils/crypto-functions'

export default function handler(req, res) {
  const { algorithm, secret, inputText } = req.body

  const hmacValue = computeHmac(algorithm, secret, inputText)

  res.status(200).json({ hmacValue })
}
