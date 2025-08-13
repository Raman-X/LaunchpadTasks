import { DatabaseConnection } from "./DatabaseConnection";

const conn1 = DatabaseConnection.getInstance();
const conn2 = DatabaseConnection.getInstance();

console.log("Are both instances the same?", conn1 === conn2); // true

conn1.query("SELECT * FROM users");
