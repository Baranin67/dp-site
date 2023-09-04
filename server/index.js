import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express'
const app = express();
import cors from 'cors'
import bodyParser from 'body-parser'


app.use(cors());
app.use(bodyParser.json());

app.listen(process.env.PORT, () => console.log('listening on port ' + process.env.PORT));