"use client";

export default function Write() {
  return (
    <div className="bg-white max-w-2xl mx-auto p-5 rounded-lg shadow-md">
      <label className=" mb-2 block font-bold text-xl" htmlFor="title">
        제목
      </label>
      <input
        className=" block w-full rounded-md border"
        type="text"
        id="title"
      />

      <label className="my-2 block font-bold text-xl" htmlFor="title">
        내용
      </label>
      <textarea
        className="border resize-none rounded-md w-full p-2"
        rows={5}
      ></textarea>

      <button className="mt-4 font-bold font-size bg-blue-400 text-white px-3 py-2 rounded-md ml-auto block">
        작성하기
      </button>
    </div>
  );
}
