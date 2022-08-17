import React from "react";

import Dialog from "@mui/material/Dialog";

type ModalProps = {
  children?: React.ReactNode;
  open: boolean;
  onClose: (e: Event) => void;
};

const CustomModal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  return (
    <Dialog
      onClose={onClose}
      open={open}
      sx={{ ".MuiDialog-paper": { borderRadius: "24px" } }}
    >
      {children}
    </Dialog>
  );
};

export default CustomModal;
