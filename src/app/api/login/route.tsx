import dbConnection from "../../../../libs/mongoDb";
import User from "../../../../model/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { json } from "stream/consumers";

export async function POST(req: any, res: any) {
  try {
    await dbConnection();
    const body = await req.json();

    console.log(body, "Body");

    const user = await User.findOne({ email: body.email });
    console.log(user, "USER");

    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    const isPasswordValid = await bcrypt.compare(body.password, user.password);
    if (!isPasswordValid) {
      return new Response(JSON.stringify({ message: "Invalid password" }), {
        status: 401,
      });
    }

    const accessToken = jwt.sign({ id: user._id }, "SAMEER", {
      expiresIn: "1h",
    });

    return new Response
  } catch (error) {
    console.error("Error logging in:", error);
    return new Response(JSON.stringify({ message: "fail" }), { status: 500 });
  }
}
