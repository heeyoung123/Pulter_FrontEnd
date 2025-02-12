import React, { useState } from "react";
import { TextContainer } from "./style";
import { Button } from "@/components/button/Button";
import { InputContainer } from "@/components/Input/Input.style";
import { CommonContainer } from "@/shared/container";

type RegisterProps = {
  text: string;
  placeholder: string;
  onNext: (value: string) => void;
  buttonText: string;
};
const REGISTER: React.FC<RegisterProps> = ({
  text,
  placeholder,
  onNext,
  buttonText,
}) => {
  const [value, setValue] = useState("");
  return (
    <CommonContainer>
      <TextContainer>{text}</TextContainer>
      <InputContainer
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
      <Button onClick={() => onNext(value)}>{buttonText}</Button>
    </CommonContainer>
  );
};
export default REGISTER;
