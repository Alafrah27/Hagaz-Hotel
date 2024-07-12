import PropTypes from "prop-types";
import Stat from "./Stat";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
} from "react-icons/hi2";
import { HiOutlineChartBar } from "react-icons/hi";
import { formatCurrency } from "../../utils/helpers";
function Stats({ bookings, confirmed, numDays, cabinCount }) {
  const numBookings = bookings.length;
  const sales = bookings.reduce((acc, curr) => acc + curr.totalPrice, 0);
  const chekins = confirmed.length;
  const occupation =
    confirmed.reduce((acc, curr) => acc + curr.numNights, 0) /
    (numDays * cabinCount);
  return (
    <>
      <Stat
        value={numBookings}
        title="Bookings "
        color="blue"
        icon={<HiOutlineBriefcase />}
      />
      <Stat
        value={formatCurrency(sales)}
        title="Sales "
        color="green"
        icon={<HiOutlineBanknotes />}
      />
      <Stat
        value={chekins}
        title="Check in "
        color="indigo"
        icon={<HiOutlineCalendarDays />}
      />
      <Stat
        value={Math.round(occupation * 100) + "%"}
        title="Occupancy Rate "
        color="yellow"
        icon={<HiOutlineChartBar />}
      />
    </>
  );
}

Stats.propTypes = {
  bookings: PropTypes.node,
  confirmed: PropTypes.node,
  numDays: PropTypes.node,
  cabinCount: PropTypes.node,
};
export default Stats;
