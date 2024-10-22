import prisma from '@/db';
import { Post } from '.prisma/client';
import PostComponent from '@/app/(components)/Post';

export default async function Page() {
  // Fetch data inside the component
  const posts: Post[] = await prisma.post.findMany();

  return (
    <div>
      {posts.map((post: Post) => (
        <PostComponent post={post} />
      ))}
    </div>
  );
}
