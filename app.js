import { fileURLToPath } from 'url';
import { dirname } from 'path';
import e from 'express';
import { config } from 'dotenv'
import { databaseConnect } from './database/dataConnect.js'
import {BreadsModel} from './models/Breads.js'
import {MeatModel} from './models/Meat.js'
import { OptionalModel } from './models/Optional.js';
import { StatusModel } from './models/Status.js';
import { RequestModel } from './models/Requests.js';

config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 9001
const URI = process.env.URI
const app = e();

databaseConnect(URI)

const testOptionalAdd = new RequestModel(
    {
        name: 'Jane Doe',
        meat: 'Picanha',
        bread: 'Italiano Branco',
        optionals: ['Bacon', 'Salame', 'Cebola Roxa'],
    }
)

testOptionalAdd.save().then(res => console.log(res)).catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})