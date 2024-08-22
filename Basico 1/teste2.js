/*// declaração da função
function somarDoisNumeros(numA, numB) {
    return numA + numB;
   }
      
   // atribuindo o retorno de uma função a uma variável
   const resultado = somarDoisNumeros(2, 2);
   console.log(resultado);
   
   function dividir(dividendo, divisor) {
    return dividendo / divisor;
    }
    
    const resultado = dividir(10, 2);
    console.log(`o resultado é ${resultado}`); // o resultado é undefined
    */
   

    const http = require('http');

  const hostname = '127.0.0.1';
  const port = 3000;

  const server = http.createServer((_, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Olá mundo!');
  });

  server.listen(port, hostname, () => {
    console.log(`Servidor rodando: http://${hostname}:${port}/`);
  });