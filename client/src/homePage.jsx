import { makeStyles } from '@material-ui/styles';
import { Grid , TableHead } from '@material-ui/core';
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import base from './base';
import { useEffect, useState } from "react";


const useStyles = makeStyles(() => ({
  root: {
   background:"white",
   marginTop:"60px",
  },
}));

function HomePage() {
  const classes= useStyles();
  const [data, setData] = useState([]);


  useEffect(() => {
  base("users")
  .select({view:"Grid view"})
  .eachPage((record,fetchNextPage) =>{
   setData(record)
  fetchNextPage();
  })
  },[])
    
    return (
  <Grid container justify="center" className={classes.root}>
        <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Role</TableCell>
                </TableRow>
              </TableHead>
               <TableBody>
                {
                data.map((row) => (
                  <TableRow >
                    <TableCell component="th" scope="row" align="center">
                      {row.fields.Name}
                    </TableCell>
                    <TableCell align="center">{row.fields.email}</TableCell>
                    <TableCell align="center">{row.fields.address}</TableCell>
                  </TableRow>
                ))
                }
              </TableBody> 
            </Table>
          </TableContainer>

        </Grid>
        
        
    )
}

export default HomePage