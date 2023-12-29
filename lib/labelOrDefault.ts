import { Label } from "@/types";

export const labelOrDefault = (label?: Label) => {
  if (!label) {
    return "";
  }
  return (label.en || label.ar || label[Object.keys(label)[0]]) ?? "";
};
