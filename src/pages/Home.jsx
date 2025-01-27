import Header from "../components/Header"
import AddInvoice from "../components/AddInvoice";
import React from "react";
import {Box, Typography, Button} from '@mui/material';

const Home = () =>{
    return (
        <>
            <Header />
            <Box style={{margin:20}}>
            <Typography variant="h4">
            Pending Invoice
            </Typography>
            <Button  variant="contained" style={{marginTop:15}}>Add Invoice</Button>
            </Box>
            <AddInvoice/>
        </>
        

    );
}

export default Home;
