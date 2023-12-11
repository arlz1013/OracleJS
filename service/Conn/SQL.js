const send = require("./Conn/Conn")

async function HelloWord(){
    const conn = await send()
    console.log("Test is Running")
    try{
        const res = await conn.execute("SELECT 'Hello Word!' from dual")
        console.log(res.rows[0])
    }catch(err){
        console.error("Error With SQL: ", err)
    }
}

