import { useState } from "react";

import { useMutation } from "@apollo/client";
import { FaTrash, FaEdit } from "react-icons/fa";

import { CHECK_TODO, DELETE_TODO } from "./mutations";
import { TodoCardProps } from "./types";

import { Container, Content, Check, TodoOptions, BtnOption } from "./styled";

export const TodoCard: React.FC<TodoCardProps> = ({
  todo,
  refetch,
}: TodoCardProps): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(todo.done);
  const [checkTodo] = useMutation(CHECK_TODO);
  const [deleteTodo] = useMutation(DELETE_TODO);

  return (
    <Container>
      <Check
        type="checkbox"
        defaultChecked={todo.done}
        onChange={async (e) => {
          setChecked(e.target.checked);

          await checkTodo({
            variables: { id: todo.id, done: e.target.checked },
          });
        }}
      />
      <Content checked={checked}>{todo.title}</Content>
      <TodoOptions>
        <BtnOption variation="edit">
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
    </Container>
  );
};
