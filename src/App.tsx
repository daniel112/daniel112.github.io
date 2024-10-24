import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootPage } from "./Pages/RootPage";
import { Provider } from "react-redux";
import { store } from "./store";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import { ResumePage } from "./Pages/ResumePage";
import { PATH } from "./Navigation/path";
import { ProjectsPage } from "./Pages/ProjectsPage";

const router = createBrowserRouter([
  {
    path: PATH.HOME,
    Component: RootPage,
    children: [
      {
        path: PATH.RESUME,
        Component: ResumePage,
      },
      {
        path: PATH.PROJECTS,
        Component: ProjectsPage,
      },
    ],
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
