import { NextResponse } from "next/server";
import dbConnection from "../../../../../libs/mongoDb";
import Topic from "../../../../../model/topic";



export async function PUT(request: any, { params }: any) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();

  await dbConnection();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic Updated" }, { status: 201 });
}

export async function GET(request: any, { params }: any) {
  const { id } = params;

  await dbConnection();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 201 });
}
