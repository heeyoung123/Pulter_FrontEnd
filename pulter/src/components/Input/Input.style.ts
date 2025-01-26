import styled from "styled-components";

export const InputContainer = styled.input`
  position: absolute;
  top: 11.19rem;
  width: 90%;
  height: 4rem;
  /* Smart layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.25rem;
  gap: 1.625rem;
  border-radius: ${(props) => props.theme.borderRadius.base};
  opacity: 1;
  /* wt, bk/White */
  background: ${(props) => props.theme.colors.white};
  border-width: 0.06rem;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.border};
`;
