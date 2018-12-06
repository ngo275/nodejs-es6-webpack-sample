import { Router } from 'express';
import Sequelize from 'sequelize'

export default ({ config, db }) => {
  const api = Router();

  api.get('/', async (req, res) => {
    const users = db.user.findAll({})
	  res.json(users)
  });

  api.get('/:userId', async (req, res) => {
    const userId = req.params.userId
    const u = await db.user.find({ where: { id: userId }})
    res.json(u)
  })

  api.post('/', async (req, res) => {
    const { name, sessionCode, avatarUrl } = req.body
    const newUser: Array<any> = await db.user.findOrCreate({ where: { name, session_code: sessionCode }})
    const result = await newUser[0].update({ avatar_url: avatarUrl })
    res.json(result)
  })

  // FIXME: put doesn't get req.body
  api.put('/:userId', async (req, res) => {
    const userId = req.params.userId
    //const { name, avatarUrl } = req.body
    const name = 'shuichi'
    const avatarUrl = 'https://wx.qlogo.cn/mmopen/vi_32/rdl0vmOhkS8KIgY8DHAjdiaz5KyIBQa018xiaw8HWRRXVu1xz3s6d0icJOHOB7lsj8QX7GPS4icg8axXrAJY7OTIMw/132'
    console.log(req.body)
    console.log(name, avatarUrl)
    const user = await db.user.update({ name, avatar_url: avatarUrl }, { where: { id: userId }})
    res.json(user)
  })

  api.get('/destroy/:userId', async (req, res) => {
    const userId = req.params.userId

    // TODO: These executions should be in one transaction.
    const userDestroyCount = await db.user.destroy({ where: { id: userId }})
    const favDestroyCount = await db.users_videos.destroy({ where: { user_id: userId }})
    
    const message = userDestroyCount > 0 ? 'successfully deleted' : 'failed to delete the user'
    res.json({ message })
  })

  return api;
}