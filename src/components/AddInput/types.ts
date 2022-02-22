import { ApolloQueryResult, OperationVariables } from "@apollo/client";

export interface AddInputProps {
  onClick: (title: string) => Promise<void>;
}
