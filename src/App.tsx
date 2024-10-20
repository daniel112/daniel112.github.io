import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Flex id="main" height={"100vh"} width={"100vw"}>
      <Outlet />
    </Flex>
  );
}

export default App;
