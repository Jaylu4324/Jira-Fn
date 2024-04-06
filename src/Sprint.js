import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [data, setData] = React.useState({});
  const [finalarr, setfinalarr] = React.useState([]);

  const handleClick = () => {
    // data.id=finalarr.length+1
    setOpen(false);
    setfinalarr([...finalarr, data]);
    setData({ Projecttitle: "", Description: "", Startdate: "", Enddate: "" });
    console.log(data);
    console.log(finalarr);
  };

  const handleChange = (e, type) => {
    if (type === "Projecttitle") {
      let obj1 = { ...data, [type]: e };

      setData({ ...obj1 });
      console.log(obj1);
    } else if (type === "Description") {
      let obj2 = { ...data, [type]: e };

      setData({ ...obj2 });
      console.log(obj2);
    } else if (type === "Startdate") {
      let obj3 = { ...data, [type]: e };

      setData({ ...obj3 });
      console.log(obj3);
    } else if (type === "Enddate") {
      let obj4 = { ...data, [type]: e };

      setData({ ...obj4 });
      console.log(obj4);
    }
  };

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        sx={{ ml: 170 }}
        onClick={handleClickOpen}
        style={{ backgroundColor: "black", color: "white" }}
      >
        Add Sprint
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Sprint Information</DialogTitle>
        <DialogContent>
          <DialogContentText>Sprint Detail for Project task</DialogContentText>

          <TextField
            onChange={(e) => {
              handleChange(e.target.value, "Projecttitle");
            }}
            value={data.Projecttile}
            autoFocus
            required
            margin="dense"
            id="Project title"
            name="Project title"
            label="Project title"
            type="name"
            fullWidth
            variant="standard"
          />

          <TextField
            onChange={(e) => {
              handleChange(e.target.value, "Description");
            }}
            value={data.Description}
            autoFocus
            required
            margin="dense"
            id="name"
            name="Name"
            label="Description"
            type="Name"
            fullWidth
            variant="standard"
          />

          <TextField
            onChange={(e) => {
              handleChange(e.target.value, "Startdate");
            }}
            value={data.Startdate}
            autoFocus
            required
            margin="dense"
            id="Startdate"
            name="Startdate"
            label=""
            type="date"
            fullWidth
            variant="standard"
          />

          <TextField
            onChange={(e) => {
              handleChange(e.target.value, "Enddate");
            }}
            value={data.Enddate}
            autoFocus
            required
            margin="dense"
            id="Enddate"
            name="Enddate"
            label=""
            type="date"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: "black" }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            onClick={handleClick}
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: "black" }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <div>
        <TableContainer component={Paper} sx={{ mt: 4 }}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Project tile</StyledTableCell>
                <StyledTableCell align="center">Description</StyledTableCell>
                <StyledTableCell align="center">Start date</StyledTableCell>
                <StyledTableCell align="center">End date</StyledTableCell>
                <StyledTableCell align="center">Edit</StyledTableCell>
                <StyledTableCell align="center">DELETE</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* <StyledTableCell component="th" scope="row"> */}
              {finalarr.map((data) => (
                <StyledTableRow>
                  <StyledTableCell align="center">
                    {data.Projecttitle}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {data.Description}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {data.Startdate}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {data.Enddate}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "black", color: "white" }}
                    >
                      Edit
                    </Button>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "black", color: "white" }}
                      onClick={() => {
                        let arr = [...finalarr];
                        let Index = arr.findIndex(
                          (ele) => ele.Email == data.Email
                        );
                        console.log(Index);
                        arr.splice(Index, 1);
                        setfinalarr(arr);
                      }}
                    >
                      Delete
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
              {/* </StyledTableCell> */}
            </TableBody>
          </Table>
        </TableContainer>

        {/* {
            finalarr.map((data)=>(
              <tr>
                <td style={{border:'1px solid black'}}>{data.Email}</td>
                <td style={{border:'1px solid black'}}>{data.Name}</td>
                <td style={{border:'1px solid black'}}>{data.Number}</td>
                <td style={{border:'1px solid black'}}>{data.Gender}</td>
                <td style={{border:'1px solid black'}}>{data.Age}</td>
                <td style={{border:'1px solid black'}}>{data.Address}</td>
              </tr>
            ))
          } */}
      </div>
    </React.Fragment>
  );
}
