import styled from "styled-components";
import PropTypes from "prop-types";
import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 10rem 3rem 1fr 7rem 9rem;
  gap: 1.6rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;

function TodayItem({ activity }) {
  // const navigate = useNavigate()
  const { id: bookingId, status, guests, numNights } = activity;
  console.log(activity);
  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
      {status === "checked-in" && <Tag type="blue">Departing</Tag>}

      <Flag src={guests.countryFlag} alt='' />
      <Guest>{guests.fullName}</Guest>
      <div>{numNights} nights</div>

      {status === "unconfirmed" && (
        <Button
          size="small"
          variation="primary"
          as={Link}
          to={`/checkin/${bookingId}`}
        >
          Check in
        </Button>
      )}
    </StyledTodayItem>
  );
}
TodayItem.propTypes = {
  activity: PropTypes.node,
};
export default TodayItem;
