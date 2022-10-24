import User from '../../models/User'
import data from '../../utils/data'
import db from '../../utils/db'

const handler = async (req, res) => {
  await db.disconnect()
  // await User.deleteMany()
  await User.insertMany(data.users)
  await db.disconnect()
  res.send({
    message: 'user seeded successfully. 초기 샘플 사용자가 등록되었습니다...',
  })
}

export default handler
