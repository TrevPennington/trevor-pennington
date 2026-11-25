"use client";
import { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import type { PostSummary } from "../../lib/posts";
import "./slider.css";

export default function Carousel({ posts }: { posts: PostSummary[] }) {
  const splideRef = useRef<InstanceType<typeof Splide>>(null);

  const goPrev = () => {
    splideRef.current?.splide?.go("<");
  };

  const goNext = () => {
    splideRef.current?.splide?.go(">");
  };

  return (
    <div className="flex-1 flex flex-col gap-4">
      <div className="flex items-center justify-between mx-8 gap-3">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous slide"
          className="h-10 w-10 rounded-full border border-stone-300 text-stone-300 hover:bg-stone-100  transition-colors flex items-center justify-center cursor-pointer"
        >
          <FiArrowLeft size={20} />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next slide"
          className="h-10 w-10 rounded-full border border-stone-300 text-stone-300 hover:bg-stone-100 transition-colors flex items-center justify-center cursor-pointer"
        >
          <FiArrowRight size={20} />
        </button>
      </div>
      <Splide
        ref={splideRef}
        aria-label="Photo blogs"
        options={{
          arrows: false,
          pagination: false,
          type: "loop",
          perPage: 1,
          perMove: 1,
          focus: "center",
          padding: "30%",
          gap: "20px",
          snap: true,
          wheel: true,
          releaseWheel: true,
          // wheelMinThreshold: 6,
          wheelSleep: 800,
          clones: 4,
          dragMinThreshold: { mouse: 10, touch: 10 },
          flickMaxPages: 1,
          flickPower: 100,
        }}
      >
        {posts.map((item, index) => (
          <SplideSlide key={index}>
            <Link
              href={`/blog/${item.id}`}
              className="group h-full flex items-end"
            >
              <div className="relative w-full h-full max-h-[700px] overflow-hidden">
                <Image
                  fill
                  src={`https://cdn.trevorpennington.com/${item.folder}/cover.jpg?v=2`}
                  alt=""
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
