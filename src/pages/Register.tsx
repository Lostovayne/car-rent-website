import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Input,
  Button,
  Label,
} from "../components";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export function Register() {
  return (
    <div className=" w-full max-w-[1200px] lg:mx-auto h-screen  max-lg:bg-[#fff6] flex items-center justify-center lg:justify-start">
      <Card className="flex flex-col  items-center justify-around max-lg:bg-[#fffd] bg-[#fffc] md:size-[500px]">
        <CardHeader>
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>Enter your information to create an account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4   w-[300px]">
            <div className="flex justify-center items-center gap-2 ">
              <button className=" flex items-center justify-center border rounded-md h-10 w-1/2 px-2 gap-2   font-medium">
                <FcGoogle className="text-blue-600  text-lg" />
                Google
              </button>
              <button className=" flex items-center justify-center border rounded-md h-10 w-1/2  px-2 gap-2  font-medium">
                <FaFacebook className="text-blue-600  text-lg" />
                Facebook
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="Max" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Robinson" required />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" />
            </div>
            <Button type="submit" className="w-full">
              Create an account
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/auth/login" className="font-bold text-blue-600">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
