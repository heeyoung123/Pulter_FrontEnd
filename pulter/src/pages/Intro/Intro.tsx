import Plant from "../../assets/intro/Plant.svg?react";
import { IntroContainer, Title, SubTitle, StartText } from "./style";
import { TEXT } from "@/constants/text";
import React, { useEffect } from "react";
import { useTimerStore } from "@/stores/timerStore";
import { useNavigate } from "react-router-dom";
const INTRO: React.FC = () => {
  const { count, startTimer } = useTimerStore();
  const nav = useNavigate();

  useEffect(() => {
    startTimer(() => nav("/register"));
  }, [startTimer, nav]);
  return (
    <>
      <Plant />
      <IntroContainer>
        <Title>
          {TEXT.title} <SubTitle>{TEXT.sub_title}</SubTitle>
        </Title>
        <StartText>
          {TEXT.intro_start} <div>{count}</div>
        </StartText>
      </IntroContainer>
    </>
  );
};

export default INTRO;
