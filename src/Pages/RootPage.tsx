import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { FC } from "react";

import { Roomba } from "../features/roomba/Roomba";

export const RootPage: FC = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button variant="contained" onClick={() => setModalOpen(true)}>
        Mortgage Calculator
      </Button>

      <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
        <DialogTitle>Roomba</DialogTitle>
        <DialogContent>
          <Roomba />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setModalOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
