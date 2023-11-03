import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ params, fetch }) => {
	const load = await fetch('/api/auth');

	console.log(await load.json());

	return {
		userId: 10
	};
};
