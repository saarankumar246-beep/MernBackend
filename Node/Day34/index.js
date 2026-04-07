import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Server running on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});