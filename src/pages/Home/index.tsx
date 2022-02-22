import { useQuery } from "@apollo/client";

import { TodoCard } from "../../components/TodoCard";
import { AddInput } from "../../components/AddInput";
import { Loading } from "../../components/Loading";

import { LIST_TODOS } from "./queries";
import { Todo } from "./types";

import { Container, CardContainer, InputContainer } from "./styled";

export const Home: React.FC = (): JSX.Element => {
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
        <AddInput refetch={refetch} />
      </InputContainer>
    </Container>
  );
};
