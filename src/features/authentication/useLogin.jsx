import { Userlogin } from "../../services/ApiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClinet = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => Userlogin({ email, password }),
    onSuccess: (user) => {
      queryClinet.setQueriesData(["user"], user.user);
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.log("provide email or password are in faild", err);
      toast.error("provide email or password are incorrect");
    },
  });
  return { login, isLoading };
}
