const express = require('express');
const app = express();
const morgan = require('morgan');


// configuracion de servidor
app.set('port', process.env.PORT || 3000);

//meddlewares, morgan para peticiones, para aceptar los datos de los inputs y el json para leer daos json
app.use(morgan ('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//rutas
app.use(require('./ruta'));

//iniciacio del servidor
app.listen(app.get('port'), ()=>{
    console.log('puerto del servidor 3000');
});