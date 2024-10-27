import { useMediaQuery, useTheme } from "@mui/material";

export const useIsMobileWidth = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down("sm"));
};
