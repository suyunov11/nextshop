import jwt from 'jsonwebtoken'
const SECRET = process.env.JWT_SECRET

export default function handler(req, res) {
  const username = req.body.username

  const token = jwt.sign(
    { username, isAdmin: true, tel: '010776387326', who: 'Server' },
    SECRET,
    { expiresIn: '1d' }
  )

  res.status(200).json({ token })
}
