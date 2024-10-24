import { useRef } from "react";
import {
  Box,
  Container,
  Divider,
  IconButton,
  Link,
  Paper,
  Typography,
  useTheme,
  Avatar,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import profileImg from "../assets/profile_2.png";

import { FC } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { Experience } from "../features/resume/Experience";
import { Skills } from "../features/resume/Skills";
import { Strengths } from "../features/resume/Strengths";
import { Achievements } from "../features/resume/Achievements";
import { OpenSourceContributions } from "../features/resume/OpenSourceContributions";
import { useReactToPrint } from "react-to-print";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

export const RootPage: FC = () => {
  const componentRef = useRef(null);
  const theme = useTheme();

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "Daniel_Yo_Resume",
  });

  return (
    <Container maxWidth="lg" sx={{ paddingY: 4 }}>
      <Button
        color="primary"
        onClick={() => handlePrint()}
        startIcon={<PictureAsPdfIcon />}
      >
        Export to PDF
      </Button>
      <div ref={componentRef}>
        <Paper elevation={3} sx={{ marginTop: 4, overflow: "hidden" }}>
          <Grid container columns={12}>
            <Grid size={{ xs: 12, md: 8 }} sx={{ padding: 4 }}>
              <Profile />
              <Divider sx={{ marginY: 2 }} />
              <Experience />
              <Divider sx={{ marginY: 2 }} />
              <OpenSourceContributions />
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
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start", // This centers the content vertically
              }}
            >
              <Avatar
                src={profileImg}
                alt="Profile Picture"
                variant="square"
                sx={{
                  width: 150,
                  height: 150,
                  borderRadius: "50%",
                  mb: 4,
                  border: `4px solid ${theme.palette.background.paper}`,
                  "& img": {
                    objectFit: "fill",
                  },
                }}
              />
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
      </div>
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
        <IconButton
          component={Link}
          href="https://dpyo.xyz"
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
          aria-label="Personal Website"
        >
          <LanguageIcon />
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
