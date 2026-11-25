import Image from "next/image";
import { getPostData } from "../../../../lib/posts";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

async function getImages(folder: string) {
  const res = await fetch(
    `https://cdn.trevorpennington.com/${folder}/manifest.json`,
    {
      cache: "force-cache",
    },
  );

  return res.json();
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const post = getPostData(slug);

  const images = await getImages(post.folder);

  return (
    <div className="bg-white min-h-screen">
      <div className="w-full max-w-[650px] mt-30 relative m-auto">
        <Image
          objectFit="cover"
          width={650}
          height={1000}
          src={`https://cdn.trevorpennington.com/${post.folder}/cover.jpg?v=2`}
          alt=""
        />
      </div>
      <div className="pt-20">
        <p className="text-stone-900 font-black text-2xl text-center font-sans uppercase">
          {post.title}
        </p>
        <p className="text-stone-400 text-center mt-2 font-mono">{post.date}</p>
      </div>
      <div className="flex flex-col gap-10 mt-20 items-center relative w-full justify-center pb-50">
        {images.map((img: string) => (
          <div key={img} className="w-full max-w-[650px]">
            <Image
              width={800}
              height={1000}
              className="w-full h-auto"
              objectFit="cover"
              src={`https://cdn.trevorpennington.com/${post.folder}/${img}?v=2`}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
