import { Typography, Box, Divider } from "@mui/material";

export const Strengths = () => {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" gutterBottom color="onPrimary">
        Strengths
      </Typography>
      <Divider sx={{ marginY: 2 }} />
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          mb: 1,
          flexDirection: "column",
        }}
      >
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          sx={{ mr: 1 }}
          color="onPrimary"
        >
          Technical proficiency:
        </Typography>
        <Typography variant="body2" color="onPrimary">
          Expertise in modern web and mobile development: React, React Native
          and .NET. Proficient in cloud-native architectures using Azure and
          AWS, with strong skills in microservices, containerization, and
          infrastructure as code.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          mb: 1,
          flexDirection: "column",
        }}
      >
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          sx={{ mr: 1 }}
          color="onPrimary"
        >
          Leadership:
        </Typography>
        <Typography variant="body2" color="onPrimary">
          Exceptional engineering leader, driving complex projects to success.
          Skilled mentor, fostering team growth and elevating performance.
          Proven ability to develop top talent and accelerate career
          progression.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          mb: 1,
          flexDirection: "column",
        }}
      >
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          sx={{ mr: 1 }}
          color="onPrimary"
        >
          Team collaboration:
        </Typography>
        <Typography variant="body2" color="onPrimary">
          Demonstrated success in working proactively and collaboratively on
          multiple projects with simultaneous deadlines under fast-paced
          conditions.
        </Typography>
      </Box>
    </Box>
  );
};
