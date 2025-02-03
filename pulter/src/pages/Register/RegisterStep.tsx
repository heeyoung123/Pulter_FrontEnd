import { useMyFunnel } from "@/context/funnelContext";
import { TEXT } from "@/constants/text";
import React from "react";
import REGISTER from "./Register";

const RegisterStep: React.FC = () => {
  const funnel = useMyFunnel();

  return (
    <funnel.Render
      plantName={({ history }) => (
        <REGISTER
          text={TEXT.plantName_text}
          placeholder={TEXT.plantName_placeholder}
          buttonText={TEXT.next_text}
          onNext={(plantName) => history.push("plantDate", { plantName })}
        />
      )}
      plantDate={({ history }) => (
        <REGISTER
          text={TEXT.plantDate_text}
          placeholder={TEXT.plantDate_placeholder}
          buttonText={TEXT.next_text}
          onNext={(plantDate) => history.push("plantType", { plantDate })}
        />
      )}
      plantType={({ history }) => (
        <REGISTER
          text={TEXT.plantType_text}
          placeholder={TEXT.plantType_placeholder}
          buttonText={TEXT.next_text}
          onNext={(plantType) => history.push("plantLocation", { plantType })}
        />
      )}
      plantLocation={({ context }) => (
        <REGISTER
          text={TEXT.plantLocation_text}
          placeholder={TEXT.plantLocation_placeholder}
          buttonText={TEXT.end_text}
          onNext={(plantLocation) =>
            console.log("등록 완료:", { ...context, plantLocation })
          }
        />
      )}
    />
  );
};

export default RegisterStep;
