import React from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

const StarryBackground: React.FC = () => {
  // Create regular stars
  const stars = Array.from({ length: 200 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.7 + 0.3,
  }));

  // Create center line stars (Milky Way effect)
  const centerStars = Array.from({ length: 100 }).map((_, i) => ({
    id: i + 200,
    x: 45 + Math.random() * 10,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.5 + 0.5,
  }));

  // Create glowing stars
  const glowingStars = Array.from({ length: 15 }).map((_, i) => ({
    id: i + 300,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 2,
    opacity: Math.random() * 0.5 + 0.5,
  }));

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        overflow: "hidden",
        background: "linear-gradient(to bottom, #090F13 0%, #1A2C38 100%)",
      }}
    >
      {[...stars, ...centerStars].map((star) => (
        <motion.div
          key={star.id}
          style={{
            position: "absolute",
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            backgroundColor: "#FFFFFF",
            borderRadius: "50%",
            opacity: star.opacity,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 1.5, star.opacity],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      {glowingStars.map((star) => (
        <motion.div
          key={star.id}
          style={{
            position: "absolute",
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            backgroundColor: "#FFFFFF",
            borderRadius: "50%",
            opacity: star.opacity,
            boxShadow: "0 0 10px #FFFFFF, 0 0 20px #FFFFFF",
          }}
          animate={{
            opacity: [star.opacity, 1, star.opacity],
            scale: [1, 1.5, 1],
            boxShadow: [
              "0 0 10px #FFFFFF, 0 0 20px #FFFFFF",
              "0 0 20px #FFFFFF, 0 0 40px #FFFFFF",
              "0 0 10px #FFFFFF, 0 0 20px #FFFFFF",
            ],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </Box>
  );
};

export default StarryBackground;
