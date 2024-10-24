import { motion } from "framer-motion";
import { List } from "@mui/material";
import { MenuItem } from "./MenuItem";
import { PATH } from "./path";
import HomeIcon from "@mui/icons-material/Home";
import FeedIcon from "@mui/icons-material/Feed";

export interface DrawerItemProps {
  text: string;
  MaterialIcon: JSX.Element;
  toPage: string;
}
const drawerItems: DrawerItemProps[] = [
  {
    text: "Home",
    MaterialIcon: <HomeIcon color="primary" />,
    toPage: PATH.HOME,
  },
  {
    text: "Resume",
    MaterialIcon: <FeedIcon color="primary" />,
    toPage: PATH.RESUME,
  },
];

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <List
    component={motion.ul}
    variants={variants}
    sx={{
      position: "absolute",
      top: "100px",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    }}
  >
    {drawerItems.map((item: DrawerItemProps, i) => (
      <MenuItem key={i} item={item} />
    ))}
  </List>
);
