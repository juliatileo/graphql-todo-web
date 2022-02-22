import { useState } from "react";

import { FaCheck } from "react-icons/fa";

import { AddInputProps } from "./types";

import { Container, Input, BtnCheck } from "./styled";

export const AddInput: React.FC<AddInputProps> = ({
  onClick,
}: AddInputProps): JSX.Element => {
  const [title, setTitle] = useState<string>();

  let inputEl: HTMLInputElement;

  return (
    <Container
      onSubmit={async (e) => {
        e.preventDefault();

        if (title) {
          await onClick(title);

          inputEl.value = "";
        }
      }}
    >
      <Input
        type="text"
        placeholder="Type here..."
        onChange={(e) => setTitle(e.target.value)}
        ref={(el) => {
          if (el) inputEl = el;
        }}
      />
      <BtnCheck type="submit">
        <FaCheck size={20} />
      </BtnCheck>
    </Container>
  );
};
