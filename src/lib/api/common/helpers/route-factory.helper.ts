import type { ClassConstructor } from "class-transformer";

export const initializeRoutes = (params: ClassConstructor<any>) => {
    console.log("Initialized");
}