import { gql } from "@apollo/client";

export const ADD_TODO = gql`
  mutation createTodo($title: String!) {
    createTodo(title: $title) {
      id
    }
  }
`;
