import forge from 'node-forge'

const handler = (req, res) => {
  const { password, salt, iteration, keyLength } = req.body
  const it = parseInt(iteration)
  const kl = parseInt(keyLength)
  const derivedKey = forge.util.bytesToHex(
    forge.pkcs5.pbkdf2(password, salt, it, kl)
  )
  res.status(200).json({ derivedKey })
}

export default handler
