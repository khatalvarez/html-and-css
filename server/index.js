import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());

// API route (example)
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Welcome to Grow a Garden API' });
});

// Serve static React build
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
