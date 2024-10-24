import {
  Box,
  Container,
  Divider,
  IconButton,
  Link,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import { FC } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Experience } from "../features/resume/Experience";
import { Skills } from "../features/resume/Skills";
import { Strengths } from "../features/resume/Strengths";
import { Achievements } from "../features/resume/Achievements";

export const RootPage: FC = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="lg" sx={{ paddingY: 4 }}>
      <Paper elevation={3} sx={{ marginTop: 4, overflow: "hidden" }}>
        <Grid container columns={12}>
          <Grid size={{ xs: 12, md: 8 }} sx={{ padding: 4 }}>
            <Profile />
            <Divider sx={{ marginY: 2 }} />
            <Experience />
            <Divider sx={{ marginY: 2 }} />
            <Education />
          </Grid>
          <Grid
            size={{
              xs: 12,
              md: 4,
            }}
            sx={{
              backgroundColor: theme.palette.primary.main,
              padding: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Strengths />
              <Skills />
              <Achievements />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

const Education = () => {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Education
      </Typography>
      <Typography variant="body2">
        B.S. in Computer Science - Arizona State University | 2013 - 2017
      </Typography>
      <Typography variant="body2">
        Computer Gaming Certificate - Arizona State University | 2013 - 2017
      </Typography>
    </Box>
  );
};

const Profile = () => {
  return (
    <Box>
      <Typography variant="h4" fontWeight="bold">
        Daniel Yo
      </Typography>
      <Typography variant="h6" color="textSecondary">
        Full Stack Engineer | Engineering Manager | Front-end Specialist
      </Typography>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <IconButton
          component={Link}
          href="mailto:danielyo112@gmail.com"
          color="primary"
          aria-label="Email"
        >
          <EmailIcon />
        </IconButton>
        <IconButton
          component={Link}
          href="https://www.linkedin.com/in/daniel-yo/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#0077B5" }}
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component={Link}
          href="https://github.com/daniel112"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          aria-label="GitHub"
        >
          <GitHubIcon />
        </IconButton>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <LocationOnIcon color="inherit" />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
            Queen Creek, AZ
          </Typography>
        </Box>
      </Box>
      <Typography paragraph>
        Language-agnostic Software Engineer, proficient in various technologies
        and domains, including Native Mobile, Native Web, PWA, AI technologies,
        Cloud technologies, etc. Dedicated to improving development experiences
        (devEx) and optimizing DevOps procedures while maintaining a language
        and framework-agnostic approach to problem-solving.
      </Typography>
    </Box>
  );
};
