import Link from "next/link";

export default function HomePage() {
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

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
