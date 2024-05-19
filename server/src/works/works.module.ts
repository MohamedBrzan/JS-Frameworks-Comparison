import { Module } from "@nestjs/common";
import { WorksService } from "./works.service";
import { WorksController } from "./works.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Works, WorksSchema } from "src/schemas/works.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Works.name, schema: WorksSchema }]),
  ],
  controllers: [WorksController],
  providers: [WorksService],
})
export class WorksModule {}
