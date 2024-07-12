import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateCurrentUser } from "../../services/UpdateCurrentUser";
import toast from "react-hot-toast";
export function useUpdateUser() {
  const queryClinet = useQueryClient();
  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: UpdateCurrentUser,
    onSuccess: ({user}) => {
      toast.success("user account  successfuly updated ");
      queryClinet.setQueryData(["user"], user);
      // queryClinet.invalidateQueries({
      //   queryKey: ["user"],
      // });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}
