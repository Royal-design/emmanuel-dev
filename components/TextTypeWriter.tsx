"use client";

import { TypeAnimation } from "react-type-animation";

interface TextTypeWriterProps {
  sequence: (string | number)[];
}

export const TextTypeWriter: React.FC<TextTypeWriterProps> = ({ sequence }) => {
  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ display: "block" }}
    />
  );
};
