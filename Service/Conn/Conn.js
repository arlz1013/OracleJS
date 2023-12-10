const sql = require("oracledb")
const conf = require("./Datas/Settings")

async function Send() {
    try{
        const conn = await sql.getConnection(conf);
        console.log("Successful!")
        return conn
    }catch(err){
        console.error("Error with Conn:", err)
    } 
}

module.exports = Send