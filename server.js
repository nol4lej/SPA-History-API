const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, '/'); // Ruta a la carpeta de archivos estáticos

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});