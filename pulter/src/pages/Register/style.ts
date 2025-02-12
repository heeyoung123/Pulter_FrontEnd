import styled from "styled-components";

export const TextContainer = styled.div`
  position: absolute;
  left: 1.25rem;
  top: 8.25rem;
  width: 20.94rem;
  height: 2rem;
  font-family: Work Sans;
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: bold;
  line-height: 1.5rem;
  letter-spacing: -0.00125em;
  color: ${(props) => props.theme.colors.black};
`;
