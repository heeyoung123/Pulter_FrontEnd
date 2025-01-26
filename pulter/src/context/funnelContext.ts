// context/funnelContext.ts

import { useFunnel } from "@use-funnel/react-router-dom";
import type {
  plantName,
  plantType,
  plantDate,
  plantLocation,
} from "../context/context.ts";

export function useMyFunnel() {
  return useFunnel<{
    plantName: plantName;
    plantType: plantType;
    plantDate: plantDate;
    plantLocation: plantLocation;
  }>({
    id: "register",
    initial: {
      step: "plantName",

      context: {
        plantName: "",
        plantDate: "",
        plantType: "",
        plantLocation: "",
      },
    },
  });
}
