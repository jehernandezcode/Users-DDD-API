import mongoose, { ConnectOptions } from "mongoose"

const DB_URI = `${process.env.DB_URI}`

const dbInit = async () => {

    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    } as ConnectOptions ,(err) => {
        if(err) console.log(err)
        else 
            console.log("db is conected")
    })
}

export default dbInit