import styled from "styled-components";

const StyledGrid = styled.div`
  display: grid;
  align-self: center;
  margin-left: 0.6rem;
  margin-right: 0.3rem;
  grid-template-columns: ${({ columns }) => columns || '1fr 1fr 1fr'};
  column-gap: 0.9rem;
  margin-top: 0.9rem;
  margin-bottom: 0.9rem;
`

export default StyledGrid