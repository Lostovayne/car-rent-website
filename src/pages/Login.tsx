import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Form,
} from "../components";
import { Checkbox } from "@/components/ui/checkbox";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useLogin } from "@/hooks/auth/useLogin";

export function Login() {
  const { form, onSubmit } = useLogin();
  // Logear al usuario

  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="mx-auto flex flex-col items-center justify-around  md:size-[500px]">
          <CardHeader>
            <CardTitle className="text-2xl">Login to your account</CardTitle>
            <CardDescription>Welcome back! Select method to login:</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4  w-[300px]">
              <div className="grid gap-2">
                <div className="flex justify-center items-center gap-2 -mt-4 mb-4">
                  <button   className=" flex items-center justify-center border rounded-md h-10 w-1/2 px-2 gap-2   font-medium">
                   <FcGoogle className="text-blue-600  text-lg"/>Google
                  </button>
                  <button   className=" flex items-center justify-center border rounded-md h-10 w-1/2  px-2 gap-2  font-medium">
                   <FaFacebook className="text-blue-600  text-lg"/>Facebook
                  </button>
                </div>
                <Label htmlFor="email">Email</Label>
                {form.formState.errors.email && (
                  <span className="text-red-400 py-1.5 text-center rounded text-sm font-medium bg-red-100/80">
                    {form.formState.errors.email.message}
                  </span>
                )}
                <Input
                  id="email"
                  type="text"
                  placeholder="Enter your email..."
                  autoFocus
                  // required
                  {...form.register("email")}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                {form.formState.errors.password && (
                  <span className="text-red-400 py-1.5 text-center rounded text-sm font-medium bg-red-100/80">
                    {form.formState.errors.password.message}
                  </span>
                )}
                  
                  <Input id="password" type="password" placeholder="Enter your password..." required {...form.register("password")} />
              </div>
              <div className="flex items-center">
                <div className="flex items-center gap-1">
                  <Checkbox id="terms" />
                  <p className="text-sm"> Remember me</p>
                </div>

                <Link
                  to="#"
                  rel="noreferrer"
                  className="ml-auto inline-block text-sm  font-bold text-[#4872EB]"
                >
                  Forgot your password?
                </Link>
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link to="/auth/register" className="text-sm   font-bold text-[#4872EB]">
                Create an account
              </Link>
            </div>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}
