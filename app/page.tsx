"use client";
import Image from "next/image";
import posts_data from "@/mock/posts.json";
import { useState } from "react";

type a = {
  id: number;
  title: string;
  content: string;
};

export default function Home() {
  const posts = useState<any>(posts_data);
  console.log(posts);
  return (
    <main className="">
      {posts[0].map((post: a) => {
        return (
          <div className="bg-white p-5 rounded-xl mb-10" key={post.id}>
            <h2 className="font-bold text-2xl mb-5">{post.title}</h2>
            <p>{post.content}</p>
          </div>
        );
      })}
    </main>
  );
}
