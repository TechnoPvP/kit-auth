import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = ({request}) => {
	console.log()

	return json({ userId: 10, firstName: 'adam' });
};