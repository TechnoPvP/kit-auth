import { initializeRoutes } from '$lib/api/common/helpers/route-factory.helper';
import { UserController } from './routes/api/users/users.controller';

const bootstrap = () => {
	initializeRoutes(UserController);
};

bootstrap();
