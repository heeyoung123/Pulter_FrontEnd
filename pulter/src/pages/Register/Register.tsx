import { TextContainer, InputContainer } from "./style";
import { Button } from "@/components/button/Button";
import { CommonContainer } from "@/shared/container";
const REGISTER: React.FC = () => {
  return (
    <CommonContainer>
      <TextContainer></TextContainer>
      <InputContainer />
      <Button>다음</Button>
    </CommonContainer>
  );
};
export default REGISTER;
