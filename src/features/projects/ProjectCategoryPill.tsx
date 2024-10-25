import React from "react";
import { motion } from "framer-motion";
import { Button, Paper, useTheme, useMediaQuery } from "@mui/material";
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
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Paper
      elevation={2}
      sx={{
        width: "100%",
        maxWidth: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor: theme.palette.secondary.main,
        borderRadius: isMobile ? "20px" : "30px",
        padding: isMobile ? "2px" : "3px",
      }}
    >
      {Object.values(ProjectCategory).map((category) => (
        <motion.div
          key={category}
          initial={false}
          animate={{
            scale: activeCategory === category ? 1.03 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        >
          <Button
            onClick={() => setActiveCategory(category)}
            sx={{
              borderRadius: isMobile ? "18px" : "25px",
              minWidth: "auto",
              px: isMobile ? 1 : 1.5,
              py: 0.25,
              m: 0.25,
              position: "relative",
              fontWeight: activeCategory === category ? "bold" : "normal",
              color:
                activeCategory === category
                  ? theme.palette.primary.contrastText
                  : theme.palette.text.primary,
              fontSize: isMobile ? "0.75rem" : "0.875rem",
              lineHeight: 1.2,
              boxShadow:
                activeCategory === category
                  ? `0 0 4px 1px ${theme.palette.primary.main}40`
                  : "none",
              transition: "box-shadow 0.3s ease-in-out",
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
                  borderRadius: isMobile ? "18px" : "25px",
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
        </motion.div>
      ))}
    </Paper>
  );
};
