import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (request) => {
  try {
    const newUser = await request.json();
    if (!newUser.email || !newUser.password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    const db = await connectDB();
    console.log("Database connected");
    const usersCollection = db.collection("users");
    const exist = await usersCollection.findOne({ email: newUser.email });
    if (exist) {
      return NextResponse.json({ message: "User exist" }, { status: 304 });
    }
    const hashedPassword = bcrypt.hashSync(newUser.password, 14);
    console.log("Password hashed", hashedPassword);
    const resp = await usersCollection.insertOne({
      ...newUser,
      password: hashedPassword,
    });
    console.log("User inserted:", resp);
    return NextResponse.json({ message: "user created" }, { status: 200 });
  } catch (error) {
    console.error("Error in POST /signup/api:", error);
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    );
  }
};
