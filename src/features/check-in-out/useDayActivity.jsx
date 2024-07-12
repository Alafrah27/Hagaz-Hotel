import { useQuery } from "@tanstack/react-query";
import { getTodayActivitiesAPI } from "../../services/getTodayActivitiesAPI";

export function useDayActivity() {
  const { isLoading, data: activities } = useQuery({
    queryFn: getTodayActivitiesAPI,
    queryKey: ["today-activity"],
  });

  return { isLoading, activities };
}
