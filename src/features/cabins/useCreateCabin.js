import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const queryClinet = useQueryClient();
  // this usemutation for create cabin
  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created ");
      queryClinet.invalidateQueries({
        queryKey: ["cabins"],
      });
    //   reset();
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createCabin };
}
