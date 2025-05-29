import { HashRouter, Routes, Route } from "react-router-dom";
import { RootPage } from "./Pages/RootPage";
import { Provider } from "react-redux";
import { store } from "./store";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import { ResumePage } from "./Pages/ResumePage";
import { PATH } from "./Navigation/path";
import { ProjectsPage } from "./Pages/ProjectsPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Box id="main" height={"100vh"} width={"100vw"}>
          <HashRouter>
            <Routes>
              <Route path={PATH.HOME} element={<RootPage />}>
                <Route path={PATH.RESUME} element={<ResumePage />} />
                <Route path={PATH.PROJECTS} element={<ProjectsPage />} />
              </Route>
            </Routes>
          </HashRouter>
        </Box>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
