// console.log('shreyans');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pseudo selectors & more desining</title>
      <style>
          .container{
              border: 2px solid red;
              background-color: rgb(182, 231, 133);
              padding: 34px;
              margin: 34px auto;
              width: 666px;
          }
          a{
              text-decoration: none;
              color: black;
          }
          a:hover{
              color: rgb(238, 52, 52);
              background-color: lightblue;
          }
          a:visited{background-color: yellow;}
          a:active{background-color: blue;}
          .btn{
              background-color:red;
              padding: 6px;
              border: none;
              cursor: pointer;
              font-size: 13px;
              border-radius: 4px;
          }
          </style>
  </head>
  <body>
      <div class="container" id="cont1">
          <h3>This is my heading</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, vero aliquam praesentium sapiente fugiat, voluptates consectetur aspernatur nam iste eligendi harum obcaecati, facilis quam eaque. Non harum nihil laborum laudantium nobis a corrupti magni.</p>
          <a href="https://google.com" class="btn">readmore</a>
          <button class="btn">contact us</button>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});