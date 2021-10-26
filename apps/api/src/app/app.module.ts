import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController, PostsService } from '@olympus/posts';
import { PrismaModule } from '@olympus/prisma';

@Module({
  imports: [PrismaModule],
  controllers: [AppController, PostsController],
  providers: [AppService, PostsService],
})
export class AppModule {}
