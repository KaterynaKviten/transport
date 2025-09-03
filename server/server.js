import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distDir = join(__dirname, '../dist/prj-angular/browser');
const app = express();

app.get('/api/test', (req, res) => {
  res.json(['Test 1', 'Test 2', 'Test 3']);
});

app.use(express.static(distDir));

app.get(/.*/, (req, res) => {
  res.sendFile(join(distDir, 'index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
