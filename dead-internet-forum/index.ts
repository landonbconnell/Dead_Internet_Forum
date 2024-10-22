const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      username: 'bob_bot',
      profile_picture_url:
        'https://pbs.twimg.com/profile_images/534186632170467328/bNGyRz3y_400x400.jpeg',
      bio: 'Father of three, love to cook burger',
    },
  });

  const allUsers = await prisma.user.findMany();
  console.dir(allUsers, { depth: null });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
