import React, { useRef } from "react";
import { Grid, Typography, Button } from "@mui/material";

import DetailsTile from "components/elements/tiles/detailsTile";
import CustomForm from "components/elements/customForm";

import { useAppSelector } from "store/hooks";

const SummaryModule = () => {
  const { minifigs } = useAppSelector((store) => store.app);
  const selectedMinifig = minifigs.find((item) => item.selected);
  const formRef = useRef<any>(null);

  const handleSubmit = () => {
    formRef.current.handleSubmit();
  };

  return (
    <Grid
      container
      sx={{
        alignItems: "center",
      }}
    >
      <Grid
        item
        xs={12}
        sm={7}
        container
        sx={{
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h3"
          color="white"
          sx={{
            fontWeight: "700",
            fontSize: { xs: "36px", sm: "2rem" },
            ml: 3,
            my: 1,
          }}
        >
          Shipping details
        </Typography>
        {selectedMinifig && (
          <CustomForm selectedMinifig={selectedMinifig} ref={formRef} />
        )}
      </Grid>
      <Grid item xs={12} sm={5} container>
        {selectedMinifig && (
          <DetailsTile
            header="Summary"
            minifig={selectedMinifig}
            style={{ width: "100%", my: 2, mx: 3 }}
            additionalComponent={
              <Button
                size="large"
                variant="contained"
                sx={{ my: 3 }}
                disabled={!minifigs.some((item) => item.selected)}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            }
          />
        )}
      </Grid>
    </Grid>
  );
};

export default SummaryModule;
