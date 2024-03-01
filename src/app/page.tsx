'use client'

import React from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import styles from "./page.module.scss";

export default function Home() {
  const [isOpenModal, setOpenModal] = React.useState(false)

  function handleOnclick() {
    setOpenModal(!isOpenModal)
  }

  function handleClose() {
    setOpenModal(false)
  }

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px'
  };

  return (
    <main className={styles.main}>
      <Button onClick={handleOnclick}>Add item</Button>
      <Modal
        open={isOpenModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add ToDo item
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
    </main>
  );
}
