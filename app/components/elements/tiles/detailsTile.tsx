import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Container, Grid, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import { TileStyles } from "components/elements/tiles/tile.styles";

import { useAppDispatch } from "store/hooks";
import { addPartsToMinifig } from "store/app/app-slice";
import { getMinifigParts } from "api/getMinifigParts";
import { LegoMinifig } from "utils/interfaces";

type ChartProps = {
  minifig: LegoMinifig;
  header?: string;
  style?: any;
  additionalComponent?: React.ReactNode;
};

const DetailsTile: React.FC<ChartProps> = ({
  minifig,
  header = "Lego details",
  style,
  additionalComponent,
}) => {
  const dispatch = useAppDispatch();
  const [partsLoader, setPartsLoader] = useState<boolean>(false);

  useEffect(() => {
    if (!minifig?.parts) {
      setPartsLoader(true);
      getMinifigParts(
        minifig,
        (data: any) => {
          setPartsLoader(false);
          dispatch(addPartsToMinifig({ minifig: minifig, parts: data }));
        },
        () => {
          setPartsLoader(false);
        }
      );
    }
  }, [dispatch, minifig, minifig?.parts]);

  return (
    <Container
      sx={{
        ...TileStyles,
        ...style,
      }}
    >
      <Grid
        container
        sx={{
          py: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            pb: 2,
            fontWeight: "700",
            fontSize: "20px",
            display: "inline-block",
            width: "100%",
            textAlign: "left",
          }}
        >
          {header}
        </Typography>
        <Container
          sx={{ position: "relative", width: "120px", height: "120px" }}
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
        {partsLoader ? (
          <LoadingButton
            variant="text"
            disabled
            loading={partsLoader}
            sx={{ py: 3 }}
          />
        ) : (
          <>
            <Typography
              sx={{
                pt: 3,
                pb: 2,
                fontWeight: "700",
                fontSize: "12px",
                display: "inline-block",
                width: "100%",
                textAlign: "left",
              }}
            >
              {minifig?.parts?.length > 1
                ? `There're ${minifig?.parts?.length} parts in this minifig:`
                : `There's ${minifig?.parts?.length} part in this minifig:`}
            </Typography>
            <Grid container sx={{ maxHeight: "220px", overflow: "auto" }}>
              {minifig?.parts?.map((part: any, index: number) => {
                return (
                  <Grid
                    item
                    xs={12}
                    key={index}
                    sx={{ display: "flex", py: 1, width: "100%" }}
                  >
                    <Container
                      sx={{
                        position: "relative",
                        width: "50px",
                        height: "50px",
                        px: 1,
                        mx: 0,
                      }}
                    >
                      <Image
                        layout="fill"
                        objectFit="contain"
                        src={part?.part?.part_img_url}
                        alt="lego-minifig"
                      ></Image>
                    </Container>
                    <Grid
                      sx={{
                        display: "grid",
                        alignItems: "center",
                        alignContent: "center",
                        pl: 1,
                        mr: "auto",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "700",
                          fontSize: "14px",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                          display: "inline-block",
                          width: "100%",
                        }}
                      >
                        {part?.part?.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "700",
                          fontSize: "12px",
                          color: "text.secondary",
                        }}
                      >
                        {part?.part?.part_num}
                      </Typography>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </>
        )}
        {additionalComponent}
      </Grid>
    </Container>
  );
};

export default DetailsTile;
