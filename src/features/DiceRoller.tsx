import { Theme } from "@emotion/react";
import {
  Box,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Card,
  SxProps,
} from "@mui/material";
import React, { FC } from "react";

const MAX_DICE_AMOUNT = 20;
export const DiceRoller: FC = () => {
  const [rolledDice, setRolledDice] = React.useState<number[]>([]);
  const [hasError, setHasError] = React.useState<boolean>(false);
  const [inputVal, setInputval] = React.useState<number>(0);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <Box>
        <InputLabel htmlFor="input-dice-amount">Number of Dice</InputLabel>
        <Input
          error={hasError}
          type="number"
          sx={{ mr: 3 }}
          onChange={(e) => {
            const amount = Number(e.target.value);
            if (amount > MAX_DICE_AMOUNT) {
              setHasError(true);
              return;
            }
            setInputval(amount);
            setHasError(false);
          }}
        />
        {hasError && (
          <FormHelperText error>
            Max dice amount is {MAX_DICE_AMOUNT}
          </FormHelperText>
        )}
        <Button
          variant="outlined"
          disabled={hasError}
          onClick={() => {
            const randoms: number[] = Array.from({
              length: inputVal,
            }).map(() => getRandomIntInclusive(1, 6));
            setRolledDice(randoms);
          }}
        >
          Roll
        </Button>
      </Box>
      <Card sx={{ maxWidth: "80%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 1.5,
          }}
        >
          {rolledDice.map((value, i) => (
            <Dice key={i} value={value} />
          ))}
        </Box>
      </Card>
    </Box>
  );
};

const getRandomIntInclusive = (min: number, max: number) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
};

interface DiceProps {
  value: number;
}

/**
 * Draws out the dice dots based on the value passed in
 * 1-6
 */
const Dice: FC<DiceProps> = ({ value }) => {
  const dotLocations: DotPosition[] = dotsMap[value];
  return (
    <Box
      sx={{
        border: "1px solid black",
        borderRadius: "5px",
        width: "50px",
        height: "50px",
        display: "flex",
        position: "relative",
      }}
    >
      {dotLocations.map((loc, i) => (
        <Box
          key={i}
          sx={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "black",
            position: "absolute",
            ...dotStyles[loc],
          }}
        />
      ))}
    </Box>
  );
};

enum DotPosition {
  TopLeft,
  TopRight,
  BottomLeft,
  BottomRight,
  Center,
  CenterLeft,
  CenterRight,
}
const dotsMap: Record<number, DotPosition[]> = {
  1: [DotPosition.Center],
  2: [DotPosition.TopLeft, DotPosition.BottomRight],
  3: [DotPosition.TopLeft, DotPosition.Center, DotPosition.BottomRight],
  4: [
    DotPosition.TopLeft,
    DotPosition.TopRight,
    DotPosition.BottomLeft,
    DotPosition.BottomRight,
  ],
  5: [
    DotPosition.TopLeft,
    DotPosition.TopRight,
    DotPosition.Center,
    DotPosition.BottomLeft,
    DotPosition.BottomRight,
  ],
  6: [
    DotPosition.TopLeft,
    DotPosition.TopRight,
    DotPosition.CenterLeft,
    DotPosition.CenterRight,
    DotPosition.BottomLeft,
    DotPosition.BottomRight,
  ],
};
const dotStyles: Record<DotPosition, SxProps<Theme>> = {
  [DotPosition.Center]: {
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  [DotPosition.TopLeft]: {
    left: "10%",
    top: "10%",
  },
  [DotPosition.TopRight]: {
    right: "10%",
    top: "10%",
  },
  [DotPosition.BottomLeft]: {
    left: "10%",
    bottom: "10%",
  },
  [DotPosition.BottomRight]: {
    right: "10%",
    bottom: "10%",
  },
  [DotPosition.CenterLeft]: {
    left: "10%",
    top: "50%",
    transform: "translate(-10%, -50%)",
  },
  [DotPosition.CenterRight]: {
    right: "10%",
    top: "50%",
    transform: "translate(10%, -50%)",
  },
};
