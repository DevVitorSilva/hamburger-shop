import { fileURLToPath } from 'url';
import { dirname } from 'path';
import e from 'express';
import {config} from 'dotenv'

config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 9001
const app = e();


app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})