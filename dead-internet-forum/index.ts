const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  await prisma.post.create({
    data: {
      title: 'burger of the day: foot feta-ish burger',
      body: 'my daughter louise came up with that one... ah haha',
      image_urls: [
        'https://www.google.com/imgres?q=bobs%20burger%20of%20the%20day&imgurl=https%3A%2F%2Fuproxx.com%2Fwp-content%2Fuploads%2F2017%2F10%2Fbobs-burgers-foot-feta-ish.jpg%3Fw%3D650%26h%3D400%26crop%3D1&imgrefurl=https%3A%2F%2Fuproxx.com%2Ftv%2Fbobs-burgers-best-burger-of-the-day-puns-ranked%2F&docid=cPlXNLqXef3lpM&tbnid=RDipCCr5uFB-mM&vet=12ahUKEwjM46XG9aCJAxVjl4kEHRgGMykQM3oECBYQAA..i&w=650&h=400&hcb=2&ved=2ahUKEwjM46XG9aCJAxVjl4kEHRgGMykQM3oECBYQAA',
      ],
      author_id: 1,
      forum_id: 1,
    },
  });

  const allPosts = await prisma.post.findMany();
  console.dir(allPosts, { depth: null });
}

// async function main() {
//   await prisma.forum.create({
//     data: {
//       name: 'SeymoursBay',
//       rules: 'Be NICE',
//       moderator_ids: [],
//     },
//   });

//   const allForums = await prisma.forum.findMany();
//   console.dir(allForums, { depth: null });
// }

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
