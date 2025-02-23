const Invoice = require("../models/invoiceModel");

exports.addInvoice = (req, res) => {
    const { vendor, product, amount, date, curraction } = req.body;
    Invoice.createInvoice({ vendor, product, amount, date, curraction }, (err, result) => {
        if (err) {
            console.error('❌ Error saving invoice:', err);
            return res.status(500).json({ message: 'Error saving invoice' });
        }
        res.status(201).json({ message: '✅ Invoice saved successfully', invoiceId: result.insertId });
    });
};

exports.getInvoices = (req, res) => {
    Invoice.getAllInvoices((err, rows) => {
        if (err) {
            console.error('❌ Error fetching invoices:', err);
            return res.status(500).json({ message: 'Error fetching invoices' });
        }
        res.status(200).json({ invoices: rows }); // ✅ Wrap data in a key
    });
};

exports.deleteInvoice = (req, res) => {
    const { id } = req.params;

    Invoice.deleteInvoice(id, (err, result) => {
        if (err) {
            console.error("Error deleting invoice:", err);
            return res.status(500).json({ error: "Database deletion failed" });
        }
        return res.status(200).json({ message: "Invoice deleted successfully" });
    });
};

