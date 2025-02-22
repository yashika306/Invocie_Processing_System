import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import Header from "../components/Header";
import AddInvoice from "../components/AddInvoice";
import AllInvoice from "../components/AllInvoice";
import { getInvoices } from "../services/api";

const Home = () => {
  const [addInvoice, setAddInvoice] = useState(false);
  const [invoiceList, setInvoiceList] = useState([]);

  useEffect(() => {
    fetchInvoices(); // ✅ Fetch invoices on page load
  }, []);

  const toggleInvoices = () => {
    setAddInvoice(!addInvoice);
  };

  const fetchInvoices = async () => {
    try {
      const response = await getInvoices();
      const invoices = Array.isArray(response.data.invoices) ? response.data.invoices : []; // ✅ Fix here
      setInvoiceList(invoices);
      console.log("📌 Updated Invoice List in State:", invoices); // ✅ Verify state update
    } catch (error) {
      console.error("❌ Error fetching invoices:", error);
      setInvoiceList([]);
    }
  };
  
  return (
    <>
      <Header />
      <Box style={{ margin: 20 }}>
        <Typography variant="h4">Pending Invoice</Typography>
        {!addInvoice && (
          <Button variant="contained" style={{ marginTop: 15 }} onClick={toggleInvoices}>
            Add Invoice
          </Button>
        )}
      </Box>

      {addInvoice && <AddInvoice fetchInvoices={fetchInvoices} setAddInvoice={setAddInvoice} />}
      <AllInvoice invoiceList={invoiceList} fetchInvoices={fetchInvoices} />
    </>
  );
};

export default Home;
