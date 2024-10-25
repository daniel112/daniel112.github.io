import React, { FC } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid2 as Grid,
  Avatar,
  useTheme,
  Container,
  useMediaQuery,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { ProjectCategories } from "../features/projects/ProjectCategories";

const GradientBackground: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          background: theme.palette.background.paper,
          // background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        }}
      />
      <Box>{children}</Box>
    </>
  );
};

export const ProjectsPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <GradientBackground>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          width: isMobile ? "90%" : "80%",
          my: theme.spacing(3), // Add some vertical margin
        }}
      >
        <Box>
          <Card
            sx={{
              backgroundColor: theme.palette.warning.light,
              marginBottom: theme.spacing(3),
            }}
          >
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
              <Typography variant="h4" fontWeight={"bold"}>
                Showcasing a portfolio of past and current projects
              </Typography>
              <Typography variant="subtitle1" width={"50%"} marginY={2}>
                Throughout my career, I've had the privilege of working on a
                diverse range of projects, both professionally and personally.
                Below, you'll find a curated selection of my work. While some
                earlier projects may no longer be live, I've provided links to
                archived versions where available, offering a comprehensive view
                of my journey and growth in the field.
              </Typography>
              <Box sx={{ marginBottom: theme.spacing(2) }}>
                {[...Array(3)].map((_, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: "100%",
                      height: 10,
                      backgroundColor: theme.palette.grey[300],
                      marginBottom: theme.spacing(1),
                    }}
                  />
                ))}
              </Box>
              <Button
                variant="contained"
                color="secondary"
                sx={{ width: "30%" }}
              >
                Action
              </Button>
            </CardContent>
          </Card>
          <ProjectCategories />
          <Grid container spacing={3}>
            {[...Array(3)].map((_, index) => (
              <Grid key={index} size={{ xs: 12, sm: 4 }}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/path-to-your-image.jpg"
                    alt="Project Image"
                    sx={{ backgroundColor: theme.palette.grey[800] }}
                  />
                  <CardContent>
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
                      sx={{ marginTop: theme.spacing(2) }}
                    >
                      Action
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </GradientBackground>
  );
};
