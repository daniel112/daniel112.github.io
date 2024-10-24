import React from "react";
import { Typography, Box } from "@mui/material";

const experiences = [
  {
    role: "Senior React Developer",
    company: "IBM",
    location: "Austin, Texas",
    duration: "2018 - Present",
    description: [
      "Collaborated with a team in developing, testing, and ensuring the robustness of key user interface components.",
      "Developed reusable ReactJS components, improving code manageability and reusability by 60%.",
      "Optimized the system’s overall performance, reducing loading time by 30% across different web browsers.",
      "Spearheaded the translation of UI/UX design to actual code which resulted in an enhanced user interface.",
    ],
  },
  // Add more experience here
];

export const Experience = () => {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Experience
      </Typography>
      {experiences.map((exp, index) => (
        <Box key={index} marginBottom={2}>
          <Typography variant="h6" fontWeight="bold">
            {exp.role} - {exp.company}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {exp.location} | {exp.duration}
          </Typography>
          {exp.description.map((desc, idx) => (
            <Typography key={idx} variant="body2">
              • {desc}
            </Typography>
          ))}
        </Box>
      ))}
    </Box>
  );
};
