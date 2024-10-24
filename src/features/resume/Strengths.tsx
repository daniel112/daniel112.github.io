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
          Expertise in React, React Native, .NET, microservices, Azure and
          automation.
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
          Proven ability to lead teams and manage projects. Provide mentorship
          and guidance to multiple direct reports.
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
