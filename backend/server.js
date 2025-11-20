const dotenv = require('dotenv');
dotenv.config();

const app=require('./src/app');
const connectDB=require('./src/db/db');

connectDB();
port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log('Server is running on port 3000');
})