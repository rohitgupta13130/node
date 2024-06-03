const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// SQL Server configuration
const dbConfig = {
    user: 'technotop1310_SQLLogin_1',
    password: 'rcdseluny8',
    server: 'IndiaTeaching.mssql.somee.com',
    database: 'IndiaTeaching',
    options: {
        encrypt: true, // Use this if you're on Windows Azure
        trustServerCertificate: true // Change to false for production
    }
};

// Endpoint to fetch tags
app.get('/api/tags', async (req, res) => {
    try {
        // Connect to the database
        await sql.connect(dbConfig);

        // Query the database for tags
        const result = await sql.query`SELECT tag FROM Tags`;

        // Send the tags as a response
        res.json({ tags: result.recordset.map(row => row.tag) });
    } catch (err) {
        console.error('Error fetching tags:', err);
        res.status(500).json({ error: err.message });
    } finally {
        // Close the database connection
        sql.close();
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
