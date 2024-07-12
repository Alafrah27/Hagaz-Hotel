import styled from "styled-components";
import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./headerMenu";

const StyleHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5rem;
`;

function Headers() {
  return (
    <StyleHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyleHeader>
  );
}

export default Headers;
