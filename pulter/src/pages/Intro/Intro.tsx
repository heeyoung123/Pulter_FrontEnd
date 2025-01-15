import Plant from "../../assets/intro/Plant.svg?react";
import { IntroContainer, Title, SubTitle } from "./style";
import { TEXT } from "@/constants/text";

const INTRO: React.FC = () => {
  return (
    <>
      <Plant />
      <IntroContainer>
        <Title>
          {TEXT.title} <SubTitle>{TEXT.sub_title}</SubTitle>
        </Title>
      </IntroContainer>
    </>
  );
};

export default INTRO;
