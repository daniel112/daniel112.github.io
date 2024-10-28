import { Grid2 as Grid, Box, Typography, useTheme } from "@mui/material";
import { SimpleDialog } from "../../../components/dialogs/SimpleDialog";
import { TechnologyChips } from "../TechnologyChips";
import { ProjectCategory, ProjectData } from "../types";
import { ProjectPreviewCard } from "./ProjectPreviewCard";
import { useState } from "react";
import { useIsMobileWidth } from "../../../hooks/useIsMobileWidth";

interface AppData extends ProjectData {
  appImages: string[];
}

const data: AppData[] = [
  {
    appImages: [
      "/projectAssets/apps/piedmontese-beef/img1.png",
      "/projectAssets/apps/piedmontese-beef/img2.png",
      "/projectAssets/apps/piedmontese-beef/img3.png",
      "/projectAssets/apps/piedmontese-beef/img4.png",
      "/projectAssets/apps/piedmontese-beef/img5.png",
    ],
    title: "Piedmontese Beef Mobile App",
    description:
      "Mobile app created with Xamarin Native, where users can browse Piedmontese products, nutritional information, cookbooks and more.",
    details: `
    The Piedmontese Beef Mobile App was developed to enhance customer engagement and retention among both existing and new users. The project was executed by a dedicated team comprising myself, 1 other developer and one designer. The technology stack was strategically selected to align with the company's core technologies and existing Web API infrastructure.

The team successfully delivered the Minimum Viable Product (MVP) within a three-month timeframe.

    `,
    image: "/projectAssets/apps/piedmontese-beef/appicon.webp",
    category: ProjectCategory.APPS,
    technologies: ["Xamarin", "Xamarin.iOS", "Fastlane", ".NET 6"],
  },
  {
    appImages: [
      "/projectAssets/apps/homepro/homepage.png",
      "/projectAssets/apps/homepro/img2.png",
      "/projectAssets/apps/homepro/img3.png",
      "/projectAssets/apps/homepro/img4.png",
      "/projectAssets/apps/homepro/img5.png",
      "/projectAssets/apps/homepro/img6.png",
      "/projectAssets/apps/homepro/img7.png",
      "/projectAssets/apps/homepro/img8.png",
    ],
    title: "Knock HomePro Mobile App",
    description:
      "The Knock HomePro app empowers our network of Agents with the technology to deliver thorough home visit reports in real-time.",
    details: `
    The Knock HomePro app is a tool designed specifically for Knock Certified Agents. It empowers our network of Agents with the technology to deliver thorough home visit reports in real-time. With the HomePro app, these agents can price our customers’ homes quickly and accurately, and pinpoint any home preparations that will optimize the home’s value on the market.

    In my role, I led and contributed to the technical development, testing, and deployment of this mobile app alongside two other developers.

    Key highlights of my contributions include the integration of push notifications, real-time chat functionality, and the development of a Mortgage Calculator UI, among other features.
    `,
    image: "/projectAssets/apps/homepro/image.png",
    category: ProjectCategory.APPS,
    technologies: [
      "React Native",
      "GraphQL",
      "Javascript",
      "React Native CodePush",
      "CircleCI",
      "Fastlane",
      "React Native Paper",
      "iOS",
      "Android",
      "Redux Toolkit",
      "Jest",
      "DETOX (E2E Test Framework)",
      "BugSnag (Bug Reporting)",
      "Lottie",
      "Auth0",
    ],
  },
];

const ImagesDisplay = ({ images }: { images: string[] }) => {
  const theme = useTheme();

  return (
    <>
      <Box
        height="100%"
        width="100%"
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "scroll",
          backgroundColor: theme.palette.primary.dark,
        }}
      >
        {images.map((image, index) => {
          return (
            <Box
              key={index}
              component={"img"}
              src={image}
              sx={{
                cursor: "pointer",
              }}
              onClick={() => window.open(image)}
            />
          );
        })}
      </Box>
    </>
  );
};

export const AppsPreview = () => {
  const [selectedApp, setSelectedApp] = useState<AppData | null>(null);
  const isMobileWidth = useIsMobileWidth();

  const handleCloseDialog = () => {
    setSelectedApp(null);
  };
  return (
    <>
      {data.map((appData, i) => {
        return (
          <ProjectPreviewCard
            ctaTitle={"View Details"}
            key={i}
            onClick={() => {
              setSelectedApp(appData);
            }}
            maxPreviewChip={2}
            showPreviewChips
            {...appData}
          />
        );
      })}
      <SimpleDialog
        open={!!selectedApp}
        onClose={handleCloseDialog}
        title={selectedApp?.title || ""}
        maxWidth="xl"
      >
        {selectedApp && (
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Box
                position="relative"
                height={isMobileWidth ? "400px" : "600px"}
                width="100%"
              >
                <ImagesDisplay images={selectedApp.appImages} />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  p: 2,
                  overflowY: isMobileWidth ? "inherit" : "auto",
                  height: "600px",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Technologies Used
                </Typography>
                <Box
                  sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, pb: 2 }}
                >
                  <TechnologyChips technologies={selectedApp.technologies} />
                </Box>
                <Typography variant="h6">Summary</Typography>
                <Typography variant="body1" style={{ whiteSpace: "pre-line" }}>
                  {selectedApp.details}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        )}
      </SimpleDialog>
    </>
  );
};
