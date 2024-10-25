import { Chip } from "@mui/material";
import { motion } from "framer-motion";

export const TechnologyChips = ({
  technologies,
}: {
  technologies: string[];
}) => {
  return (
    <>
      {technologies.map((tech, index) => (
        <motion.div
          key={tech}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut",
          }}
        >
          <Chip
            label={tech}
            sx={{
              backgroundColor: "#2c3e50",
              color: "white",
              borderRadius: "4px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease",
              margin: "2px",
            }}
          />
        </motion.div>
      ))}
    </>
  );
};
