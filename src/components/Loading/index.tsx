import ReactLoading from "react-loading";

import { Container } from "./styled";

export const Loading: React.FC = (): JSX.Element => {
  return (
    <Container>
      <ReactLoading type="spin" />
    </Container>
  );
};
