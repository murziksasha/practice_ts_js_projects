import { useQuery } from "@tanstack/react-query"
import { getStaysTodayActivity } from "../../services/apiBookings"


export function useActivityTodayStays() {

  const {isLoading, data: stays} = useQuery({
    queryFn: getStaysTodayActivity,
    queryKey: ['today-activity']
  })

  return {isLoading, stays}
}