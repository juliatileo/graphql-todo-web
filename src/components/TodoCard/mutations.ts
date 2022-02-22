import { gql } from "@apollo/client";

export const UPDATE_TODO = gql`
  mutation updateTodo($id: ID!, $title: String, $done: Boolean) {
    updateTodo(id: $id, title: $title, done: $done) {
      id
    }
  }
`;

export const DELETE_TODO = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      id
    }
  }
`;
