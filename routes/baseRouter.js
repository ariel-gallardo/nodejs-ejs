const Express = require('express')
const Router = Express.Router()
const Path = require('path')

const RouterEmpleado = require(Path.resolve('routes/empleadoRouter'))

function vistaBase(req, res){
    res.render('index')
}

Router.use('/empleados',RouterEmpleado)
Router.get('/',vistaBase)
 
module.exports = Router