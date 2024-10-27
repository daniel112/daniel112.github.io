import React from "react";
import { Typography, Box, Link } from "@mui/material";

interface Contribution {
  project: string;
  description: string;
  link: string;
}

const contributions: Contribution[] = [
  {
    project: "React Native Paper",
    description:
      "Contributed to the React Native Paper project by improving and extending the Banner Component.",
    link: "https://github.com/callstack/react-native-paper",
  },
  {
    project: "OpenAI Real-Time Voice Translation with Local Whisper model",
    description:
      "Created a proof of concept for real-time voice translation with a local Whisper model.",
    link: "https://github.com/daniel112/openai-hackathon-realtime-translation",
  },
  {
    project: "Microsoft Cognitive Services Speech SDK",
    description:
      "Contributed to the Microsoft Cognitive Services Speech SDK identifying a bug in their SDK related to disfluency.",
    link: "https://github.com/microsoft/cognitive-services-speech-sdk-js",
  },
];

export const OpenSourceContributions: React.FC = () => {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" gutterBottom color="grey.900">
        Open Source Contributions
      </Typography>
      {contributions.map((contribution, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold" color="grey.900">
            {contribution.project}
          </Typography>
          <Typography variant="body2" color="grey.800">
            {contribution.description}
          </Typography>
          <Link
            href={contribution.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo Link
          </Link>
        </Box>
      ))}
    </Box>
  );
};
