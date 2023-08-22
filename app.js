import { fileURLToPath } from 'url';
import { dirname } from 'path';
import e from 'express';
import { config } from 'dotenv'
import { databaseConnect } from './database/dataConnect.js'
import { router } from './routes/orders.js';

config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 9001
const URI = process.env.URI
const app = e();

app.set('view engine', 'ejs')
app.use(router)

databaseConnect(URI)

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})