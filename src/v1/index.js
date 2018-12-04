import { Router } from 'express';
import users from './users';
import videos from './videos';

export default ({ config, db }) => {
	let api = Router();

	api.use('/users', users({ config, db }))

	// mount the videos resource
	api.use('/videos', videos({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ test: 'aaa' });
	});

	return api;
}