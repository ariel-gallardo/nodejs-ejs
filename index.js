const Express = require('express')                                  //Clase de express
const App = Express()                                               //Instancia de express
const Path = require('path')                                        //Resuelve problemas de rutas absolutas
const BodyParser = require('body-parser')                           //Obtener datos de formularios
const CustomRouter = require(Path.resolve('routes/baseRouter'))     //Conjunto de rutas
const ViewEngine = require('ejs')                                   //Motor de vista


App.set('view engine', 'ejs');
App.use(BodyParser.urlencoded({extended: true}))
App.use(CustomRouter)


App.listen(3000, console.log('Web en el puerto 3000'))



