import { ApolloQueryResult, OperationVariables } from "@apollo/client";

import { Todo } from "../../pages/Home/types";

export interface TodoCardProps {
  todo: Todo;
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<any>>;
}
