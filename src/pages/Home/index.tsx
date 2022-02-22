import { useMutation, useQuery } from "@apollo/client";

import { TodoCard } from "../../components/TodoCard";
import { AddInput } from "../../components/AddInput";
import { Loading } from "../../components/Loading";

import { ADD_TODO } from "./mutations";
import { LIST_TODOS } from "./queries";
import { Todo } from "./types";

import { Container, CardContainer, InputContainer } from "./styled";

export const Home: React.FC = (): JSX.Element => {
  const [addTodo] = useMutation(ADD_TODO);
  const { loading, data, refetch } = useQuery(LIST_TODOS);
  let todos: Todo[] = data?.todos;

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <CardContainer>
        {todos?.map((todo) => (
          <TodoCard key={todo.id} todo={todo} refetch={refetch} />
        ))}
      </CardContainer>
      <InputContainer>
        <AddInput
          placeholder="Create a todo..."
          onClick={async (title: string) => {
            await addTodo({ variables: { title } });
            await refetch();
          }}
        />
      </InputContainer>
    </Container>
  );
};
