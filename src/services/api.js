import axios from 'axios';

const API_URL = "http://localhost:5000";

export const saveInvoice = async (payload) => {
    try {
        return await axios.post(`${API_URL}/api/invoice`, payload);
    } catch (error) {
        console.log('Error:', error.message);
        return error.response.data;
    }
};

export const getInvoices = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/invoices`); // ✅ Corrected URL
        console.log("📌 Fetched Invoices:", response.data); // ✅ Log the response
        return response;
    } catch (error) {
        console.log("❌ Error Fetching Invoices:", error.message);
        return [];
    }
};

export const deleteInvoice = async (id) => {
    try {
        await axios.delete(`${API_URL}/api/invoice/${id}`);
    } catch (error) {
        console.error("❌ Error deleting invoice:", error);
    }
};

