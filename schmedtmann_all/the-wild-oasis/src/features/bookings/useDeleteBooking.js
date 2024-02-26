import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";


export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success(`Booking deleted successful!`);
      queryClient.invalidateQueries({
        queryKey: ['bookings'],
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
    deleteBooking
  }

}