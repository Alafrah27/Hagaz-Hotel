import { useMutation } from "@tanstack/react-query";
import { SignUp } from "../../services/SignUp";
import toast from "react-hot-toast";

export function useSignUp() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: SignUp,
    onSuccess: (user) => {
      console.log(user);

      toast.success("account secessfully created ");
    },
  });

  return { signup, isLoading };
}
