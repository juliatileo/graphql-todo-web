import { useState } from "react";

import { useMutation } from "@apollo/client";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Modal } from "@mui/material";

import { UPDATE_TODO, DELETE_TODO } from "./mutations";
import { TodoCardProps } from "./types";

import { Container, Content, Check, TodoOptions, BtnOption } from "./styled";
import { AddInput } from "../AddInput";

export const TodoCard: React.FC<TodoCardProps> = ({
  todo,
  refetch,
}: TodoCardProps): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(todo.done);
  const [open, setOpen] = useState<boolean>(false);
  const [updateTodo] = useMutation(UPDATE_TODO);
  const [deleteTodo] = useMutation(DELETE_TODO);

  return (
    <Container>
      <Check
        type="checkbox"
        defaultChecked={todo.done}
        onChange={async (e) => {
          setChecked(e.target.checked);

          await updateTodo({
            variables: { id: todo.id, done: e.target.checked },
          });
        }}
      />
      <Content checked={checked}>{todo.title}</Content>
      <TodoOptions>
        <BtnOption variation="edit" onClick={() => setOpen(true)}>
          <FaEdit size={16} />
        </BtnOption>
        <BtnOption
          variation="del"
          onClick={async () => {
            await deleteTodo({ variables: { id: todo.id } });

            await refetch();
          }}
        >
          <FaTrash />
        </BtnOption>
      </TodoOptions>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AddInput
          placeholder={`Update "${
            todo.title.length >= 10 ? todo.title.substring(0, 10) : todo.title
          }"`}
          onClick={async (title: string) => {
            await updateTodo({ variables: { id: todo.id, title } });

            await refetch();

            setOpen(false);
          }}
        />
      </Modal>
    </Container>
  );
};
