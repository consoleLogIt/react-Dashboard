import React from "react";
import { Grid, Card } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import PostAddIcon from "@material-ui/icons/PostAdd";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ErrorIcon from "@material-ui/icons/Error";

function MenuContent(props) {
  const StyledTableRow = withStyles({
    root: {
      border: "none",
    },
  })(TableRow);

  const StyleTableCellHeader = withStyles({
    root: {
      lineHeight: "20px",
      fontWeight: "bold",
      padding: "2px 15px",
      borderRight: "2px solid #B2B1B1",
    },
  })(TableCell);

  const StyleTableCell = withStyles({
    root: {
      fontWeight: "normal",
      lineHeight: "15px",
      padding: "4px 10px",
      letterSpacing: "0",
    },
  })(TableCell);

  return (
    <Card style={{ margin: "15px",borderRadius:"10px" }}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyleTableCellHeader>
              <select>
                <option value="all">All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </StyleTableCellHeader>
            <StyleTableCellHeader>Vendor</StyleTableCellHeader>
            <StyleTableCellHeader>Vendor Code</StyleTableCellHeader>
            <StyleTableCellHeader>PO#</StyleTableCellHeader>
            <StyleTableCellHeader>PO Line</StyleTableCellHeader>
            <StyleTableCellHeader>Description</StyleTableCellHeader>
            <StyleTableCellHeader>PO Value - INR</StyleTableCellHeader>
            <StyleTableCellHeader>Qty ordered</StyleTableCellHeader>
            <StyleTableCellHeader>Qty Shipped</StyleTableCellHeader>
            <StyleTableCellHeader>GR Quantity</StyleTableCellHeader>
            <StyleTableCellHeader>UOM</StyleTableCellHeader>
            <StyleTableCellHeader>Due Date</StyleTableCellHeader>
            <StyleTableCellHeader>Committed Date</StyleTableCellHeader>
            <StyleTableCellHeader>Status</StyleTableCellHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <StyleTableCell>
              <Grid container spacing={1} alignItems="center">
                <Grid item>0</Grid>
              </Grid>
            </StyleTableCell>
            <StyleTableCell>Allen Packs</StyleTableCell>
            <StyleTableCell>321345</StyleTableCell>
            <StyleTableCell>
              <Grid container spacing={1} alignItems="center" wrap="nowrap">
                <Grid item>4504567863</Grid>
                <Grid item>
                  <ErrorIcon style={{ color: "#FDC10C" }} />
                </Grid>
              </Grid>
            </StyleTableCell>
            <StyleTableCell>1</StyleTableCell>
            <StyleTableCell>Carton - Azithro 3x10 300 GSM FBB</StyleTableCell>
            <StyleTableCell>350,000</StyleTableCell>
            <StyleTableCell>300,000</StyleTableCell>
            <StyleTableCell>300,000</StyleTableCell>
            <StyleTableCell>300,000</StyleTableCell>
            <StyleTableCell>EA</StyleTableCell>
            <StyleTableCell>15/03/2020</StyleTableCell>
            <StyleTableCell>15/03/2020</StyleTableCell>
            <StyleTableCell>
              <Grid
                container
                alignItems="center"
                justify="space-between"
                wrap="nowrap"
              >
                <Grid item style={{ color: "#0D1293" }}>
                  Accepted
                </Grid>

                <Grid item>
                  <Grid container wrap="nowrap">
                    <Grid item>
                      <label for="attach">
                        <AttachFileIcon style={{ cursor: "pointer" }} />
                      </label>
                      <input
                        id="attach"
                        style={{ display: "none" }}
                        type="file"
                      ></input>
                    </Grid>
                    <Grid item>
                      <label for="upload">
                        <PostAddIcon style={{ cursor: "pointer" }} />
                      </label>
                      <input
                        id="upload"
                        style={{ display: "none" }}
                        type="file"
                      ></input>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </StyleTableCell>
          </TableRow>
          <StyledTableRow>
            <StyleTableCell>
              <Grid container spacing={1} alignItems="center">
                <Grid item>1</Grid>
                <Grid item>
                  <NotificationsIcon style={{ color: "#FDC10C" }} />
                </Grid>
              </Grid>
            </StyleTableCell>
            <StyleTableCell>Allen Packs</StyleTableCell>
            <StyleTableCell>321345</StyleTableCell>
            <StyleTableCell>4504567863</StyleTableCell>
            <StyleTableCell>1</StyleTableCell>
            <StyleTableCell>Carton - Azithro 3x10 300 GSM FBB</StyleTableCell>
            <StyleTableCell>350,000</StyleTableCell>
            <StyleTableCell>300,000</StyleTableCell>
            <StyleTableCell>300,000</StyleTableCell>
            <StyleTableCell>300,000</StyleTableCell>
            <StyleTableCell>EA</StyleTableCell>
            <StyleTableCell>15/03/2020</StyleTableCell>
            <StyleTableCell>15/03/2020</StyleTableCell>
            <StyleTableCell>
              <Grid
                container
                alignItems="center"
                justify="space-between"
                wrap="nowrap"
              >
                <Grid item style={{ color: "#0D1293" }}>
                  GRN posted
                </Grid>

                <Grid item>
                  <Grid container wrap="nowrap">
                    <Grid item>
                      <label for="attach">
                        <AttachFileIcon style={{ cursor: "pointer" }} />
                      </label>
                      <input
                        id="attach"
                        style={{ display: "none" }}
                        type="file"
                      ></input>
                    </Grid>
                    <Grid item>
                      <label for="upload">
                        <PostAddIcon style={{ cursor: "pointer" }} />
                      </label>
                      <input
                        id="upload"
                        style={{ display: "none" }}
                        type="file"
                      ></input>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </StyleTableCell>
          </StyledTableRow>
          <TableRow>
            <StyleTableCell>
              <Grid container spacing={1} alignItems="center">
                <Grid item>2</Grid>
              </Grid>
            </StyleTableCell>
            <StyleTableCell>Allen Packs</StyleTableCell>
            <StyleTableCell>321345</StyleTableCell>
            <StyleTableCell>4504567863</StyleTableCell>
            <StyleTableCell>1</StyleTableCell>
            <StyleTableCell>Carton - Azithro 3x10 300 GSM FBB</StyleTableCell>
            <StyleTableCell>350,000</StyleTableCell>
            <StyleTableCell>300,000</StyleTableCell>
            <StyleTableCell>300,000</StyleTableCell>
            <StyleTableCell>300,000</StyleTableCell>
            <StyleTableCell>EA</StyleTableCell>
            <StyleTableCell>15/03/2020</StyleTableCell>
            <StyleTableCell>15/03/2020</StyleTableCell>
            <StyleTableCell>
              <Grid
                container
                alignItems="center"
                justify="space-between"
                wrap="nowrap"
              >
                <Grid item style={{ color: "#E2731D" }}>
                  Review Req
                </Grid>

                <Grid item>
                  <Grid container wrap="nowrap">
                    <Grid item>
                      <label for="attach">
                        <AttachFileIcon style={{ cursor: "pointer" }} />
                      </label>
                      <input
                        id="attach"
                        style={{ display: "none" }}
                        type="file"
                      ></input>
                    </Grid>
                    <Grid item>
                      <label for="upload">
                        <PostAddIcon style={{ cursor: "pointer" }} />
                      </label>
                      <input
                        id="upload"
                        style={{ display: "none" }}
                        type="file"
                      ></input>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </StyleTableCell>
          </TableRow>
          <TableRow>
            <StyleTableCell>
              <Grid container spacing={1} alignItems="center">
                <Grid item>3</Grid>
                <Grid item>
                  <NotificationsIcon style={{ color: "#FDC10C" }} />
                </Grid>
              </Grid>
            </StyleTableCell>
            <StyleTableCell>Allen Packs</StyleTableCell>
            <StyleTableCell>321345</StyleTableCell>
            <StyleTableCell>4504567863</StyleTableCell>
            <StyleTableCell>1</StyleTableCell>
            <StyleTableCell>Carton - Azithro 3x10 300 GSM FBB</StyleTableCell>
            <StyleTableCell>350,000</StyleTableCell>
            <StyleTableCell>300,000</StyleTableCell>
            <StyleTableCell>300,000</StyleTableCell>
            <StyleTableCell>300,000</StyleTableCell>
            <StyleTableCell>EA</StyleTableCell>
            <StyleTableCell>15/03/2020</StyleTableCell>
            <StyleTableCell>15/03/2020</StyleTableCell>
            <StyleTableCell>
              <Grid
                container
                alignItems="center"
                justify="space-between"
                wrap="nowrap"
              >
                <Grid item style={{ color: "#E63B57" }}>
                  Rejected
                </Grid>

                <Grid item>
                  <Grid container wrap="nowrap">
                    <Grid item>
                      <label for="attach">
                        <AttachFileIcon style={{ cursor: "pointer" }} />
                      </label>
                      <input
                        id="attach"
                        style={{ display: "none" }}
                        type="file"
                      ></input>
                    </Grid>
                    <Grid item>
                      <label for="upload">
                        <PostAddIcon style={{ cursor: "pointer" }} />
                      </label>
                      <input
                        id="upload"
                        style={{ display: "none" }}
                        type="file"
                      ></input>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </StyleTableCell>
          </TableRow>
          <TableRow>
            <StyleTableCell>
              <Grid container spacing={1} alignItems="center">
                <Grid item>4</Grid>
              </Grid>
            </StyleTableCell>
            <StyleTableCell>Allen Packs</StyleTableCell>
            <StyleTableCell>321345</StyleTableCell>
            <StyleTableCell>
              <Grid container spacing={1} alignItems="center" wrap="nowrap">
                <Grid item>4504567863</Grid>
                <Grid item>
                  <ErrorIcon style={{ color: "#FDC10C" }} />
                </Grid>
              </Grid>
            </StyleTableCell>
            <StyleTableCell>1</StyleTableCell>
            <StyleTableCell>Carton - Azithro 3x10 300 GSM FBB</StyleTableCell>
            <StyleTableCell>350,000</StyleTableCell>
            <StyleTableCell>300,000</StyleTableCell>
            <StyleTableCell>-</StyleTableCell>
            <StyleTableCell>-</StyleTableCell>
            <StyleTableCell>EA</StyleTableCell>
            <StyleTableCell>15/03/2020</StyleTableCell>
            <StyleTableCell>15/03/2020</StyleTableCell>
            <StyleTableCell>
              <Grid
                container
                alignItems="center"
                justify="space-between"
                wrap="nowrap"
              >
                <Grid item style={{ color: "#0D1293" }}>
                  Dispatched
                </Grid>

                <Grid item>
                  <Grid container wrap="nowrap">
                    <Grid item>
                      <label for="attach">
                        <AttachFileIcon style={{ cursor: "pointer" }} />
                      </label>
                      <input
                        id="attach"
                        style={{ display: "none" }}
                        type="file"
                      ></input>
                    </Grid>
                    <Grid item>
                      <label for="upload">
                        <PostAddIcon style={{ cursor: "pointer" }} />
                      </label>
                      <input
                        id="upload"
                        style={{ display: "none" }}
                        type="file"
                      ></input>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </StyleTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
}

export default MenuContent;
