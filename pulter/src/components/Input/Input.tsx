import * as S from "../Input/Input.style";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = (props) => {
  return <S.InputContainer {...props} />;
};
