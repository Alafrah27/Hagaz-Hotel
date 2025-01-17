import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LogoutApi } from "../../services/LogoutApi";
import { useNavigate } from "react-router-dom";

function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient()
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: LogoutApi,
    onSuccess: () => {
        queryClient.removeQueries()
      navigate("/login", { replace: true });
    },
  });
  return { logout, isLoading };
}

export default useLogout;
