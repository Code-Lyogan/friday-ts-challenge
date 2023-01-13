// Importing our mySQL connection library
import * as mysql from 'mysql2/promise';

// Establishing a connection to our SQL database
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'Bluelockmugen2020!',
    database: 'classicmodels'
});

async function databaseConnect() {
    try {
        const connection = await pool.getConnection();
        console.log("Connection established!");

        //Query Operations
        // Select Operation

        const [rows, fields] = await connection.query("SELECT 1");
        console.log("Connection is up and running.");

        // Create Operation
        await connection.query("INSERT INTO customers (customerNumber, customerName, contactLastName, contactFirstName, phone, addressLine1, city, country) VALUES (706, 'Doflamugen', 'Trout', 'Logan', '704-632-5299', '1402 Wessonhunt Ct.', 'Concord', 'US')");
        console.log("New customer account created.");

        // Read Operation
        const customers = await connection.query("SELECT * FROM customers");
        console.log("Customer information has been logged.");

        // Update Operation
        await connection.query("UPDATE customers SET customerName = 'Fake Mingo' WHERE customerNumber = 204");
        console.log("Customer name has been updated.");

        // Delete Operation
        await connection.query("DELETE FROM customers WHERE customerNumber = 223");
        console.log("Customer information has been deleted.");
        
        connection.release();
    } catch (error) {
        console.error("Error connecting to the database: ", error);
    }
}

// callback of our function databaseConnect
databaseConnect();