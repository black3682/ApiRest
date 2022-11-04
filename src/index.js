const express = require("express");
const app = express();
const morgan = require("morgan");

//configuraciones

app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);


//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//Rutas
app.use(require('./routes/index'));
app.use(require('./routes/libros'));


//iniciando el servidor

app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
})
