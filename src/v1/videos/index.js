import { Router } from 'express';
import { getModels } from '../../../models';

export default ({ config, db }) => {
	const api = Router();

	api.get('/', async (req, res) => {
    const videos = await getModels(config).video.findAll({})
    res.json({ videos })
		res.json({
      // videos: [
      //   {
      //     id: 'tencent_videos',
      //     name: '腾讯视频',
      //     open: false,
      //     videos: [
      //       { id: 'l0025mppim4', title: 'Chinese TED' },
      //       { id: 'h0026v0vvl6', title: 'Chinese idle' },
      //     ],
      //   },
      //   {
      //     id: 'youku',
      //     name: '优酷',
      //     open: false,
      //     videos: [
      //       { id: 'l0025mppim4', title: 'Chinese TED' },
      //       { id: 'h0026v0vvl6', title: 'Chinese idle' },
      //     ],
      //   },
      // ]
    });
	});

  api.post('/', async (req, res) => {
    const newVideo = await getModels(config).video.create({ title: 'Chinese idle', tvid: 'h0026v0vvl6' })
    res.json(newVideo)
  })

	return api;
}