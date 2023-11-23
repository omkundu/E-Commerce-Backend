const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase=require("./config/databBase")

//Config
dotenv.config({ path: "backend/config/config.env" });

//Connection to dataBase
connectDatabase()






app.listen(process.env.PORT, (err) => {
    if (err) {
        console.error("Error starting the server:", err);
    } else {
        console.log(`Server is working on http://localhost:${process.env.PORT}`);
    }
});

