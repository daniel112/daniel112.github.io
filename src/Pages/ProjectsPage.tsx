import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  useTheme,
  Container,
  useMediaQuery,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { ProjectCategories } from "../features/projects/ProjectCategories";

export const ProjectsPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        width: isMobile ? "90%" : "80%",
        my: theme.spacing(3),
      }}
    >
      <Card>
        <Box sx={{ backgroundColor: theme.palette.primary.main }}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: theme.spacing(2),
              }}
            >
              <Avatar
                sx={{
                  bgcolor: theme.palette.success.main,
                  marginRight: theme.spacing(1),
                }}
              >
                <PersonIcon />
              </Avatar>
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {[...Array(4)].map((_, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: "15%",
                      height: 10,
                      backgroundColor: theme.palette.grey[300],
                    }}
                  />
                ))}
              </Box>
            </Box>
            <Typography
              variant="h4"
              fontWeight={"bold"}
              color={theme.palette.primary.contrastText}
            >
              Showcasing a portfolio of past and current projects
            </Typography>
            <Typography
              variant="subtitle1"
              width={"60%"}
              marginY={2}
              color={theme.palette.primary.contrastText}
            >
              Throughout my career, I've had the privilege of working on a
              diverse range of projects, both professionally and personally.
              Below, you'll find a curated selection of my work. While some
              earlier projects may no longer be live, I've provided links to
              archived versions where available, offering a comprehensive view
              of my journey and growth in the field.
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ backgroundColor: theme.palette.background.paper }}>
          <CardContent>
            <ProjectCategories />
          </CardContent>
        </Box>
      </Card>
    </Container>
  );
};
