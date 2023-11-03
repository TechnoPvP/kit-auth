import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler<{ params: 'login' | 'register' }> = ({ params, request }) => {
	if (params.params === 'login') {
		console.log("Login");
	}

	return json({ userId: 10, firstName: 'adam' });
};
