import { Button } from "@mui/material";
import { FC, useCallback, useEffect, useState } from "react";
import "./roomba.css";

interface Position {
  x: number;
  y: number;
}

const nextRotation: Record<string, "N" | "E" | "S" | "W"> = {
  N: "E",
  E: "S",
  S: "W",
  W: "N",
};

const directions = {
  N: { x: -1, y: 0, boundaryCheck: (x: number) => x >= 0 },
  E: { x: 0, y: 1, boundaryCheck: (y: number) => y < 10 },
  S: { x: 1, y: 0, boundaryCheck: (x: number) => x < 10 },
  W: { x: 0, y: -1, boundaryCheck: (y: number) => y >= 0 },
};

export const Roomba: FC = () => {
  const [currentDirection, setCurrentDirection] = useState<
    "N" | "E" | "S" | "W"
  >("N");
  const [currentPosition, setCurrentPosition] = useState<Position>({
    x: 0,
    y: 0,
  });

  const move = useCallback(() => {
    const { x, y, boundaryCheck } = directions[currentDirection];
    const newX = x + currentPosition.x;
    const newY = y + currentPosition.y;
    if (!boundaryCheck(x !== 0 ? newX : newY)) {
      setCurrentDirection(nextRotation[currentDirection]);
      return;
    }
    setCurrentPosition({ x: newX, y: newY });
  }, [currentDirection, currentPosition.x, currentPosition.y]);

  useEffect(() => {
    // keypress event listener
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setCurrentDirection(nextRotation[currentDirection]);
      } else if (e.key === "ArrowUp") {
        move();
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentDirection, move]);

  return (
    <div>
      <div className="btn-group">
        <Button
          variant="contained"
          onClick={() => {
            setCurrentDirection(nextRotation[currentDirection]);
          }}
        >
          Turn right
        </Button>
        <Button variant="contained" color={"secondary"} onClick={() => move()}>
          Move Forward
        </Button>
      </div>

      <div className="Grid">
        {Array.from({ length: 10 }).map((_, col) => (
          <div key={col} className="Column">
            {Array.from({ length: 10 }).map((_, row) => (
              <div key={row} className="Cell">
                {currentPosition.x === row && currentPosition.y === col && (
                  <RoombaIcon direction={currentDirection} />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

interface RoombaIconProps {
  direction: "N" | "E" | "S" | "W";
}
const RoombaIcon: FC<RoombaIconProps> = ({ direction }) => {
  let rotation = 0;
  switch (direction) {
    case "E":
      rotation = 90;
      break;
    case "S":
      rotation = 180;
      break;
    case "W":
      rotation = 270;
      break;
  }
  return <div style={{ transform: `rotate(${rotation}deg)` }}>☝🏼</div>;
};
