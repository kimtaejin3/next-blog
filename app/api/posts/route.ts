import Post from "@/models/post";
import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  // console.log("aslkfj");
  const { title, content } = await request.json();
  await connectMongoDB();
  await Post.create({ title, content });
  return NextResponse.json({ message: "Post Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const posts = await Post.find();
  return NextResponse.json({ posts });
}
