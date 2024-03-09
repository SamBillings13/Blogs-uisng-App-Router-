import dbConnection from "../../../../libs/mongoDb";
import User from "../../../../model/user";
import bcrypt from "bcryptjs";
export async function POST(req: any, res: any) {
  try {
    await dbConnection();
    const body = await req.json();
    console.log(body);
    const existingUser = await User.findOne({ email: body.email });
    console.log(existingUser);
    if (existingUser) {
      return new Response(JSON.stringify({ message: "User already exists" }), {
        status: 400,
      });
    }
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const newUser = new User({
      name: body.name,
      email: body.email,
      password: hashedPassword,
    });
    await newUser.save();

    return new Response(
      JSON.stringify({ message: "User created successfully" }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return new Response(JSON.stringify({ message: "fail" }), { status: 500 });
  }
}
