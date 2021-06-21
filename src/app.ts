import express from 'express';
import bodyParser from "body-parser";
import {uploader} from "./core/Uploader";
import {UploadExcel} from "./Controllers/UploadExcelController";
import './database';
import path from "path";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (_, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.post('/upload', uploader.single('file'), UploadExcel.upload)


export default app;