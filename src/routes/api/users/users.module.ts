import { Module } from "$lib/api/common/decorators/module.decorator";

@Module({
    imports: [UserModule]
})
export class UserModule {}
