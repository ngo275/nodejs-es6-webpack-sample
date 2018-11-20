import { Router } from 'express';
import videos from './videos';

export default ({ config, db }) => {
	let api = Router();

	// mount the videos resource
	api.use('/videos', videos({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ test: 'aaa' });
	});

	return api;
}