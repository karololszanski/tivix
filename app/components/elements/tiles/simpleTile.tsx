import { Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";

import { TileStyles } from "components/elements/tiles/tile.styles";
import CustomModal from "../customModal";
import DetailsTile from "./detailsTile";

import { useAppDispatch } from "store/hooks";
import { selectMinifig } from "store/app/app-slice";
import { LegoMinifig } from "utils/interfaces";

type ChartProps = {
  minifig: LegoMinifig;
};

const SimpleTile: React.FC<ChartProps> = ({ minifig }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  return (
    <Container
      sx={{
        ...TileStyles,
        boxShadow: minifig.selected
          ? "0px 0px 10px 8px rgba(255, 149, 0, 1)"
          : "0px 0px 20px 4px rgba(66, 68, 90, 1)",
        transition: "all .3s",
        "&:hover": {
          transform: "scale(1.02)",
        },
        cursor: "pointer",
      }}
      onClick={() => dispatch(selectMinifig({ minifig }))}
    >
      <Grid
        container
        sx={{
          py: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
          sx={{ position: "relative", width: "200px", height: "200px" }}
        >
          <Image
            layout="fill"
            objectFit="contain"
            src={minifig?.set_img_url}
            alt="lego-minifig"
          ></Image>
        </Container>
        <Typography
          sx={{
            mt: 1,
            fontWeight: "700",
            fontSize: "14px",
            display: "inline-block",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
            height: "45px",
            textAlign: "center",
          }}
        >
          {minifig?.name}
        </Typography>
        <Button
          variant="text"
          sx={{
            textAlign: "center",
            fontSize: "14px",
            fontWeight: "700",
            textTransform: "none",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setModalOpen(true);
          }}
        >
          Show details
        </Button>
        <CustomModal
          open={modalOpen}
          onClose={(e) => {
            e.stopPropagation();
            setModalOpen(false);
          }}
        >
          <DetailsTile
            minifig={minifig}
            style={{ width: { xs: "300px", sm: "350px" } }}
          />
        </CustomModal>
      </Grid>
    </Container>
  );
};

export default SimpleTile;
