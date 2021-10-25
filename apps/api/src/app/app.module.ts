import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController, PostsService } from '@olympus/posts';

@Module({
  imports: [],
  controllers: [AppController, PostsController],
  providers: [AppService, PostsService],
})
export class AppModule {}
