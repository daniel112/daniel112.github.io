import { Grid2 as Grid, Box, Typography } from "@mui/material";
import { SimpleDialog } from "../../../components/dialogs/SimpleDialog";
import { TechnologyChips } from "../TechnologyChips";
import { ProjectCategory, ProjectData } from "../types";
import { ProjectPreviewCard } from "./ProjectPreviewCard";
import { useState } from "react";
import { useIsMobileWidth } from "../../../hooks/useIsMobileWidth";
import { HorizontalImageList } from "../../../components/imageDisplay/HorizontalImageList";

interface AppData extends ProjectData {
  appImages: string[];
}

const data: AppData[] = [
  {
    appImages: [
      "/projectAssets/apps/alchemy/img1.png",
      "/projectAssets/apps/alchemy/img2.png",
      "/projectAssets/apps/alchemy/img3.png",
      "/projectAssets/apps/alchemy/img4.png",
      "/projectAssets/apps/alchemy/img5.png",
    ],
    title: "Web: Alchemy Employee Tool",
    description:
      "The Alchemy Web App is a tool for instant feedback, coaching, and career development designated for use by internal employees",
    details: `
    This is an internal initiative that I have led and developed from the ground up for the last 2 years. During this time, I have worn many hats and collaborated across various departments, including:

    - IT (for data security and compliance)
    - HR (for compliance)
    - UI/UX (for low and high fidelity designs, usability interviews)
    - Dev Team (architecture design, planning, and implementation)

    Implementation-wise, we follow a feature-driven design with a focus on reusable components. 
    <a href="https://neudesic.github.io/alchemy/?path=/docs/features-managers-my-direct-reports--docs" target="_blank">This storybook</a> provides a high-level overview of how we structure our components and features.

    We also adhere to a rigid structure and documentation due to the project being innersource, allowing any internal employee to contribute. Documentation includes:

    - PR Templates
    - Feature Wikis
    - ADRs
    - READMEs
    - SPIKE Docs
    `,
    image: "/projectAssets/apps/alchemy/image.png",
    category: ProjectCategory.APPS,
    technologies: [
      "React",
      "Azure Static Web App",
      "Typescript",
      "Vite v5",
      "Vitest",
      "Storybook v8",
      "React Query",
      "Firebase Hosting",
      "Docker",
      "MUI",
    ],
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
    title: "Mobile: HomePro App",
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
  {
    appImages: [
      "/projectAssets/apps/piedmontese-beef/img1.png",
      "/projectAssets/apps/piedmontese-beef/img2.png",
      "/projectAssets/apps/piedmontese-beef/img3.png",
      "/projectAssets/apps/piedmontese-beef/img4.png",
      "/projectAssets/apps/piedmontese-beef/img5.png",
    ],
    title: "Mobile: Piedmontese Beef App",
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
];

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
                <HorizontalImageList images={selectedApp.appImages} />
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
                <Typography
                  variant="body1"
                  style={{ whiteSpace: "pre-line" }}
                  dangerouslySetInnerHTML={{
                    __html: selectedApp.details ?? "",
                  }}
                ></Typography>
              </Box>
            </Grid>
          </Grid>
        )}
      </SimpleDialog>
    </>
  );
};
