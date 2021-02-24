import React from "react";
import { Grid, Avatar,Chip } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import TuneRoundedIcon from "@material-ui/icons/TuneRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import styles from "./MenuOptions.module.css";

function MenuOptions(props) {
  const StyleChip = withStyles({
    root: {
      backgroundColor: "#FFFFFF",
      color: "#257496",
      fontWeight: "bold",
    },
  })(Chip);

  return (
    <Grid
      container
      alignItems="center"
      style={{
        height: "160px",
        color: "black",
        backgroundColor: "#F0F1F8",
        padding: "0 10px",
      }}
    >
      <Grid item md={12}>
        <Grid container alignItems="center">
          <Grid item md={8}>
            <Grid container spacing={1}>
              <Grid item>
                <StyleChip
                  avatar={<Avatar>20</Avatar>}
                  label="Response awaited"
                />
              </Grid>
              <Grid item>
                <StyleChip avatar={<Avatar>20</Avatar>} label="Accepted" />
              </Grid>
              <Grid item>
                <StyleChip avatar={<Avatar>20</Avatar>} label="Rejected" />
              </Grid>
              <Grid item>
                <StyleChip
                  avatar={<Avatar>20</Avatar>}
                  label="Review Requested"
                />
              </Grid>
              <Grid item>
                <StyleChip avatar={<Avatar>20</Avatar>} label="GRN Done" />
              </Grid>
              <Grid item>
                <StyleChip avatar={<Avatar>20</Avatar>} label="Delayed" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={3}>
            <Grid container>
              <Grid item>
                <TuneRoundedIcon
                  style={{ color: "#fff", backgroundColor: "#1976d2" }}
                />
              </Grid>
              <Grid item>
                <input
                  placeholder="Search..."
                  style={{
                    padding: "5px 25px",
                    outline: "none",
                    border: "none",
                  }}
                ></input>
              </Grid>
              <Grid item style={{ position: "relative" }}>
                <SearchRoundedIcon
                  style={{
                    color: "#fff",
                    backgroundColor: "#1976d2",
                    borderRadius: "50%",
                    padding: "4px",
                    position: "absolute",
                    top: "-4px",
                    left: "-30px",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <ImportExportIcon
                  style={{
                    color: "#fff",
                    backgroundColor: "#1976d2",
                    padding: "2px",
                    borderRadius: "30%",
                  }}
                />
              </Grid>
              <Grid item>
                <b>Export</b>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={12}>
        <Grid container>
          <Grid item md={2}>
            <select className={styles.customSelect}>
              <option value="all">PO Actions</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </Grid>
          <Grid item md={9}>
            <Grid
              container
              spacing={2}
              alignItems="center"
              wrap = "nowrap"
              style={{
                backgroundColor: "white",
                padding: "5px 10px",
                borderRadius: "20px",
              }}
            >
              <Grid item>
                <select className={styles.innerSelect}>
                  <option value="all">Status: All</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </Grid>
              <Grid item>
                <select className={styles.innerSelect}>
                  <option value="all">2000 Packaging</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </Grid>
              <Grid item>
                <select className={styles.innerSelect}>
                  <option value="all">Suppliers:All</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </Grid>
              <Grid item>
                <select className={styles.innerSelect}>
                  <option value="all">PO Actions</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </Grid>
              <Grid item>
                <input className={styles.customData} type="date"></input>
              </Grid>
              <Grid item>to</Grid>
              <Grid item>
                <input className={styles.customData} type="date"></input>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MenuOptions;
