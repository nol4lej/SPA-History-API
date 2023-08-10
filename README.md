# SPA en Vanilla JavaScript utilizando el History API

Documentacion: [https://developer.mozilla.org/en-US/docs/Web/API/History_API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)

### Soluciones de rutas desde el servidor

Las siguientes soluciones corresponden al error de obtención de rutas (Cannot GET /{ruta}) al recargar nuestra página web. 

## Solución con Express (NodeJS):

1.- Instalar dependencias de Express:
~~~
npm install express
~~~

2.- Crear un archivo para el servidor junto con la configuración de enrutamiento:
~~~
const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, '../'); // Ruta a la carpeta de archivos estáticos

app.use(express.static(publicPath));

// redireccionamiento de las rutas
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
~~~

3.- Levantar el servidor
~~~
node server.js
~~~

## Solución con Apache:

1.- Crear un archivo llamado .htaccess en nuestra carpreta principal del archivo y agregar la siguiente configuración:
~~~
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
~~~

## Solución con Nginx:

1.- Abre el archivo de configuración de Nginx
(Algunos de los lugares comunes son /etc/nginx/nginx.conf o en un directorio específico del sitio en /etc/nginx/sites-available.)

2.- Encuentra o crea un bloque server. Esto define la configuración para un sitio web en particular.

3.- Dentro del bloque server, agrega el bloque de ubicación (location) con la configuración de try_files:

~~~
location / {
    try_files $uri $uri/ /index.html;
}
~~~

Ejemplo de la configuración en un archivo real:

~~~
server {
    listen 80;
    server_name tu_dominio.com;  # Nombre de tu dominio

    root /ruta/a/tu/carpeta/public;  # Ruta real de tu carpeta de archivos

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Otras configuraciones (si las tienes)...

    # Bloque para configuraciones de SSL si es necesario...
}
~~~
