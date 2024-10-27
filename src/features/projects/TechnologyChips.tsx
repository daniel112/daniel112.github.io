import { Box, Chip } from "@mui/material";
import { motion } from "framer-motion";
import { FC } from "react";

interface TechnologyChipsProp {
  technologies: string[];
  /**
   * limit the amount of chips to show
   * if there are extra chips, it will show a chip with "+remaining"
   */
  max?: number;
}

export const TechnologyChips: FC<TechnologyChipsProp> = ({
  technologies,
  max,
}) => {
  const shouldSetMax = max && max > 0 && max < technologies.length;
  // const remainingCount = shouldSetMax ? technologies.length - max: 0;
  const chips = shouldSetMax ? technologies.slice(0, max + 1) : technologies;
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {chips.map((tech, index) => {
        const showRemainingCountChip = shouldSetMax && index + 1 > max;
        return (
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
              label={
                showRemainingCountChip
                  ? `+${technologies.length - max} more`
                  : tech
              }
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
        );
      })}
    </Box>
  );
};
