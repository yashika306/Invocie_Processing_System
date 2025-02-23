const db = require("../config/db");

class Invoice {
    static createInvoice(data, callback) {
        const { vendor, product, amount, date, curraction } = data;
        const sql = "INSERT INTO invoices (vendor, product, amount, date, curraction) VALUES (?, ?, ?, ?, ?)";
        db.query(sql, [vendor, product, amount, date, curraction], callback);
    }

    static getAllInvoices(callback) {
        const sql = "SELECT * FROM invoices";
        db.query(sql, callback);
    }

    static deleteInvoice(id, callback) {
        const sql = "DELETE FROM invoices WHERE id = ?";
        db.query(sql, [id], callback);
    }
}

module.exports = Invoice;
