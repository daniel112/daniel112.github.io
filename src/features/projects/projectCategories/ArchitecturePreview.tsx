import React, { useState } from "react";
import { ProjectCategory, ProjectData } from "../types";
import { ProjectPreviewCard } from "./ProjectPreviewCard";
import { SimpleDialog } from "../../../components/dialogs/SimpleDialog";

const data: ProjectData[] = [
  {
    title: "Real-time audio transcription using OpenAI",
    description: "High level diagram of my real-time audio transcription app",
    image: "/projectAssets/realtime-audio-arc.jpg", // from public folder
    details: "",
    category: ProjectCategory.ARCHITECTURE,
    technologies: [
      "OpenAI Whisper",
      "OpenAI GPT3-5",
      "React",
      "Python",
      "WebRTC",
      "WebSockets",
    ],
  },
  {
    title: "Real-time audio transcription using OpenAI",
    description: "High level diagram of my real-time audio transcription app",
    image: "/projectAssets/realtime-audio-arc.jpg", // from public folder
    details: "",
    category: ProjectCategory.ARCHITECTURE,
    technologies: [
      "OpenAI Whisper",
      "OpenAI GPT3-5",
      "React",
      "Python",
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
          <iframe
            width="100%"
            height="600"
            src="https://miro.com/app/embed/uXjVLRXUv-U=/?pres=1&frameId=3458764604658780043&embedId=627782529189"
            frameBorder="0"
            scrolling="no"
            allow="fullscreen; clipboard-read; clipboard-write"
          ></iframe>
        )}
      </SimpleDialog>
    </>
  );
};
