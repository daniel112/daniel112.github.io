import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box, Button, useTheme } from "@mui/material";
import { ProjectCategory, ProjectCategoryPill } from "./ProjectCategoryPill";

export const ProjectCategories: React.FC = () => {
  const theme = useTheme();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(
    ProjectCategory.APPS
  );
  return (
    <Box>
      <ProjectCategoryPill
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    </Box>
  );
};
