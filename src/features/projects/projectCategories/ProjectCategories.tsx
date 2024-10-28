import React, { useState } from "react";
import { Box, Grid2 as Grid } from "@mui/material";
import { ProjectCategoryPill } from "../ProjectCategoryPill";
import { ProjectCategory } from "../types";
import { ArticlesPreview } from "./ArticlesPreview";
import { ArchitecturePreview } from "./ArchitecturePreview";
import { AppsPreview } from "./AppsPreview";
import Lottie from "lottie-react";
import underConstructionAnimation from "../../../assets/lottie/under-construction.json";

export const ProjectCategories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(
    ProjectCategory.APPS
  );
  return (
    <Box
      sx={{ marginBottom: 2, gap: 2, display: "flex", flexDirection: "column" }}
    >
      <ProjectCategoryPill
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <Grid container spacing={3}>
        <ProjectPreviews category={activeCategory} />
      </Grid>
    </Box>
  );
};

interface ProjectPreviewsProps {
  category: ProjectCategory;
}
const ProjectPreviews: React.FC<ProjectPreviewsProps> = ({ category }) => {
  return (
    <>
      {category === ProjectCategory.ARTICLES && <ArticlesPreview />}
      {category === ProjectCategory.DIAGRAMS && <ArchitecturePreview />}
      {category === ProjectCategory.APPS && <AppsPreview />}
      {category === ProjectCategory.OPEN_SOURCE && (
        <Lottie
          animationData={underConstructionAnimation}
          style={{ margin: "auto" }}
        />
      )}
    </>
  );
};
