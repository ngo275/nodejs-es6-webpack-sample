import { Router } from 'express';

export default ({ config, db }) => {
  const api = Router();

  api.get('/', async (req, res) => {
    const videos = await db.video.findAll({})
    res.json({ videos })
  });

  api.post('/', async (req, res) => {
    const newVideo = await db.video.create({ title: 'Chinese idle', tvid: 'h0026v0vvl6' })
    res.json(newVideo)
  })

  return api;
}