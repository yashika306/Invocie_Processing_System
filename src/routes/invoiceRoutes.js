const express = require('express');
const { addInvoice, getInvoices, deleteInvoice  } = require('../controllers/invoiceController');

const router = express.Router();

router.post('/invoice', addInvoice);
router.get('/invoices', getInvoices);
router.delete('/:id', deleteInvoice);

module.exports = router;
