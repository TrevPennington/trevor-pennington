import { getSortedPostsData } from "../../../../lib/posts";
import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
  const posts = getSortedPostsData();

  return (
    <div className="flex-1 bg-white flex">
      {/* map */}
      <div className="mt-5 flex flex-col flex-wrap gap-5 mx-5 justify-center items-center flex-1">
        {posts.map((item, index) => (
          <Link key={index} href={`/blog/${item.id}`}>
            <div className="relative h-[400px] w-[400px] overflow-hidden rounded-3xl">
              <Image
                fill
                src={`https://cdn.trevorpennington.com/${item.folder}/cover.jpg?v=2`}
                alt=""
                className="object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
