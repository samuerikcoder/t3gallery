import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/37743a00-327e-4c9b-a910-b41f524e4659-wwgo1f.png",
  "https://utfs.io/f/37743a00-327e-4c9b-a910-b41f524e4659-wwgo1f.png",
  "https://utfs.io/f/37743a00-327e-4c9b-a910-b41f524e4659-wwgo1f.png",
  "https://utfs.io/f/37743a00-327e-4c9b-a910-b41f524e4659-wwgo1f.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
