import { Box, IconButton, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const pulsatingIconVariants = {
  animate: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/**
 * Renders a list of images horizontally with scrolling.
 *
 * It also displays a right and left arrow Icon that a user can click on to navigate left/right
 */
export const HorizontalImageList = ({ images }: { images: string[] }) => {
  const theme = useTheme();

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const containerRef = scrollContainerRef.current;

    const updateScrollStatus = () => {
      if (containerRef) {
        const { scrollWidth, clientWidth, scrollLeft } = containerRef;
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 20);
        setCanScrollLeft(scrollLeft > 0);
      }
    };

    containerRef?.addEventListener("scroll", updateScrollStatus);

    return () => {
      if (containerRef) {
        containerRef.removeEventListener("scroll", updateScrollStatus);
      }
    };
  }, []);

  const handleScroll = (direction: number) => {
    scrollContainerRef.current?.scrollBy({
      left: direction,
      behavior: "smooth",
    });
  };

  const handleMouseDown = (direction: number) => {
    if (isScrolling) return; // Prevent multiple intervals
    setIsScrolling(true);
    handleScroll(direction); // Initial scroll

    // Start scrolling interval
    scrollIntervalRef.current = setInterval(() => {
      handleScroll(direction);
    }, 100);
  };

  const handleMouseUp = () => {
    setIsScrolling(false);
    if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current); // Stop scrolling
  };

  const handleMouseLeave = () => {
    handleMouseUp(); // Stop scrolling on mouse leave
  };

  return (
    <Box
      height="100%"
      width="100%"
      sx={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Scrollable Image Container */}
      <Box
        ref={scrollContainerRef}
        height="100%"
        width="100%"
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "scroll",
          backgroundColor: theme.palette.primary.dark,
          scrollBehavior: "smooth",
        }}
      >
        {/* Pulsating Left Arrow Icon */}
        {canScrollLeft && (
          <Box
            sx={{
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2))",
              width: "40px",
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              zIndex: 10,
            }}
          >
            <IconButton
              component={motion.div}
              variants={pulsatingIconVariants}
              animate="animate"
              sx={{
                position: "absolute",
                left: 16,
                top: "50%",
                backgroundColor: theme.palette.info.dark,
                "&:hover": {
                  backgroundColor: theme.palette.info.main,
                },
                color: theme.palette.primary.contrastText,
                boxShadow: 3,
                zIndex: 10,
              }}
              onMouseDown={() => handleMouseDown(-200)} // Scroll left
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
            >
              <ArrowLeftIcon />
            </IconButton>
          </Box>
        )}

        {images.map((image, index) => (
          <Box
            key={index}
            component="img"
            src={image}
            // sx={{ cursor: "pointer" }}
            // onClick={() => window.open(image)}
          />
        ))}
      </Box>

      {/* Pulsating Right Arrow Icon */}
      {canScrollRight && (
        <Box
          sx={{
            background:
              "linear-gradient(to left, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2))",
            width: "40px",
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: 10,
          }}
        >
          <IconButton
            component={motion.div}
            variants={pulsatingIconVariants}
            animate="animate"
            sx={{
              position: "absolute",
              right: 16,
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: theme.palette.info.dark,
              "&:hover": {
                backgroundColor: theme.palette.info.main,
              },
              color: theme.palette.primary.contrastText,
              boxShadow: 3,
              zIndex: 10,
            }}
            onMouseDown={() => handleMouseDown(200)} // Scroll right
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <ArrowRightIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};
