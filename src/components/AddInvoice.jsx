import React , { useState} from 'react';
import { Box, Button, styled, TextField } from '@mui/material';
import { saveInvoice } from '../services/api.';

const CenteredWrapper = styled(Box)({
    display: 'flex',
    justifyContent: 'center', // Align horizontally
    alignItems: 'center', // Align vertically
});

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px', // spacing between fields
  padding: '20px', 
  width: '300px', 
  backgroundColor: '#f5f5f5',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  margin: 20
});

const StyledTextField = styled(TextField)({
  marginBottom: '10px',
  '& .MuiInputBase-root': {
    borderRadius: '4px',
    padding: '8px',
  },
});

const StyledButton = styled(Button)({
  backgroundColor: '#1976d2',
  color: '#fff',
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: '#1565c0', // Darker shade on hover
  },
});

export default function AddInvoice() {
  const defaultObj  ={
      vendor :'',
      product: '',
      amount: 0,
      date: '',
      acction: 'pending'
  }
  const [invoice , setInvoice] = useState(defaultObj);
  const onValueChange = (e) =>{
      setInvoice({ ...invoice, [e.target.name ]:e.target.value});
  }
  const addNewInvoice =  async () => {
     await saveInvoice({...invoice, amount : Number(invoice['amount']) });
  }
  return (
    <CenteredWrapper>
        <StyledBox>
            <StyledTextField 
                id="vendor-name" 
                variant="standard" 
                placeholder="Enter Vendor Name" 
                onChange={(e) => onValueChange(e)}
                name ="vendor"
            />
            <StyledTextField 
                id="product-name" 
                variant="standard" 
                placeholder="Enter Product Name" 
                onChange={(e) => onValueChange(e)}
                name ="product"
            />
            <StyledTextField 
                id="price" 
                variant="standard" 
                type="number" 
                placeholder="Enter Price (in Rs)" 
                onChange={(e) => onValueChange(e)}
                name ="amount"
            />
            <StyledTextField 
                id="invoice-date" 
                variant="standard" 
                type="date" 
                onChange={(e) => onValueChange(e)}
                name ="date"
            />
            <StyledButton 
              onClick={() => addNewInvoice()}
            >
                Add Invoice
            </StyledButton>
        </StyledBox>
    </CenteredWrapper>
  );
}
