import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid2 as Grid,
  Avatar,
  useTheme,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

export const ProjectsPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ padding: theme.spacing(3) }}>
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
          <CardMedia
            component="img"
            height="140"
            image="/path-to-your-image.jpg"
            alt="Project Image"
            sx={{
              backgroundColor: theme.palette.grey[800],
              marginBottom: theme.spacing(2),
            }}
          />
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
          <Button variant="contained" color="secondary" sx={{ width: "30%" }}>
            Action
          </Button>
        </CardContent>
      </Card>

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
  );
};
