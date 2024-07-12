import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchPramas] = useSearchParams();
  const filterValue = searchPramas.get("status");
  // 1 filter
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  // : { field: "totalPrice", value: 50, method:"gte" };

  // this for sort
  const sortByRow = searchPramas.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRow.split("-");
  const sortBy = { field, direction };

  // pagenation
  const Page = !searchPramas.get("page") ? 1 : Number(searchPramas.get("page"));

  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, Page],
    queryFn: () => getBookings({ filter, sortBy, Page }),
  });
  // prefecting
  const currentCount = Math.ceil(count / PAGE_SIZE);  
  if (Page < currentCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, Page + 1],
      queryFn: () => getBookings({ filter, sortBy, Page: Page + 1 }),
    });
  if (Page > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, Page - 1],
      queryFn: () => getBookings({ filter, sortBy, Page: Page - 1 }),
    });

  return { isLoading, bookings, error, count };
}
