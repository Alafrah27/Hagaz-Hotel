import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  
`;
 const LogTITel = styled.span`
 font-weight: bold;
 text-transform: uppercase;
 line-height: 1.9;
 `;
const Img = styled.img`
  height: 7.6rem;
  width: 7.6rem;
  border-radius: 50%;
`;

function Logo() {
  return (
    <>
    <StyledLogo>
      <Img src="/totiel.jpg" alt="Logo" />
      <LogTITel >Hagazino Hotel</LogTITel>
    </StyledLogo>
    </>
  );
}

export default Logo;
