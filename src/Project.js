import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Label } from '@mui/icons-material';
import axios from 'axios';

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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
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

  const[data,setData]=React.useState({})
  const[finalarr,setfinalarr]=React.useState([])

  const handleClick=()=>{
    // data.id=finalarr.length+1
    setOpen(false)
    setfinalarr([...finalarr,data])
    setData({ProjectTitle:'',ProjectDescription:'',StartDate:'',EndtDate:'',Assign:'',Status:''})
    console.log(data)
    console.log(finalarr)
    
  }

  

  const handleChange=(e,type)=>{
    if(type ==='ProjectTitle'){
      let obj1={...data,[type]:e}

      setData({...obj1})
      console.log(obj1)
      
    }
    else if(type === 'ProjectDescription'){

      let obj2={...data,[type]:e}

      setData({...obj2})
      console.log(obj2)
       
      }
      else if(type === 'StartDate'){

        let obj3={...data,[type]:e}

      setData({...obj3})
      console.log(obj3)
        
      }
      else if(type === 'EndtDate'){

        let obj4={...data,[type]:e}

      setData({...obj4})
      console.log(obj4)
        
      }
      else if(type === 'Assign'){

        let obj5={...data,[type]:e}

      setData({...obj5})
      console.log(obj5)
      }
      else if(type === 'Status'){

        let obj6={...data,[type]:e}

      setData({...obj6})
      console.log(obj6)
        
      }
    }

    React.useEffect(()=>{

      axios.get("http://localhost:5000/Project/allProject")
    })

  return (
    <React.Fragment>
      <Button variant="outlined" sx={{ml:170}} onClick={handleClickOpen} style={{backgroundColor:"black",color:"white"}}>
        Add Project
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        
      >
        <DialogTitle>Project Information</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Details for Project
          </DialogContentText>

          <TextField
            onChange={(e)=>{handleChange(e.target.value,"ProjectTitle");}}
            value={data.ProjectTitle}
            autoFocus
            required
            margin="dense"
            id="Title"
            name="Title"
            label="Project Title"
            type="Title"
            fullWidth
            variant="standard"
          />

        <TextField

            onChange={(e)=>{handleChange(e.target.value,"ProjectDescription");}}
            value={data.ProjectDescription}
            autoFocus
            required
            margin="dense"
            id="Description"
            name="Description"
            label="Project Description"
            type="Name"
            fullWidth
            variant="standard"
          />  
            <InputLabel sx={{mt:2}}>Start Date</InputLabel >
          <TextField
            onChange={(e)=>{handleChange(e.target.value,"StartDate");}}
            autoFocus
            required
            margin="dense"
            id="Start"
            name="Start"
            type="date"
            fullWidth
            variant="standard"
          />  
                        <InputLabel sx={{mt:2}}>End Date</InputLabel >


        <TextField
            onChange={(e)=>{handleChange(e.target.value,"EndtDate");}}
            value={data.EndtDate}
            autoFocus
            required
            margin="dense"
            id="End"
            name="End"
            label=""
            type="date"
            fullWidth
            variant="standard"
          />

       
<Box sx={{ minWidth: 120,  }}>
      <FormControl fullWidth sx={{mt:2}}>
        <InputLabel id="demo-simple-select-label">Project Assign</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data.Assign}
          label="Status"
          onChange={(e)=>{handleChange(e.target.value,"Assign");}}
        >
          <MenuItem value={'Pending'}>a</MenuItem>
          <MenuItem value={'Done'}>b</MenuItem>
        </Select>
      </FormControl>
    </Box>

          <Box sx={{ minWidth: 120,  }}>
      <FormControl fullWidth sx={{mt:2}}>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data.Status}
          label="Status"
          onChange={(e)=>{handleChange(e.target.value,"Status");}}
        >
          <MenuItem value={'Pending'}>Pending</MenuItem>
          <MenuItem value={'Done'}>Done</MenuItem>
        </Select>
      </FormControl>
    </Box>

    	
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor:'black' }}>Cancel</Button>
          <Button type="submit" onClick={handleClick} variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor:'black' }}>Submit</Button>
        </DialogActions>
      </Dialog>
      <div>


      <TableContainer component={Paper} sx={{ mt:4}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Project Title</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
            <StyledTableCell align="center">Project Start date</StyledTableCell>
            <StyledTableCell align="center">Project end date</StyledTableCell>
            <StyledTableCell align="center">Project assign Employee</StyledTableCell>
            <StyledTableCell align="center">Project Status</StyledTableCell>
            <StyledTableCell align="center">Edit</StyledTableCell>
            <StyledTableCell align="center">DELETE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
              {/* <StyledTableCell component="th" scope="row"> */}
               { finalarr.map((data)=>( 
            <StyledTableRow >
                
              <StyledTableCell align="center">{data.ProjectTitle}</StyledTableCell>
              <StyledTableCell align="center">{data.ProjectDescription}</StyledTableCell>
              <StyledTableCell align="center">{data.StartDate}</StyledTableCell>
              <StyledTableCell align="center">{data.EndtDate}</StyledTableCell>
              <StyledTableCell align="center">{data.Assign}</StyledTableCell>
              <StyledTableCell align="center">{data.Status}</StyledTableCell>
              <StyledTableCell align="center"><Button variant="contained">Edit</Button></StyledTableCell>
              <StyledTableCell align="center"><Button variant="contained">Delete</Button></StyledTableCell>
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