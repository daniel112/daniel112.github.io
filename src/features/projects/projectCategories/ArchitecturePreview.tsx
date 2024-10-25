import React, { useState } from "react";
import { ProjectCategory, ProjectData } from "../types";
import { ProjectPreviewCard } from "./ProjectPreviewCard";
import { SimpleDialog } from "../../../components/dialogs/SimpleDialog";
import { Grid2 as Grid, Typography, Box } from "@mui/material";
import { TechnologyChips } from "../TechnologyChips";

const data: ProjectData[] = [
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
    category: ProjectCategory.ARCHITECTURE,
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
];

export const ArchitecturePreview: React.FC = () => {
  const [selectedArchitecture, setSelectedArchitecture] =
    useState<ProjectData | null>(null);

  const handleCardClick = (architecture: ProjectData) => {
    setSelectedArchitecture(architecture);
  };

  const handleCloseDialog = () => {
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
              <iframe
                width="100%"
                height="600"
                src="https://miro.com/app/embed/uXjVLRXUv-U=/?pres=1&frameId=3458764604658780043&embedId=627782529189"
                frameBorder="0"
                scrolling="no"
                allow="fullscreen; clipboard-read; clipboard-write"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ p: 2 }}>
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
