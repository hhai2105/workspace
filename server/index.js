import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import windowsRouter from './routes/windows.js';
import workspacesRouter from './routes/workspaces.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/windows', windowsRouter);
app.use('/workspaces', workspacesRouter);

mongoose.connect(process.env.ATLAS_URI, {useNewUrlParser: true})
	.then(() => console.log("mongoDB database connection established successfully"))
	.catch(err => console.log("cant connect to mongoDB database, error: " + err));

app.listen(port, () => {
	console.log('Server is running on port: ' + port);
});
