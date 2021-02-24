import React from "react";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { Grid, Typography, Avatar } from "@material-ui/core";
import SyncIcon from '@material-ui/icons/Sync';

function CurrentMenu(props) {
  return (
    <Grid
      container
      alignItems="center"
      justify="space-between"
      style={{ height: "55px", color: "black", backgroundColor: "#FCFCFC",padding:"0 10px" }}
    >
      <Grid item>
        <Grid container spacing = {1} alignItems="center">
          <Grid item>
            <ListAltIcon fontSize="large" />
          </Grid>
          <Grid item>
            <Typography variant="h4">Purchase order</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
          <Grid container spacing={1}>
              <Grid item>Last EPR sync: Fri, May 08, 2020 </Grid>
              <Grid item> | 10:30:33 AM IST |</Grid>
              <Grid item><Grid container spacing={1} style={{color:"#01B7F9"}}>
                  <Grid item><SyncIcon/></Grid>
                  <Grid item><b><i>Re-Sync</i></b></Grid>
                  </Grid></Grid>
          </Grid>
      </Grid>
      
    </Grid>
  );
}

export default CurrentMenu;
