import { Typography, Box, Stack, Divider } from "@mui/material";
import { ReactComponent as IBMBadgeIcon } from "../../assets/ibm_badge.svg";
import hackathonImage from "../../assets/neudesic_logo.jpeg";

export const Achievements = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom color="onPrimary">
        Achievements
      </Typography>
      <Divider sx={{ marginY: 2 }} />
      <Stack spacing={2}>
        <Stack direction="row" spacing={1} alignItems="center">
          <img
            src={hackathonImage}
            alt="Hackathon Badge"
            style={{ width: 30, height: 30 }}
          />
          <Typography variant="body2" color="onPrimary">
            Hackathon Winner: Best Implementation with OpenAI
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <IBMBadgeIcon width={30} height={30} />
          <Typography variant="body2" color="onPrimary">
            IBM Enterprise Design Thinking: Co-Creator Badge
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
