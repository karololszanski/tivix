import React from "react";
import { Container, Grid, Typography, Button } from "@mui/material";
import { toast } from "react-toastify";

import SimpleTile from "components/elements/tiles/simpleTile";

import { useAppSelector } from "store/hooks";
import { useAppDispatch } from "store/hooks";
import { setStep } from "store/app/app-slice";

const SelectCharacterModule = () => {
  const dispatch = useAppDispatch();
  const { minifigs } = useAppSelector((store) => store.app);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        m={2}
        variant="h3"
        color="white"
        sx={{
          fontWeight: "700",
          fontSize: { xs: "36px", sm: "2rem" },
          pt: { xs: 3, sm: 0 },
        }}
      >
        CHOOSE YOUR MINIFIG
      </Typography>
      <Grid container p={2} spacing={3}>
        {minifigs.map((item, index) => {
          return (
            <Grid item xs={12} sm={4} key={index}>
              <SimpleTile minifig={item} />
            </Grid>
          );
        })}
      </Grid>
      <Button
        size="large"
        variant="contained"
        sx={{ my: 3 }}
        onClick={() => {
          if (!minifigs.some((item) => item.selected)) {
            toast.warning("Please select one minifig", {
              position: "bottom-center",
              autoClose: 3000,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              toastId: "SelectMinifigWarning",
            });
          } else {
            dispatch(setStep({ stepNumber: 2 }));
          }
        }}
      >
        Proceed to shipment
      </Button>
    </Container>
  );
};

export default SelectCharacterModule;
