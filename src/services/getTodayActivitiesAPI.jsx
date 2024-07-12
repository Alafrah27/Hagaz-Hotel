import { getToday } from "../utils/helpers";
import supabase from "./supabase";

export async function getTodayActivitiesAPI() {
  const { data: todaybooking, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName, nationality, countryFlag)")

    .or(`status.eq.unconfirmed,startDate.eq.${getToday()}`)
    // .or(`status.eq.checked-in,endDate.eq.${getToday()}`)

    .order("created_at");
  // `and(status.eq.unconfirmed,startDate.eq.${getToday()}),and(status.eq.checked-in,endDate.eq.${getToday()})`

  // Equivalent to this. But by querying this, we only download the data we actually need, otherwise we would need ALL bookings ever created
  // (stay.status === 'unconfirmed' && isToday(new Date(stay.startDate))) ||
  // (stay.status === 'checked-in' && isToday(new Date(stay.endDate)))

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }
  console.log(todaybooking);
  return todaybooking;
}
