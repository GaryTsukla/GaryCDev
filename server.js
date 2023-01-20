const express = require('express');
const app = express();
const path = require('path');
const addPath = function (p) {
  return path.join(__dirname, p);
};
const setCacheSend = function (r, seconds, file) {
  r.set('Cache-Control', 'public, max-age=' + seconds);
  r.sendFile(addPath(file));
};
// Send requested page, h=header&request,r=response
app.get('/', (h, r) => {
  setCacheSend(r, 86400, '/index.html');
});
app.get('/favouritethings', (h, r) => {
  setCacheSend(r, 86400, '/favourite.html');
});
app.get('/favoritethings', (h, r) => {
  setCacheSend(r, 86400, '/favourite.html');
});
app.get('/main.css', (h, r) => {
  setCacheSend(r, 86400, '/main.css');
});
app.get('/css/style.css', (h, r) => {
  setCacheSend(r, 86400, '/favouriteStyle.css');
});
app.get('/script.js', (h, r) => {
  setCacheSend(r, 86400, '/script.js');
});
app.get('/image/intro.svg', (h, r) => {
  setCacheSend(r, 2628000, '/image/intro.svg');
});

// Throw 404 if no page found
app.use((h, r) => {
  r.status(404).sendFile(addPath('/index.html'));
});
const PORT = process.env.PORT || 8080;
app.listen(PORT);
