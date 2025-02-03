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

// import React, { useState } from "react";
// import { TextContainer, InputContainer, Button } from "@/shared/styles";

// type StepFormProps = {
//   text: string; // 단계별로 보여줄 텍스트
//   placeholder: string; // 입력 필드의 placeholder
//   onNext: (value: string) => void; // 다음 단계로 이동하는 함수
// };

// const StepForm: React.FC<StepFormProps> = ({ text, placeholder, onNext }) => {
//   const [value, setValue] = useState("");

//   return (
//     <div>
//       <TextContainer>{text}</TextContainer>
//       <InputContainer>
//         <input
//           type="text"
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//           placeholder={placeholder}
//         />
//       </InputContainer>
//       <Button onClick={() => onNext(value)}>다음</Button>
//     </div>
//   );
// };

// export default StepForm;
