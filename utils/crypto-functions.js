import forge from 'node-forge'

const computeHash = (algorithm, inputText) => {
  switch (algorithm) {
    case 'md5':
      let md1 = forge.md.md5.create()
      md1.update(inputText)
      return md1.digest().toHex()
    case 'sha1':
      let md2 = forge.md.sha1.create()
      md2.update(inputText)
      return md2.digest().toHex()
    case 'sha256':
      let md3 = forge.md.sha256.create()
      md3.update(inputText)
      return md3.digest().toHex()
    case 'sha384':
      let md4 = forge.md.sha384.create()
      md4.update(inputText)
      return md4.digest().toHex()
    case 'sha512':
      let md5 = forge.md.sha512.create()
      md5.update(inputText)
      return md5.digest().toHex()
  }
}

const computeHmac = (algorithm, secret, inputText) => {
  let hmac = forge.hmac.create()
  hmac.start(algorithm, secret)
  hmac.update(inputText)
  return hmac.digest().toHex()
}

export { computeHash, computeHmac }
