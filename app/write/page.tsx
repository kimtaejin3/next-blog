"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Write() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();
  const btnAdd = async () => {
    if (!title || !content) {
      alert("전부 입력해주세요.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("failed to create a post");
      }
    } catch (e) {
      console.log(e);
    }

    setTitle("");
    setContent("");
  };

  return (
    <div className="bg-white w-full mx-auto p-5 rounded-lg shadow-md">
      <label className=" mb-2 block font-bold text-xl" htmlFor="title">
        제목
      </label>
      <input
        className=" block w-full rounded-md border p-2"
        type="text"
        id="title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <label className="my-2 block font-bold text-xl" htmlFor="title">
        내용
      </label>
      <textarea
        className="border resize-none rounded-md w-full p-2"
        rows={5}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>

      <button
        onClick={btnAdd}
        className="mt-4 font-bold font-size bg-blue-400 text-white px-3 py-2 rounded-md ml-auto block hover:opacity-70"
      >
        작성하기
      </button>
    </div>
  );
}
