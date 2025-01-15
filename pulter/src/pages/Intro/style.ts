import styled from "styled-components";

export const IntroContainer = styled.div`
  position: absolute;
  left: 0rem;
  top: 28rem;
  width: 23.44rem;
  height: 22.75rem;

  display: flex;
  flex-direction: column;
  padding: 2.25rem 1.5rem 1.5rem 1.5rem;
  gap: 10rem;
  border-radius: 0rem ${(props) => props.theme.borderRadius["2xl"]} 0rem 0rem;
  background: ${(props) => props.theme.colors.white};
`;
export const Title = styled.div`
  font-family: Jalnan;
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: normal;
  line-height: 140%;
  letter-spacing: -0.00125em;

  color: ${(props) => props.theme.colors.black};
  position: static;
  left: 1.5rem;
  top: 2.25rem;
  width: 20.44rem;
  height: 5.25rem;

  display: flex;
  flex-direction: column;
  padding: 0rem;
  gap: 1.0625rem;
  align-self: stretch;
  z-index: 0;
`;
export const SubTitle = styled.div`
  font-family: Work Sans;
  font-size: 1rem;
  font-weight: normal;
  line-height: 140%;
  letter-spacing: -0.00125em;
  color: ${(props) => props.theme.colors.black};
`;
export const StartText = styled.div`
  /* Child objects in a smart layout frame */
  position: static;
  left: 1.5rem;
  top: 17.5rem;
  width: 20.44rem;
  height: 1.56rem;
  /* Smart layout */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0rem;
  align-self: stretch;
  z-index: 1;
`;
