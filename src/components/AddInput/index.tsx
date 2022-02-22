import { useState } from "react";

import { FaCheck } from "react-icons/fa";
import { useMutation } from "@apollo/client";

import { ADD_TODO } from "./mutations";

import { AddInputProps } from "./types";

import { Container, Input, BtnCheck } from "./styled";

export const AddInput: React.FC<AddInputProps> = ({
  refetch,
}: AddInputProps): JSX.Element => {
  const [title, setTitle] = useState<string>();
  const [addTodo] = useMutation(ADD_TODO);

  let inputEl: HTMLInputElement;

  return (
    <Container>
      <Input
        type="text"
        placeholder="Type here..."
        onChange={(e) => setTitle(e.target.value)}
        ref={(el) => {
          if (el) inputEl = el;
        }}
      />
      <BtnCheck
        onClick={async () => {
          if (title) {
            await addTodo({ variables: { title } });
            await refetch();

            inputEl.value = "";
          }
        }}
      >
        <FaCheck size={20} />
      </BtnCheck>
    </Container>
  );
};
