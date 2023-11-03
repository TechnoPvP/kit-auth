import { prisma } from '$lib/api/common/services/prisma.service';
import type { CreateUserDto } from './dto/create-user.dto';

export class UsersService {
	async create(createUserDto: CreateUserDto) {
		const users = await prisma.user.create({
			data: {
				...createUserDto
			}
		});
	}

	async list() {
		const users = await prisma.user.findMany();

		return users;
	}

	async retrieve(params: { userId: number }) {
		const users = await prisma.user.findUnique({ where: { id: params.userId } });

		return users;
	}
}
