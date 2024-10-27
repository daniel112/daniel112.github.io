import {
  Card,
  CardContent,
  Typography,
  useTheme,
  useMediaQuery,
  Box,
  SxProps,
} from "@mui/material";
import { ProjectData } from "../types";
import { UrlImagePreview } from "../../../components/UrlImagePreview";
import { useState } from "react";

interface ProjectPreviewCardProps extends ProjectData {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  ctaTitle: string;
  sx?: SxProps;
}
/**
 * A card that displays a project Preview.
 * It has a hover effect that displays a banner with a custom title.
 * Entire card is clickable.
 */
export const ProjectPreviewCard: React.FC<ProjectPreviewCardProps> = ({
  title,
  description,
  image,
  onClick,
  ctaTitle = "View Project",
  sx,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      elevation={1}
      sx={{
        border: "1px solid",
        borderColor: "grey.300",
        width: isMobile ? "100%" : 300,
        position: "relative",
        cursor: "pointer",
        "&:hover": {
          boxShadow: theme.shadows[4],
        },
        ...sx,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <UrlImagePreview url={image} alt={title} height={140} />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            color: "white",
            padding: theme.spacing(1),
            transform: `translateY(${isHovered ? "0" : "100%"})`,
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <Typography variant="body2">{ctaTitle}</Typography>
        </Box>
      </Box>

      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
};
