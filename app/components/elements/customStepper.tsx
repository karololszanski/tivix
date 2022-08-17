import React from "react";

import { MobileStepper, Button } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

import { useAppSelector, useAppDispatch } from "store/hooks";
import { setStep } from "store/app/app-slice";

const CustomStepper = () => {
  const { selectedStep } = useAppSelector((store) => store.app);
  const dispatch = useAppDispatch();

  return (
    <MobileStepper
      variant="progress"
      steps={3}
      position="static"
      activeStep={selectedStep}
      sx={{
        mx: "auto",
        display: "flex",
        width: "400px",
        justifyContent: "space-around",
        background: "none",
      }}
      nextButton={
        <Button
          size="small"
          onClick={() => dispatch(setStep({ stepNumber: selectedStep + 1 }))}
          sx={{ visibility: "hidden" }}
        >
          <KeyboardArrowRight />
          Next
        </Button>
      }
      backButton={
        <Button
          size="small"
          onClick={() => dispatch(setStep({ stepNumber: selectedStep - 1 }))}
          sx={{ visibility: selectedStep === 0 ? "hidden" : "initial" }}
        >
          <KeyboardArrowLeft />
          Back
        </Button>
      }
    />
  );
};

export default CustomStepper;
