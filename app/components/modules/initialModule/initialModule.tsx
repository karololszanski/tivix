import React, { useState } from "react";

import { Typography, Container } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import { useAppDispatch } from "store/hooks";
import { setStep, addMinifig } from "store/app/app-slice";
import { getRandom3Minifigs } from "api/getRandom3Minifigs";

const InitialModule = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);

  const prepareLegoMinifigs = () => {
    setLoading(true);

    const apiCall = new Promise((resolve, reject) => {
      getRandom3Minifigs(
        (minifigsArray) => {
          minifigsArray.forEach((item: any) => {
            dispatch(addMinifig({ minifig: item }));
          });
          resolve(minifigsArray);
        },
        (error) => reject(error)
      );
    });
    const timer = new Promise((resolve) => {
      setTimeout(resolve, 700);
    });

    Promise.all([apiCall, timer]).then(() => {
      setLoading(false);
      dispatch(setStep({ stepNumber: 1 }));
    });
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        m={2}
        variant="h3"
        color="white"
        sx={{
          fontWeight: "700",
          fontSize: { xs: "24px", sm: "2.5rem" },
          textAlign: "center",
        }}
      >
        LEGO MINIFIGS MYSTERY BOX
      </Typography>
      <LoadingButton
        size="large"
        variant="contained"
        loading={loading}
        onClick={prepareLegoMinifigs}
        data-testid="lets-go-btn"
      >
        {"Let's go"}
      </LoadingButton>
    </Container>
  );
};

export default InitialModule;
