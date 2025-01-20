import styled from "styled-components";

export const ButtonContainer = styled.button`
  border-radius: 0.75rem;
  opacity: 1;
  /* Primary */
  background: ${(props) => props.theme.colors.primary1};
  position: absolute;
  bottom: 5rem;
  width: 90%;
  height: 3.88rem;
  /* Smart layout */

  justify-content: center;
  align-items: center;
  padding: 0.75rem 1.25rem;
`;
