import React from "react";
import { Grid, Typography, Avatar } from "@material-ui/core";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssessmentIcon from "@material-ui/icons/Assessment";
import DescriptionIcon from "@material-ui/icons/Description";
import ReceiptIcon from "@material-ui/icons/Receipt";
import styles from "./NavBar.module.css";
function NavBar(props) {
  return (
    <Grid
      container
      alignItems="center"
      style={{ height: "55px", backgroundColor: "#585555", color: "#B2B1B1" }}
    >
      <Grid item md={2}>
        <Typography style={{ textAlign: "center" }} variant="h4">
          Riversys
        </Typography>
      </Grid>
      <Grid item md={8} style={{ color: "#FEFEFE" }}>
        <Grid container justify="flex-end" spacing={2}>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <ListAltIcon />
              </Grid>
              <Grid item>
                {" "}
                <Typography component="p" className={styles.pointer}>
                  Purchase Order
                </Typography>{" "}
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <DashboardIcon />
              </Grid>
              <Grid item>
                <Typography component="p" className={styles.pointer}>
                  {" "}
                  DashBoard
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <AssessmentIcon />
              </Grid>
              <Grid item>
                <Typography component="p" className={styles.pointer}>
                  Reports
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <ReceiptIcon />
              </Grid>
              <Grid item>
                <Typography component="p" className={styles.pointer}>
                  {" "}
                  RFQ
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <DescriptionIcon />
              </Grid>
              <Grid item>
                <Typography component="p" className={styles.pointer}>
                  {" "}
                  Invoice
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={2} style={{ color: "#FFFFFF" }}>
        <Grid container justify="center" alignItems="center" spacing={1}>
          <Grid item>
            <Avatar
              style={{
                width: "25px",
                height: "25px",
                backgroundColor: "white",
                color: "black",
                border: "1px solid black",
              }}
            >
              K
            </Avatar>
          </Grid>
          <Grid item> Kishan</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default NavBar;
