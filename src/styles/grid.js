import styled from "styled-components";

const StyledGrid = styled.div`
  display: grid;
  align-self: center;
  grid-template-columns: ${({ columns }) => columns || '1fr 1fr 1fr'};
  margin-top: 0.8rem;
  margin-bottom: 1rem;
`

export default StyledGrid