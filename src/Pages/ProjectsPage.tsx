import React, { useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  useTheme,
  Container,
  useMediaQuery,
} from "@mui/material";
import { ProjectCategories } from "../features/projects/projectCategories/ProjectCategories";
import {
  SocialMediaButton,
  SocialMediaButtonProps,
} from "../features/projects/SocialMediaButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { SOCIAL_MEDIA_URLS } from "../constants";
import FeedIcon from "@mui/icons-material/Feed";
import { useLottie } from "lottie-react";
import heroAnimation from "../assets/lottie/hero.json";

const socialMediaButtons: SocialMediaButtonProps[] = [
  {
    Icon: LinkedInIcon,
    label: "LinkedIn",
    color: "#0077B5",
    url: SOCIAL_MEDIA_URLS.linkedin,
  },
  {
    Icon: GitHubIcon,
    label: "GitHub",
    color: "#333",
    url: SOCIAL_MEDIA_URLS.github,
  },
  {
    Icon: EmailIcon,
    label: "Email",
    color: "#333",
    url: SOCIAL_MEDIA_URLS.email,
  },
  {
    Icon: FeedIcon,
    label: "Resume",
    color: "#022524",
    url: "#/resume",
  },
];

export const ProjectsPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        width: isMobile ? "95%" : "70%",
        py: theme.spacing(2),
      }}
    >
      <Card sx={{ border: `1px solid ${theme.palette.divider}` }}>
        <Box sx={{ backgroundColor: theme.palette.primary.main }}>
          <CardContent sx={{ py: isMobile ? 2 : 3 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: theme.spacing(2),
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: 2,
                }}
              >
                {socialMediaButtons.map((button, index) => (
                  <SocialMediaButton key={index} {...button} />
                ))}
              </Box>
            </Box>
            <Typography
              variant={isMobile ? "h5" : "h4"}
              fontWeight={"bold"}
              color={theme.palette.primary.contrastText}
              sx={{ mb: isMobile ? 1 : 2 }}
            >
              Showcasing a portfolio of past and current projects
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant={isMobile ? "body2" : "subtitle1"}
                width={isMobile ? "100%" : "70%"}
                marginY={isMobile ? 1 : 2}
                color={theme.palette.primary.contrastText}
              >
                Throughout my career, I've had the privilege of working on a
                diverse range of projects, both professionally and personally.
                Below, you'll find a curated selection of my work. While some
                earlier projects may no longer be live, I've provided links to
                archived versions where available, offering a comprehensive view
                of my journey and growth in the field.
              </Typography>
              {!isMobile && <LottieView />}
            </Box>
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

const LottieView = () => {
  const { View, setSpeed } = useLottie(
    {
      animationData: heroAnimation,
      loop: true,
      autoplay: true,
    },
    {
      height: "160px",
    }
  );
  useEffect(() => {
    setSpeed(0.5);
  }, [setSpeed]);

  return View;
};
