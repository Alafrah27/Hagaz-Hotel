import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
// import Uploader from "../data/Uploader";

const StyleSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-radius: var(--color-grey-100);
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function Sidebar() { 
  return (
    // <aside>sidebar</aside>
    <StyleSidebar>
      <Logo />
      <MainNav />
      {/* <Uploader /> */}
    </StyleSidebar>
  );
}

export default Sidebar;
