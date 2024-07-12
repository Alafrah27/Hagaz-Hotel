import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStay } from "./useRecentStay";
import Stats from "./Stats";
import { useCabin } from "../cabins/useCabin";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import Today from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isLoading: isLoading1, bookings } = useRecentBookings();
  const { isLoading: isLoading2,  confirmed,numDays } = useRecentStay();
  const {isLoading, cabins} = useCabin()

  if (isLoading1 || isLoading2|| isLoading) return <Spinner />;
  
  return (
    <StyledDashboardLayout>
      <Stats bookings={bookings} confirmed={confirmed} numDays={numDays}  cabinCount={cabins.length}/>
      <Today />
      <DurationChart confirmed={confirmed}/>
      <SalesChart bookings={bookings} numDays={numDays}/>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
