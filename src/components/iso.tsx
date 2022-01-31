import React from "react";
import { Card, Grid, Typography } from "@mui/material";
import AlbumIcon from "@mui/icons-material/Album";

export default (props: { info: any }) => (
  <Card sx={{ p: 2, boxShadow: "0rem 0.2rem 0.4rem #00000020" }}>
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={1}
    >
      <Grid item>
        <AlbumIcon color="primary" />
      </Grid>
      <Grid item>
        <Typography variant="body1" component="div" fontWeight={500} color="primary">
          ISO
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" component="div" fontWeight={500}>
          {props.info.name}
        </Typography>
      </Grid>
    </Grid>
  </Card>
);
