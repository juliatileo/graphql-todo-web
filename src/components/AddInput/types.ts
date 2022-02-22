import { ApolloQueryResult, OperationVariables } from "@apollo/client";

export interface AddInputProps {
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<any>>;
}
