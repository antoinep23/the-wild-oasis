import { HiOutlineBriefcase, HiOutlineChartBar } from 'react-icons/hi';
import { HiOutlineBanknotes, HiOutlineCalendarDays } from 'react-icons/hi2';
import Stat from './Stat';
import { formatCurrency } from '../../utils/helpers';

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // 1.
  const numBookings = bookings.length;

  // 2.
  const sales = bookings.reduce((acc, curr) => acc + curr.totalPrice, 0);

  // 3.
  const checkIns = confirmedStays.length;

  // 4.
  const occupation =
    confirmedStays.reduce((acc, curr) => acc + curr.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkIns}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + '%'}
      />
    </>
  );
}

export default Stats;
