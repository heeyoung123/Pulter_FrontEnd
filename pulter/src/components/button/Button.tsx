import React from "react";
import * as S from "../button/Button.style";
interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  location?: { left: string; top: string };
}
export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <>
      <S.ButtonContainer onClick={onClick}>{children}</S.ButtonContainer>
    </>
  );
};
