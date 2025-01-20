import React from "react";
import { ButtonContainer } from "./Button.style";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  location?: { left: string; top: string };
}
export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <>
      <ButtonContainer onClick={onClick}>{children}</ButtonContainer>
    </>
  );
};
