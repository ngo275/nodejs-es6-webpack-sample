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
    const newUser = await db.user.findOrCreate({ where: { name: 'Hanako', child_birthday: '20171202', session_code: '002ePUOe2mwesH0e4LOe2yYTOe2ePUOx' }})
    res.json(newUser)
  })

  api.get('/destroy/:user_id', async (req, res) => {
    const userId = req.params.user_id

    // TODO: These executions should be in one transaction.
    const userDestroyCount = await db.user.destroy({ where: { id: userId }})
    const favDestroyCount = await db.users_videos.destroy({ where: { user_id: userId }})
    
    const message = userDestroyCount > 0 ? 'successfully deleted' : 'failed to delete the user'
    res.json({ message })
  })

  api.get('/:userId/favorites', async (req, res) => {
    const userId = req.params.userId
    const fav = await db.users_videos.findAll({ where: { user_id: userId }})
    const videos = await db.video.findAll({ where: {[Sequelize.Op.or]: [{ id: fav.map(f => f.video_id) }]}})
    res.json(videos)
  })

  api.post('/:userId/favorites/:videoId', async (req, res) => {
    const userId = req.params.userId
    const videoId = req.params.videoId
    const fav = await db.users_videos.findOrCreate({ where: { user_id: userId, video_id: videoId }})
    res.json(fav)
  })

  api.post('/:userId/favorites/:videoId/delete', async (req, res) => {
    const userId = req.params.userId
    const videoId = req.params.videoId
    const favDestroyCount = await db.users_videos.destroy({ where: { user_id: userId, video_id: videoId }})
    const message = favDestroyCount > 0 ? 'successfully remove favorite' : 'failed to remove favorite'
    res.json({ message })
  })

  return api;
}