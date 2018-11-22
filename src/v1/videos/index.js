import { Router } from 'express';

export default ({ config, db }) => {
	const api = Router();

	api.get('/', (req, res) => {
		res.json({
      videos: [
        {
          id: 'tencent_videos',
          name: '腾讯视频',
          open: false,
          videos: [
            { id: 'l0025mppim4', title: 'Chinese TED' },
            { id: 'h0026v0vvl6', title: 'Chinese idle' },
          ],
        },
        {
          id: 'youku',
          name: '优酷',
          open: false,
          videos: [
            { id: 'l0025mppim4', title: 'Chinese TED' },
            { id: 'h0026v0vvl6', title: 'Chinese idle' },
          ],
        },
      ]
    });
	});

	return api;
}