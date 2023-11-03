import type { $Enums, Prisma } from '@prisma/client';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateUserDto implements Prisma.UserCreateInput {
	@IsString()
	first_name!: string;

	@IsString()
	last_name!: string;

	@IsEmail()
	email!: string;

	@IsString()
    @IsOptional()
	avatar?: string | null | undefined;

	auth_provider!: $Enums.AuthProvider;
	google_auth?: Prisma.GoogleAuthCreateNestedOneWithoutUserInput | undefined;
	local_auth?: Prisma.LocalAuthCreateNestedOneWithoutUserInput | undefined;
	microsoft_auth?: Prisma.MicrosoftAuthCreateNestedOneWithoutUserInput | undefined;
}
