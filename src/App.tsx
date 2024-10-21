import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootPage } from "./Pages/RootPage";
import { Provider } from "react-redux";
import { store } from "./store";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootPage,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Box id="main" height={"100vh"} width={"100vw"}>
          <RouterProvider router={router} />
        </Box>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
