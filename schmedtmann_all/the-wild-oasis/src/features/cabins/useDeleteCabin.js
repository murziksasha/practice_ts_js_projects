import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";


export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success(`Cabin deleted successful!`);
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    },
    onError: (err) =>
      toast.error(
        'During deleting, something wrong, try again later...' +
          '  ' +
          err.message
      ),
  });

  return {
    isDeleting,
    deleteCabin
  }

}