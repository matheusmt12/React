const mongoose = require("mongoose");

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD


const conn = async () => {
    try {
        const dbConn = await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.rum8i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        console.log('Sucesso na conexão');
        return dbConn;
    } catch {
        console.log('Falha na conexão');
    }
};

conn();

module.exports = conn();