import styled from "styled-components";
import Heading from "./Heading";
import PropTypes from "prop-types";
import GlobbatStyles from "../styles/GlobalStyles";
import Button from "./Button";
const StyledErrorFallback = styled.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 1.6rem;
  }

  & p {
    font-family: "Sono";
    margin-bottom: 3.2rem;
    color: var(--color-grey-500);
  }
`;

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <GlobbatStyles />
      <StyledErrorFallback>
        <Box>
          <Heading as="h2">something went wrong 😮</Heading>
          <p>{error.message}</p>
          <Button size="Try Again" onClick={resetErrorBoundary}></Button>
        </Box>
      </StyledErrorFallback>
    </>
  );
}
ErrorFallback.propTypes = {
  error: PropTypes.node,
  resetErrorBoundary: PropTypes.node,
};
export default ErrorFallback;