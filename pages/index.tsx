import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { Grid } from "@mui/material";
import InitialModule from "components/modules/initialModule/initialModule";
import SelectCharacterModule from "components/modules/selectCharacterModule/selectCharacterModule";
import SummaryModule from "components/modules/summaryModule/summaryModule";
import CustomStepper from "components/elements/customStepper";

import { useAppSelector } from "store/hooks";

const Home: NextPage = () => {
  const { selectedStep } = useAppSelector((store) => store.app);

  const getModule = () => {
    switch (selectedStep) {
      case 1:
        return SelectCharacterModule;
      case 2:
        return SummaryModule;
      default:
        return InitialModule;
    }
  };
  const DynamicModule = getModule();

  return (
    <>
      <Head>
        <title>Tivix recruitment task</title>
        <meta
          name="description"
          content="Tivix recruitment task - Karol Olszański"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid
        container
        direction="column"
        sx={{ py: 2, maxWidth: "900px", margin: "0 auto" }}
      >
        <Grid item xs={11} container sx={{ minHeight: "90vh" }}>
          <DynamicModule />
        </Grid>
        <Grid item xs={1} container>
          <CustomStepper />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
