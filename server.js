//Mandamos a llamar a express para inciar nuestro servidor
const express = require('express');
//Creamos una variable para llamar a las funciones de express
const app = express();
const port = process.env.PORT || 3000;
//Traemos routerApi para gestionar las rutas detectadas por el servidor
const {  routerApi } = require('./routes');
const { logErrors,boomErrorHandler,errorHandler } = require('./middlewares/errorHandler');

app.use(express.json());
//Agregamos al routerApi nuesta app
routerApi(app);
//Despues del router agregamos los middlewares de errores
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


//Le decimos a nuestra aplicacion que la ruta ../laboratorio contendra nuestros estaticos para que se muestre nuestra pagina
app.use('/laboratorio', express.static('public'));

app.listen(port, ()=>{
  console.log('[PUERTO]:',port);
})
