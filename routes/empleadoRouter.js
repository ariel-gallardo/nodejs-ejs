const { Console } = require('console')
const Express = require('express')
const Router = Express.Router()
const Path = require('path')

const {Nuevo, Registrar, Edicion, Modificar, Borrar, Lista} = require(Path.resolve('controllers','EmpleadoControlador'))

Router.get('/', Lista)
Router.get('/crear',Nuevo)
Router.post('/crear',Registrar)
Router.get('/modificar/:legajo',Edicion)
Router.post('/modificar/:legajo',Modificar)
Router.post('/borrar/:legajo', Borrar)


module.exports = Router