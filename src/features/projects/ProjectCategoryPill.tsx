import React from "react";
import { motion } from "framer-motion";
import { Box, Button, useTheme } from "@mui/material";

export enum ProjectCategory {
  APPS = "Apps",
  OPEN_SOURCE = "Open Source",
  ARCHITECTURE = "Architecture",
  ARTICLES = "Articles",
}
interface ProjectCategoryPillProps {
  activeCategory: ProjectCategory;
  setActiveCategory: (category: ProjectCategory) => void;
}

export const ProjectCategoryPill: React.FC<ProjectCategoryPillProps> = ({
  activeCategory,
  setActiveCategory,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "inline-flex",
        backgroundColor: theme.palette.background.paper,
        borderRadius: "50px",
        padding: "5px",
        boxShadow: theme.shadows[3],
      }}
    >
      {Object.values(ProjectCategory).map((category) => (
        <Button
          key={category}
          onClick={() => setActiveCategory(category)}
          sx={{
            borderRadius: "50px",
            minWidth: "auto",
            px: 2,
            py: 1,
            position: "relative",
            color:
              activeCategory === category
                ? theme.palette.primary.contrastText
                : theme.palette.text.primary,
          }}
        >
          {activeCategory === category && (
            <motion.div
              layoutId="activeCategory"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: theme.palette.primary.main,
                borderRadius: "50px",
                zIndex: -1,
              }}
              initial={false}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
            />
          )}
          {category}
        </Button>
      ))}
    </Box>
  );
};
