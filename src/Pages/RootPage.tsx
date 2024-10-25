import { useEffect, useRef } from "react";

import { FC } from "react";

import { motion } from "framer-motion";
import { Box, Toolbar, useTheme } from "@mui/material";
import { Navigation } from "../Navigation/Navigation";
import { MenuToggle } from "../Navigation/MenuToggle";
import { useDimensions } from "../hooks/useDimensions";
import { Outlet, useNavigate } from "react-router-dom";
import { useSideMenu } from "../store/reducers/sideMenuReducer";
import { PATH } from "../Navigation/path";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const RootPage: FC = () => {
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const theme = useTheme();
  const {
    sideMenu,
    actions: { setOpen },
  } = useSideMenu();
  const navigate = useNavigate();
  const isOpen = sideMenu.open;

  useEffect(() => {
    if (location.pathname === PATH.HOME) {
      navigate(PATH.PROJECTS);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <>
      <Box
        id="sidebar"
        component={motion.nav}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          width: "300px",
          zIndex: 1000,
          pointerEvents: isOpen ? "auto" : "none",
          // visibility: isOpen ? "visible" : "hidden",
        }}
      >
        <Box
          id="sidebar-background"
          component={motion.div}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: "100%",
            // backgroundColor: theme.palette.secondary.main,
            backgroundColor: "red",
            borderRight: `1px solid ${theme.palette.divider}`,
          }}
          variants={sidebar}
        />
        <Navigation />
        <MenuToggle
          toggle={() => {
            setOpen(!isOpen);
          }}
        />
      </Box>
      <Box
        sx={{
          marginLeft: isOpen ? "300px" : 0,
          transition: "margin-left 0.3s",
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </>
  );
};
