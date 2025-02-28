const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path')

const PORT = 8080;
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/contact-me', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact-me.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '404.html'))
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

// const server = http.createServer(function (req, res) {
//   function serveFile(filePath) {
//     fs.readFile(filePath, (err, data) => {
//       if (err) {
//         res.writeHead(500, { 'Content-Type': 'text/plain' });
//         res.end('500 Internal Server Error');
//       } else {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end(data);
//       }
//     });
//   }

//   if (req.url === '/') {
//     serveFile('/index.html');
//   } else if (req.url === '/about') {
//     serveFile('/about.html');
//   } else if (req.url === '/contact-me') {
//     serveFile('/contact-me.html');
//   } else {
//     serveFile('/404.html');
//   }
// });

// server.listen(8080, () => {
//   console.log('Server running at http://localhost:8080/');
// });
