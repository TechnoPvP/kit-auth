import { Module } from "$lib/api/common/decorators/module.decorator";
import { UserModule } from "./users/users.module";

@Module({
    imports: [UserModule]
})
export class AppModule {

}