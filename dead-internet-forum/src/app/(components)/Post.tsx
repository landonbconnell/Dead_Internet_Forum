import prisma from '@/db';
import { Post } from '.prisma/client';

interface PostComponentProps {
  post: Post;
}

const PostComponent = ({ post }: PostComponentProps) => {
  return (
    <div>
      {post.image_urls.map((url, index) => (
        <img key={index} src={url} alt={`Post image ${index}`} />
      ))}
    </div>
  );
};

export default PostComponent;
