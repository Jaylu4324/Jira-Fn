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
import Grid from "@mui/material/Grid";
import Drawer from "../src/Drawer/Drawer";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack"
import { Container } from "@mui/material";
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 11,
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
    setData({})
    setedit('')
    setOpen(false);
  };

  const [data, setData] = React.useState({});
  const [finalarr, setfinalarr] = React.useState([]);
  const [edit, setedit] = React.useState('');
  const [update, doUpdate] = React.useState(true);




  const handleClick = () => {

    if (edit) {
      axios.post(`http://localhost:5000/Employee/UpdateEmployee?id=${edit}`,data)
      .then((data)=>{
        console.log(data)
        doUpdate(!update)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    else{

      console.log(data)
      // data.id=finalarr.length+1
      setOpen(false);
      axios.post('http://localhost:5000/Employee/AddEmployee',data)
      .then((data2)=>{
        console.log("hjhhhkhkjkjhk",data2)
        doUpdate(!update)
      })
      .catch((err)=>{
        console.log(err)
      })
      setData({
        EmployeeEmail:"",
        Age:"",
        Gender:"",
        Address:"",
        Role:"",
        EmployeeNumber:"",
        EmployeeName:"",
      });
      console.log(data);
      console.log(finalarr);
    }
    setData({})
    setedit('')
    setOpen(false)
    // setstate(!state)
  };

  const handleChange = (e, type) => {
    if (type === "EmployeeEmail") {
      let obj1 = { ...data, [type]: e };

      setData({ ...obj1 });
      console.log(obj1);
    } else if (type === "EmployeeName") {
      let obj2 = { ...data, [type]: e };

      setData({ ...obj2 });
      console.log(obj2);
    } else if (type === "EmployeeNumber") {
      let obj3 = { ...data, [type]: e };

      setData({ ...obj3 });
      console.log(obj3);
    } else if (type === "Gender") {
      let obj4 = { ...data, [type]: e };

      setData({ ...obj4 });
      console.log(obj4);
    } else if (type === "Age") {
      let obj5 = { ...data, [type]: e };

      setData({ ...obj5 });
      console.log(obj5);
    } else if (type === "Address") {
      let obj6 = { ...data, [type]: e };

      setData({ ...obj6 });
      console.log(obj6);
    }
    else if (type === "Role") {
      let obj6 = { ...data, [type]: e };

      setData({ ...obj6 });
      console.log(obj6);
    }
    

  };

  React.useEffect(()=>{
      axios.get('http://localhost:5000/Employee/DisplayEmployee')
      .then((data)=>{
        setfinalarr(data.data.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  },[update])

  return (
    <React.Fragment>
      
      <Grid
      sx={{px:2,my:2}}
      container
      justifyContent="end"
       
      >
        <Grid items sm={8} md={2}>
     
          <Button
            variant="outlined"
            sx={{ alignItems: "right" ,my:1}}
            onClick={handleClickOpen}
            style={{ backgroundColor: "black", color: "white" }}
          >
            Add Employee
          </Button>
          </Grid>
     
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Employee Information</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Employee Detail for Project Assign
          </DialogContentText>

          <TextField
            onChange={(e) => {
              handleChange(e.target.value, "EmployeeEmail");
            }}
            value={data.EmployeeEmail}
            autoFocus
            required
            margin="dense"
            id="email address"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />

          <TextField
            onChange={(e) => {
              handleChange(e.target.value, "EmployeeName");
            }}
            value={data.EmployeeName}
            autoFocus
            required
            margin="dense"
            id="name"
            name="Name"
            label="Name"
            type="Name"
            fullWidth
            variant="standard"
          />

          <TextField
            onChange={(e) => {
              handleChange(e.target.value, "EmployeeNumber");
            }}
            value={data.EmployeeNumber}
            autoFocus
            required
            margin="dense"
            id="Number"
            name="Number"
            label="Number"
            type="text"
            fullWidth
            variant="standard"
          />

<FormControl
  sx={{ mt: 1 }}
>
  <FormLabel id="demo-controlled-radio-buttons-group">
    Gender
  </FormLabel>
  <RadioGroup
    aria-labelledby="demo-controlled-radio-buttons-group"
    name="controlled-radio-buttons-group"
    value={data.Gender}
    onChange={(e) => {
      handleChange(e.target.value, "Gender");
    }}
  >
    <FormControlLabel
      value="female"
      control={<Radio />}
      label="Female"
      checked={data.Gender === 'female'}
    />
    <FormControlLabel
      value="male"
      control={<Radio />}
      label="Male"
      checked={data.Gender === 'male'}
    />
  </RadioGroup>
</FormControl>

          <TextField
            onChange={(e) => {
              handleChange(e.target.value, "Role");
            }}
            value={data.Role}
            autoFocus
            required
            margin="dense"
            id="Role"
            name="Role"
            label="Role"
            type="Role"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={(e) => {
              handleChange(e.target.value, "Age");
            }}
            value={data.Age}
            autoFocus
            required
            margin="dense"
            id="Age"
            name="Age"
            label=" Age"
            type="Age"
            fullWidth
            variant="standard"
          />

          <TextField
            onChange={(e) => {
              handleChange(e.target.value, "Address");
            }}
            value={data.Address}
            autoFocus
            required
            margin="dense"
            id="Address"
            name="Address"
            label=" Address"
            type="Address"
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

      <div >
        <TableContainer component={Paper} sx={{ mt: 4 ,px:2}} >
          <Table sx={{ maxWidth: "100%", margin:'auto'}} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Number</StyledTableCell>
                <StyledTableCell align="center">Gender</StyledTableCell>
                <StyledTableCell align="center">Age</StyledTableCell>
                <StyledTableCell align="center">Role</StyledTableCell>
                <StyledTableCell align="center">Address</StyledTableCell>
                <StyledTableCell align="center">Edit</StyledTableCell>
                <StyledTableCell align="center">DELETE</StyledTableCell>

              </TableRow>
            </TableHead>
            <TableBody>
       
              {finalarr && finalarr.length>0 && finalarr.map((data) => (
                <StyledTableRow>
                  <StyledTableCell align="center">{data.EmployeeEmail}</StyledTableCell>
                  <StyledTableCell align="center">{data.EmployeeName}</StyledTableCell>
                  <StyledTableCell align="center">{data.EmployeeNumber}</StyledTableCell>
                  <StyledTableCell align="center">{data.Gender}</StyledTableCell>
                  <StyledTableCell align="center">{data.Age}</StyledTableCell>
                  <StyledTableCell align="center">{data.Role}</StyledTableCell>

                  <StyledTableCell align="center">
                    {data.Address}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button variant="contained" 
                    onClick={()=>{
                      console.log(data._id)
                        setedit(data._id)
                        setData(data)
                        setOpen(true)
                    }}
                    style={{ backgroundColor: "black", color: "white" }}>Edit</Button>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button
                    style={{ backgroundColor: "black", color: "white" }}
                      variant="contained"
                      onClick={() => {

                        axios.delete(`http://localhost:5000/Employee/hardDelete?id=${data._id}`)
                        .then((data)=>{
                          console.log(data)
                          doUpdate(!update)
                        })
                        .catch((err)=>{
                          console.log(err)
                        })
                        // setstate(!state)
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

   
      </div>
    </React.Fragment>
  );
}
