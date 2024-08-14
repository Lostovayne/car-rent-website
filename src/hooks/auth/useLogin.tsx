import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginSchema } from "../../schemas";
import { useAuthStore } from "../../store/auth.store";

export const useLogin = () => {
  const loginUser = useAuthStore((state) => state.loginUser);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    loginUser(data.email, data.password);
  };

  return {
    form,
    onSubmit,
  };
};
