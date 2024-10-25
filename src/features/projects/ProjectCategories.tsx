import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid2 as Grid,
} from "@mui/material";
import { ProjectCategoryPill } from "./ProjectCategoryPill";
import { ProjectCategory } from "./types";
import theme from "../../theme";

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
        {[...Array(3)].map((_, index) => (
          <Grid key={index} size={{ xs: 12, sm: 4 }}>
            <Card elevation={0}>
              <CardMedia
                component="img"
                height="140"
                image="/path-to-your-image.jpg"
                alt="Project Image"
                sx={{ backgroundColor: theme.palette.grey[800] }}
              />
              <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                {[...Array(3)].map((_, lineIndex) => (
                  <Box
                    key={lineIndex}
                    sx={{
                      width: "100%",
                      height: 10,
                      backgroundColor: theme.palette.grey[300],
                      marginBottom: theme.spacing(1),
                    }}
                  />
                ))}
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    marginTop: theme.spacing(2),
                    width: "fit-content",
                    alignSelf: "center",
                  }}
                >
                  Action
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
