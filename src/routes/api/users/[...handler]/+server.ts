import { registerController } from '$lib/api/common/helpers/route.helper';
import { json, type RequestHandler } from '@sveltejs/kit';
import { UserController } from '../users.controller';

const { GET } = registerController(UserController);

export { GET };
