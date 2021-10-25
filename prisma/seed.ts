import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const users = [
  {
    email: 'user1@gmail.com',
    name: 'user1'
  },
  {
    email: 'user2@gmail.com',
    name: 'user2'
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

main().catch((e) => console.error(e));

/*
const users = [
  {
    email: 'user1@gmail.com',
    name: 'user1',
    posts: 
  },
  {
    email: 'user2@gmail.com',
    name: 'user2',
    posts: 
  },
];

const posts = [
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    title: 'post2',
    author: 'user1',
    authorId: 1
  },
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    title: 'post2',
    author: 'user1',
    authorId: 1,
  },
];

async function main() {
  for (let _user of users) {
    await prisma.user.create({ data: _user });
  }

  for (let _post of posts) {
    await prisma.user.create({ data: _post });
  }

  for (let _post of posts) {
    await prisma.post.create({ data: _post });
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
  */
