"use client";
import Image from "next/image";
import posts_data from "@/mock/posts.json";
import { useState } from "react";
import { useRouter } from "next/navigation";

type a = {
  _id: number;
  title: string;
  content: string;
};

const getPosts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/posts", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }
    console.log(res);
    return res.json();
  } catch (e) {
    console.log("err while running getPosts");
  }
};

export default async function Home() {
  const { posts } = await getPosts();
  // console.log(posts);
  // const posts = useState<any>(posts_data);
  return (
    <main className="">
      {posts?.reverse().map((post: a) => {
        return (
          <div key={post._id} className="bg-white p-5 rounded-xl mb-7">
            <h2 className="font-bold text-2xl mb-5">{post.title}</h2>
            <p>{post.content}</p>
          </div>
        );
      })}
    </main>
  );
}
