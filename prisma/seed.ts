import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const users = [
  {
    email: 'user1@gmail.com',
    name: 'user1',
  },
  {
    email: 'user2@gmail.com',
    name: 'user2',
  },
];

const posts = [
  {
    title: 'post 1',
    authorId: 1,
  },
  {
    title: 'post 2',
    authorId: 1,
  },
  {
    title: 'post 3',
    authorId: 2,
  },
];

async function main() {
  for (let _user of users) {
    await prisma.user.create({ data: _user });
  }

  for (let _post of posts) {
    await prisma.post.create({ data: _post });
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
