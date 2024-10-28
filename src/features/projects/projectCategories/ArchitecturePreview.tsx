import React, { useState } from "react";
import { ProjectCategory, ProjectData } from "../types";
import { ProjectPreviewCard } from "./ProjectPreviewCard";
import { SimpleDialog } from "../../../components/dialogs/SimpleDialog";
import { Grid2 as Grid, Typography, Box, Skeleton } from "@mui/material";
import { TechnologyChips } from "../TechnologyChips";
import { useIsMobileWidth } from "../../../hooks/useIsMobileWidth";

interface ArchitectureData extends ProjectData {
  architectureDiagramUrl: string;
}

const data: ArchitectureData[] = [
  {
    title: "Real-time audio translation",
    description:
      "High level diagram of my real-time audio transcription & translation app",
    image: "/projectAssets/realtime-audio-arc.jpg", // from public folder
    details: `
    This architecture diagram outlines the core features and structure of the real-time audio translation project I worked on. It illustrates how the web application interacts with a local Whisper model to process audio input. The diagram is divided into three main sections:\n
    1. High Level Architecture: This shows the flow from the frontend application to the backend server, highlighting how audio data is captured and processed through the transcription (using the local Whisper model) and translation stages\n
    2. AutoCorrect Feature: Depicted as two parallel threads for audio processing and translation, this feature aims to enhance the accuracy of the real-time transcription and translation.\n
    3. Summarize Feature: A flowchart demonstrating how the system can generate summaries of the transcribed and translated content.\n
    `,
    architectureDiagramUrl:
      "https://miro.com/app/embed/uXjVLRXUv-U=/?pres=1&frameId=3458764604658780043&embedId=627782529189",
    category: ProjectCategory.DIAGRAMS,
    technologies: [
      "OpenAI Whisper",
      "OpenAI GPT3-5",
      "React",
      "Chakra UI",
      "ElevenLabs",
      "Python",
      "FFMPEG",
      "WebRTC",
      "WebSockets",
    ],
  },
  {
    title: ".NET Auth API Microservice",
    description:
      "Microservice sequence diagram for a custom Auth API I worked on for a project utilizing EF Core and Azure KeyVault",
    image: "/projectAssets/auth-microservice-arc.png", // from public folder
    details: `
    The goal of this project was to create a microservice for the Auth layer where Admins could manage users and roles granularly. Granting them specific roles and claims without having to mess with Azure AD.

    The WebApp would call the Auth API during which it would validate the user and provide any additional roles or claims needed for that specific user for the given application.
    `,
    category: ProjectCategory.DIAGRAMS,
    technologies: ["Azure KeyVault", "EF Core", "MSSQL", "Swagger UI"],
    architectureDiagramUrl:
      "https://lucid.app/documents/embedded/7ae5aad4-6b1e-41de-a715-5a700b22b1e8",
  },
  {
    title: "App Lifecycle Management Diagram",
    description:
      "An ALM diagram for an enterprise application I led showcasing the different stages of this particular product's lifecycle",
    image: "/projectAssets/alm-arc.png", // from public folder
    details: `
    Having a clear visual representation of the different stages of the product lifecycle was crucial for this project due to the fact that this project is innersource and we want to allow other teams to contribute to the project.

    Every stage has a clearly defined purpose and is represented by a different color and the last three stages have been fully automated to reduce manual overhead and developer error.
    `,
    category: ProjectCategory.DIAGRAMS,
    technologies: [
      "Github Actions",
      "Firebase Hosting",
      "Azure Bicep",
      "Azure App Service",
      "Azure Static Web App",
      "CosmosDB",
      "Figma",
      "Miro",
      "Vitest",
      "Xunit",
    ],
    architectureDiagramUrl:
      "https://lucid.app/documents/embedded/74881fe3-a8e3-443b-9b96-7b4bb87c35b9",
  },
  {
    title: "My Wedding App",
    description:
      "Simple architecture diagram of the gamified App I created and used for my own wedding.",
    image: "/projectAssets/wedding-arc.png", // from public folder
    details: `
    This application features a simple and secure architecture, with automated deployment via GitHub Actions triggered on any push to the main branch. A service account manages secure image transfers from the API to a private Google Drive folder. Both the WebApp and API are deployed to their respective Azure resources.

    1. Frontend:
      - React app built in JavaScript with Chakra UI as the component library.\n
      - Designed mobile-first for responsiveness.

    2. Backend:
       - Web API using Express.js and Javascript

    3. External Services:
       - Google Drive API for image management and security
    `,
    category: ProjectCategory.DIAGRAMS,
    technologies: [
      "React",
      "Chakra UI",
      "Javascript",
      "Google Drive API",
      "Google Service Account",
      "Express.js",
      "Azure Static Web Apps",
      "Azure App Service",
    ],
    architectureDiagramUrl:
      "https://lucid.app/documents/embedded/88f123d8-cd8f-404e-ab98-337cca8da08a",
  },
  {
    title: "B2B White Label SaaS App",
    description:
      "Early stage architecture diagram of a B2B app focusing on quick white label deploys",
    image: "/projectAssets/tribeshare-arc.png", // from public folder
    details: `
    This architecture diagram outlines the core structure of the Web and Mobile applications for an early stage startup. All maincomponents are enclosed within the AWS ecosystem, and the pieces can be broken down into the following:\n
    1. Frontend Applications:
       - Mobile App (Progressive Web App)
       - Web Dashboard (Server Side React App)

    2. Backend Components:
       - Web API (App Runner)
        - MySQL Server
        - Amazon RDS
        - S3

    3. External Services:
       - Sentry: Used for analytics and logging, providing error tracking and performance monitoring
    `,
    category: ProjectCategory.DIAGRAMS,
    technologies: [
      "AWS",
      "MySQL",
      "AWS App Runner",
      "Amazon RDS",
      "AWS Amplify Hosting",
      "Sentry.io",
      "Amazon S3",
      "React",
      "NextJS",
      "NodeJS",
    ],
    architectureDiagramUrl:
      "https://lucid.app/documents/embedded/f13a3b95-a97a-4d1d-bd5f-3de6b8f09522",
  },
];

/**
 * Shows an iframe of the architecture diagram and more details about the project
 */
export const ArchitecturePreview: React.FC = () => {
  const [selectedArchitecture, setSelectedArchitecture] =
    useState<ArchitectureData | null>(null);
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const handleCardClick = (architecture: ArchitectureData) => {
    setSelectedArchitecture(architecture);
  };
  const isMobileWidth = useIsMobileWidth();

  const handleCloseDialog = () => {
    setIsIframeLoading(true);
    setSelectedArchitecture(null);
  };

  return (
    <>
      {data.map((architecture) => (
        <ProjectPreviewCard
          onClick={() => handleCardClick(architecture)}
          ctaTitle="View Architecture"
          key={architecture.title}
          {...architecture}
        />
      ))}
      <SimpleDialog
        open={!!selectedArchitecture}
        onClose={handleCloseDialog}
        title={selectedArchitecture?.title || ""}
        maxWidth="xl"
      >
        {selectedArchitecture && (
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Box position="relative" height="600px" width="100%">
                {isIframeLoading && (
                  <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    bgcolor="background.paper"
                  >
                    <Skeleton
                      variant="rectangular"
                      width="100%"
                      height="100%"
                    />
                    <Skeleton width="100%" height={40} />
                  </Box>
                )}
                <iframe
                  width="100%"
                  height="100%"
                  src={selectedArchitecture.architectureDiagramUrl}
                  frameBorder="0"
                  scrolling="no"
                  allow="fullscreen; clipboard-read; clipboard-write"
                  onLoad={() => setIsIframeLoading(false)}
                  style={{ visibility: isIframeLoading ? "hidden" : "visible" }}
                />
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
                  <TechnologyChips
                    technologies={selectedArchitecture.technologies}
                  />
                </Box>
                <Typography variant="h6">Summary</Typography>
                <Typography variant="body1" style={{ whiteSpace: "pre-line" }}>
                  {selectedArchitecture.details}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        )}
      </SimpleDialog>
    </>
  );
};
