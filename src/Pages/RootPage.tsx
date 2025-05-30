import { useEffect, useRef } from "react";

import { FC } from "react";

import { motion, Variants } from "framer-motion";
import { Box, Toolbar, useTheme } from "@mui/material";
import { Navigation } from "../Navigation/Navigation";
import { MenuToggle } from "../Navigation/MenuToggle";
import { useDimensions } from "../hooks/useDimensions";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useSideMenu } from "../store/reducers/sideMenuReducer";
import { PATH } from "../Navigation/path";
import StarryBackground from "../components/StarryBackground";

/**
 * Variants for the framer motion sidebar
 */
const sidebarVariants: Variants = {
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

/**
 * Variants for the framer motion container
 */
const navContainerVariants: Variants = {
  open: {
    height: "100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  closed: {
    height: "80px",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      delay: 0.2, // Delay to sync with the sidebar closing animation
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
  const location = useLocation();
  const isOpen = sideMenu.open;

  useEffect(() => {
    if (location.pathname === PATH.HOME) {
      navigate(PATH.PROJECTS);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <>
      <StarryBackground />
      <Box
        id="sidebar"
        component={motion.nav}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        variants={navContainerVariants}
        ref={containerRef}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          width: "300px",
          height: isOpen ? "100%" : "80px",
          zIndex: 1000,
          overflow: "visible",
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
            backgroundColor: theme.palette.secondary.dark,
            borderRight: `1px solid ${theme.palette.divider}`,
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", // shadow when opened
          }}
          variants={sidebarVariants}
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
