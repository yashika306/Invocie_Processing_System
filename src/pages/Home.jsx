import Header from "../components/Header"
import AddInvoice from "../components/AddInvoice";
import React, { useState } from "react";
import {Box, Typography, Button} from '@mui/material';

const Home = () =>{
    const [addInvoice, setAddInvoice] = useState(false);
    const toggleInvoices = () =>{
        setAddInvoice(!addInvoice);
    }
    return (
        <>
            <Header />
            <Box style={{margin:20}}>
            <Typography variant="h4">
            Pending Invoice
            </Typography>
            {!addInvoice && <Button  
                variant="contained" 
                style={{marginTop:15}} 
                onClick={() => toggleInvoices()}
                >Add Invoice</Button>
            }
            </Box> 
            
            { addInvoice && <AddInvoice/> }
        </>
        

    );
}

export default Home;
