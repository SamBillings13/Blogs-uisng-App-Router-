import { NextResponse } from "next/server";
import dbConnection from "../../../../libs/mongoDb";
import Topic from "../../../../model/topic";

  export async function POST(request: any) {
  const { title, description } = await request.json();
  await dbConnection();
  await Topic.create({ title, description });
  return NextResponse.json({ message: "Topic created" }, { status: 201 });
}

export async function GET(request: any) {
  await dbConnection();
  const getTopics = await Topic.find();
  return NextResponse.json({ getTopics });
}

export async function DELETE(request: any) {
  const id = request.nextUrl.searchParams.get("id");
  await dbConnection();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Item deleted" }, { status: 201 });
}
