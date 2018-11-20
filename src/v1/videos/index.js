import { Router } from 'express';

export default ({ config, db }) => {
	const api = Router();

	api.get('/', (req, res) => {
		res.json({ 
      videos: [
        {
          title: 'test video',
          url: 'https://shuichi.tech',
        },
        {
          title: 'test video2',
          url: 'https://shuichi.tech',
        },
        {
          title: 'test video3',
          url: 'https://shuichi.tech',
        },
      ]
    });
	});

	return api;
}