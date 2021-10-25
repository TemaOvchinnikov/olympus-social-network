import { PrismaClient } from '@prisma/client';
import { getMaxListeners } from 'process';

const prisma = new PrismaClient();

const items = [
  {
    email: 'user1@gmail.com',
    name: 'user1',
  },
  {
    email: 'user2@gmail.com',
    name: 'user2',
  },
];

async function main() {
  for (let item of items) {
    await prisma.user.create({ data: item });
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
