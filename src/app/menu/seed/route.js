import { connectDB } from "@/lib/connectDB";
import { menu } from "@/lib/menu";
import { NextResponse } from "next/server";

export const GET = async () => {
  const db = await connectDB();
  console.log(db);
  const menuCollection = db.collection("menu");
  try {
    await menuCollection.deleteMany();
    const resp = await menuCollection.insertMany(menu);
    console.log("InsertMany result:", resp);
    return NextResponse.json({ message: "Seeded Successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Seeded Not Successfull", error });
  }
};
