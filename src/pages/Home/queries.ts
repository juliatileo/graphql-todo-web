import { gql } from "@apollo/client";

export const LIST_TODOS = gql`
  query todos {
    todos {
      id
      title
      done
    }
  }
`;
