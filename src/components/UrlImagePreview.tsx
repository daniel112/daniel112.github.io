import React, { useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";

interface UrlImagePreviewProps {
  url: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
}

export const UrlImagePreview: React.FC<UrlImagePreviewProps> = ({
  url,
  alt = "Image preview",
  width = "100%",
  height = "auto",
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleImageError = () => {
    setLoading(false);
    setError("Failed to load image");
  };

  return (
    <Box position="relative" width={width} height={height}>
      {loading && (
        <Box
          position="absolute"
          top="50%"
          left="50%"
          sx={{ transform: "translate(-50%, -50%)" }}
        >
          <CircularProgress />
        </Box>
      )}
      {error && (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100%"
          bgcolor="grey.100"
          borderRadius={1}
          border="1px solid"
          borderColor="grey.300"
          p={2}
        >
          <BrokenImageIcon sx={{ fontSize: 48, color: "grey.500", mb: 1 }} />
          <Typography variant="body2" color="text.secondary" align="center">
            Oops! The image failed to load.
          </Typography>
        </Box>
      )}
      <Box
        component="img"
        src={url}
        alt={alt}
        onLoad={handleImageLoad}
        onError={handleImageError}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: 1,
          border: "1px solid",
          borderColor: "grey.300",
          display: loading || error ? "none" : "block",
        }}
      />
    </Box>
  );
};
