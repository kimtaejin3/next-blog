"use client";
import Image from "next/image";
import posts_data from "@/mock/posts.json";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { BsFillTrash3Fill, BsFillPencilFill } from "react-icons/bs";

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
  if (posts === undefined) {
    return;
  }
  return (
    <main className="">
      {posts?.reverse().map((post: a) => {
        return (
          <div key={post._id} className="bg-white p-5 rounded-xl mb-7">
            <div className="mb-5 flex justify-between">
              <h2 className="font-bold text-2xl">{post.title}</h2>
              <div className="flex gap-3">
                <BsFillPencilFill
                  className="cursor-pointer hover:scale-125"
                  color="gray"
                />
                <BsFillTrash3Fill className=" hover:scale-125 cursor-pointer text-red-400" />
              </div>
            </div>
            <p className="text break-words">{post.content}</p>
          </div>
        );
      })}
    </main>
  );
}
