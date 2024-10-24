import { motion } from "framer-motion";
import { Box, ListItemButton, ListItemIcon, Typography } from "@mui/material";
import { DrawerItemProps } from "./Navigation";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useSideMenu } from "../store/reducers/sideMenuReducer";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface MenuItemProps {
  item: DrawerItemProps;
}

export const MenuItem: FC<MenuItemProps> = ({ item }) => {
  const { text, MaterialIcon, toPage } = item;
  const navigate = useNavigate();
  const {
    actions: { setOpen },
  } = useSideMenu();
  return (
    <ListItemButton
      component={motion.li}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      selected={location.pathname === toPage}
      onClick={() => {
        navigate(toPage);
        setOpen(false);
      }}
    >
      <Box sx={{ width: "230px" }}>
        <Typography variant="h6" fontWeight={"bold"} color={"primary"}>
          {text}
        </Typography>
      </Box>
      <ListItemIcon sx={{ minWidth: "30px" }}>{MaterialIcon}</ListItemIcon>
    </ListItemButton>
  );
};
