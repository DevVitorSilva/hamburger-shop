import { connect } from "mongoose";

async function databaseConnect(uri){
    try {
        await connect(uri)
    } catch (error) {
        console.log(`Error connecting database: ${error}`)
    }
}

export{
    databaseConnect
}