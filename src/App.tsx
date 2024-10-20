import { ChakraProvider, Flex } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootPage } from "./Pages/RootPage";
import { Provider } from "react-redux";
import { store } from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootPage,
  },
]);

function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Flex id="main" height={"100vh"} width={"100vw"}>
          <RouterProvider router={router} />
        </Flex>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
