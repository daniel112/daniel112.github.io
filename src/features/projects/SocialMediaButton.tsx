import React from "react";
import { Box, Typography } from "@mui/material";
import { SvgIconProps } from "@mui/material/SvgIcon";

export interface SocialMediaButtonProps {
  Icon: React.ComponentType<SvgIconProps>;
  label: string;
  color: string;
  url: string;
}

/**
 * A button that links to a social media profile
 */
export const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
  Icon,
  label,
  color,
  url,
}) => {
  return (
    <Box
      component="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        borderRadius: 1,
        boxShadow: 1,
        backgroundColor: color,
        "&:hover": {
          boxShadow: 3,
        },
      }}
    >
      <Box
        sx={{
          bgcolor: "black",
          p: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Icon sx={{ color: "white" }} />
      </Box>
      <Box sx={{ bgcolor: color, p: 1, pl: 2, pr: 2 }}>
        <Typography variant="body2" sx={{ color: "white", fontWeight: "bold" }}>
          {label}
        </Typography>
      </Box>
    </Box>
  );
};
