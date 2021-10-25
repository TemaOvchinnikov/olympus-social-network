import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
//import { PrismaService } from '@prisma/prisma.service';
//import { PrismaService } from '../../../../prisma/prisma.service';
import { PrismaService } from '@olympus/prisma';

//const prisma = new PrismaClient();

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.post.findMany();
  }

  findOne(postWhereUniqueInput: Prisma.PostWhereUniqueInput) {
    return this.prisma.post.findUnique({
      where: postWhereUniqueInput,
    });
  }
}
