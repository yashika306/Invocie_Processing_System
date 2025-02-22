import React from 'react';
import { Box, Table, TableHead, TableRow, TableCell, TableBody, Typography, Button } from '@mui/material';
import { deleteInvoice } from '../services/api'; // API function to delete invoice

export default function AllInvoice({ invoiceList, fetchInvoices }) {
  console.log("📌 Received Invoice List in AllInvoice:", invoiceList);
  const handleDeleteInvoice = async (id) => {
    await deleteInvoice(id); // Call API to delete invoice
    fetchInvoices(); // Refresh invoices after deletion
  };

  return (
    <Box sx={{ width: '80%', marginTop: 4, marginLeft: 'auto', marginRight: 'auto' }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>All Invoices</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><b>Vendor</b></TableCell>
            <TableCell><b>Product</b></TableCell>
            <TableCell><b>Amount</b></TableCell>
            <TableCell><b>Date</b></TableCell>
            <TableCell><b>Action</b></TableCell> {/* New Column */}
          </TableRow>
        </TableHead>
        <TableBody>
          {invoiceList.length > 0 ? (
            invoiceList.map((inv, index) => (
              <TableRow key={index}>
                <TableCell>{inv.vendor}</TableCell>
                <TableCell>{inv.product}</TableCell>
                <TableCell>₹{inv.amount}</TableCell>
                <TableCell>{inv.date}</TableCell>
                <TableCell>
                  <Button 
                    variant="contained" 
                    color="success" 
                    onClick={() => handleDeleteInvoice(inv.id)}
                  >
                    Complete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} style={{ textAlign: 'center', color: 'gray' }}>
                No invoices available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Box>
  );
}
