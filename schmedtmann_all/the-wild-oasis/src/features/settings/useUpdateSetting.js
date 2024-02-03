import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingAPI} from "../../services/apiSettings";


export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const {mutate: updateSetting, isLoading: isCreating} = useMutation({
    mutationFn: updateSettingAPI,
    onSuccess: () => {
      toast.success('Setting successfully created');
      queryClient.invalidateQueries({queryKey:['settings']});
    },
    onError: (err) => toast.error(err.message),
  });

  return {
    updateSetting, isCreating
  }
}