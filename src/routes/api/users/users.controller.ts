import { Get } from '$lib/api/common/decorators/get.decorators';

export class UserService {
	retrieve() {
		return { userId: 10, firstName: 'adam' };
	}
}

export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get('all-users')
	retrieve() {
		return this.userService.retrieve();
	}

	// @Get('revoke')
	// async revokeUser() {
	// 	return { status: 'revoked' };
	// }
}
