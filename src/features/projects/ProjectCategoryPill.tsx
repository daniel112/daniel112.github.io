import React from "react";
import { motion } from "framer-motion";
import { Button, Paper, useTheme } from "@mui/material";
import { ProjectCategory } from "./types";

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
    <Paper
      elevation={3}
      sx={{
        width: "fit-content",
        display: "inline-flex",
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "50px",
        padding: "5px",
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
            fontWeight: activeCategory === category ? "bold" : "normal",
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
    </Paper>
  );
};
