import React, { useState } from 'react';
import { Box, Button, styled, TextField } from '@mui/material';
import { saveInvoice } from '../services/api';

const CenteredWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  padding: '20px',
  width: '300px',
  backgroundColor: '#f5f5f5',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  marginBottom: 20,
});

const StyledButton = styled(Button)({
  backgroundColor: '#1976d2',
  color: '#fff',
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: '#1565c0',
  },
});

export default function AddInvoice({ fetchInvoices, setAddInvoice }) {
  const defaultObj = {
    vendor: '',
    product: '',
    amount: '',
    date: '',
    curraction: 'pending',
  };

  const [invoice, setInvoice] = useState(defaultObj);
  const [error, setError] = useState('');

  const onValueChange = (e) => {
    setInvoice({ ...invoice, [e.target.name]: e.target.value });
  };

  const addNewInvoice = async () => {
    if (!invoice.vendor.trim() || !invoice.product.trim() || !invoice.amount || !invoice.date) {
      setError('❌ All fields are required!');
      return;
    }
    setError('');

    await saveInvoice({ ...invoice, amount: Number(invoice.amount) });
    setInvoice(defaultObj); // ✅ Clear the form
    fetchInvoices(); // ✅ Refresh invoices
    setAddInvoice(false); // ✅ Hide the form after submission
  };

  return (
    <CenteredWrapper>
      <StyledBox>
        <TextField variant="standard" placeholder="Enter Vendor Name" onChange={onValueChange} name="vendor" value={invoice.vendor} />
        <TextField variant="standard" placeholder="Enter Product Name" onChange={onValueChange} name="product" value={invoice.product} />
        <TextField variant="standard" type="number" placeholder="Enter Price (in Rs)" onChange={onValueChange} name="amount" value={invoice.amount} />
        <TextField variant="standard" type="date" onChange={onValueChange} name="date" value={invoice.date} />

        {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}

        <StyledButton onClick={addNewInvoice} disabled={!invoice.vendor || !invoice.product || !invoice.amount || !invoice.date}>
          Add Invoice
        </StyledButton>
      </StyledBox>
    </CenteredWrapper>
  );
}
