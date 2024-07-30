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
import { useLogin } from "../hooks/useLogin";

export function Login() {
  const { form, onSubmit } = useLogin();
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                {form.formState.errors.email && (
                  <span className="text-red-400 py-1.5 text-center rounded text-sm font-medium bg-red-100/80">
                    {form.formState.errors.email.message}
                  </span>
                )}
                <Input
                  id="email"
                  type="text"
                  placeholder="m@example.com"
                  autoFocus
                  // required
                  {...form.register("email")}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>

                  <Link
                    to="#"
                    rel="noreferrer"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                {form.formState.errors.password && (
                  <span className="text-red-400 py-1.5 text-center rounded text-sm font-medium bg-red-100/80">
                    {form.formState.errors.password.message}
                  </span>
                )}
                <Input
                  id="password"
                  type="password"
                  required
                  {...form.register("password")}
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link to="/auth/register" className="underline">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}
