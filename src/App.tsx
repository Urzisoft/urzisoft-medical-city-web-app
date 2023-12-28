import React from "react";
import RoutesMapping from "./Routes/RoutesMapping";
import { styled } from "styled-components";

const AppContainer = styled.div`
  margin-left: 15vw;
`;

function App() {
  return (
    <AppContainer>
      <RoutesMapping />
    </AppContainer>
  );
}

export default App;
