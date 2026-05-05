import { Module } from "@nestjs/common/decorators/modules/module.decorator";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TimeModule } from "./time/time.module";
import { CommonModule } from "./@common/common.module";

@Module({
  imports: [TimeModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
class AppModule {}

export { AppModule };
